/* eslint-disable no-param-reassign */
/* eslint-disable max-statements */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file at
 * https://github.com/facebook/create-react-app/blob/master/LICENSE
 */

// Modified by Chao Xu (xuchaobei)

import webpack, { StatsCompilation } from 'webpack';
import { ProxyDetail, ProxyOptions } from '@modern-js/types';

const friendlySyntaxErrorLabel = 'Syntax error:';

function isLikelyASyntaxError(message: string) {
  return message.includes(friendlySyntaxErrorLabel);
}

// Cleans up webpack error messages.
function formatMessage(message: webpack.StatsError | string) {
  let lines: string[] = [];

  // webpack 5 stats error object
  if (typeof message === 'object') {
    message = `${(message.moduleName && `${message.moduleName}\n`) as string}${
      message.details || message.stack || message.message
    }`;
  }

  lines = message.split('\n');

  // Strip webpack-added headers off errors/warnings
  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js
  lines = lines.filter(line => !/Module [A-z ]+\(from/.test(line));

  // Transform parsing error into syntax error
  lines = lines.map(line => {
    const parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(
      line,
    );
    if (!parsingError) {
      return line;
    }
    const [, errorLine, errorColumn, errorMessage] = parsingError;
    return `${friendlySyntaxErrorLabel} ${errorMessage} (${errorLine}:${errorColumn})`;
  });

  message = lines.join('\n');

  // Smoosh syntax errors (commonly found in CSS)
  message = message.replace(
    /SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g,
    `${friendlySyntaxErrorLabel} $3 ($1:$2)\n`,
  );

  lines = message.split('\n');

  // Remove leading newline
  if (lines.length > 2 && lines[1].trim() === '') {
    lines.splice(1, 1);
  }
  // Clean up file name
  lines[0] = lines[0].replace(/^(.*) \d+:\d+-\d+$/, '$1');

  // Cleans up verbose "module not found" messages for files and packages.
  if (lines[1]?.startsWith('Module not found: ')) {
    lines = [
      lines[0],
      lines[1]
        .replace('Error: ', '')
        .replace('Module not found: Cannot find file:', 'Cannot find file:')
        .replace('[CaseSensitivePathsPlugin] ', '')
        .replace("Cannot resolve 'file' or 'directory' ", ''),
    ];
  }

  message = lines.join('\n');
  // Internal stacks are generally useless so we strip them... with the
  // exception of stacks containing `webpack:` because they're normally
  // from user code generated by webpack. For more information see
  // https://github.com/facebook/create-react-app/pull/1050
  message = message.replace(
    /^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm,
    '',
  ); // at ... ...:x:y
  message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, ''); // at <anonymous>
  lines = message.split('\n');

  // Remove duplicated newlines
  lines = lines.filter(
    (line, index, arr) =>
      index === 0 ||
      line.trim() !== '' ||
      line.trim() !== arr[index - 1].trim(),
  );

  // Reassemble the message
  message = lines.join('\n');
  return message.trim();
}

function formatWebpackMessages(json: StatsCompilation): {
  errors: string[];
  warnings: string[];
} {
  const formattedErrors = json.errors?.map(formatMessage);
  const formattedWarnings = json.warnings?.map(formatMessage);

  const result = {
    errors: formattedErrors || [],
    warnings: formattedWarnings || [],
  };

  if (result.errors?.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    result.errors = result.errors.filter(isLikelyASyntaxError);
  }

  // First error is usually it.
  if (result.errors.length > 1) {
    result.errors.length = 1;
  }

  return result;
}

export { formatWebpackMessages };
/* eslint-enable max-statements */
/* eslint-enable no-param-reassign */

function formatProxyOptions(proxyOptions: ProxyOptions) {
  const formatedProxy: ProxyDetail[] = [];
  if (!Array.isArray(proxyOptions)) {
    if ('target' in proxyOptions) {
      formatedProxy.push(proxyOptions as ProxyDetail);
    } else {
      Array.prototype.push.apply(
        formatedProxy,
        Object.keys(proxyOptions).reduce(
          (total: ProxyDetail[], source: string) => {
            const option = proxyOptions[source];

            total.push({
              context: source,
              changeOrigin: true,
              logLevel: 'warn',
              ...(typeof option === 'string' ? { target: option } : option),
            });
            return total;
          },
          [],
        ),
      );
    }
  } else {
    formatedProxy.push(...proxyOptions);
  }
  return formatedProxy;
}

export { formatProxyOptions };