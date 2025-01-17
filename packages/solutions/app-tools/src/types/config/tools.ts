import type { BuilderConfig } from '@modern-js/builder-webpack-provider';
import type { JestConfig } from '@modern-js/core';
import type { PluginSwcOptions } from '@modern-js/builder-plugin-swc';
import type { PluginEsbuildOptions } from '@modern-js/builder-plugin-esbuild';

export type BuilderToolsConfig = Required<BuilderConfig>['tools'];

/**
 * The configuration of `tools.tailwindcss` is provided by `tailwindcss` plugin.
 * Please use `yarn new` or `pnpm new` to enable the corresponding capability.
 * @requires `tailwindcss` plugin
 */
export type Tailwindcss =
  | Record<string, any>
  | ((options: Record<string, any>) => Record<string, any> | void);

export interface ToolsUserConfig extends BuilderToolsConfig {
  tailwindcss?: Tailwindcss;
  jest?: JestConfig | ((jestConfig: JestConfig) => JestConfig);
  esbuild?: PluginEsbuildOptions;
  /**
   * The configuration of `swc` is provided by `swc` plugin.
   * @requires `swc` plugin
   */
  swc?: PluginSwcOptions;
}

export type ToolsNormalizedConfig = ToolsUserConfig;
