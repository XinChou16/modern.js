import path from 'path';
import fs from 'fs-extra';
import type { CliPlugin, ModuleToolsHooks } from '@modern-js/self';

export default (): CliPlugin<ModuleToolsHooks> => {
  return {
    name: 'plugin-6',
    setup: () => {
      return {
        registerBuildPlatform() {
          return {
            platform: 'plugin-6',
            build: async (currentPlatform, context) => {
              const distPath = path.join(__dirname, './dist/plugin-6.json');
              const content = JSON.stringify({ currentPlatform, ...context });
              try {
                await fs.ensureFile(distPath);
                await fs.writeFile(distPath, content, 'utf-8');
              } catch (e) {
                console.info(e);
              }
            },
          };
        },
      };
    },
  };
};
