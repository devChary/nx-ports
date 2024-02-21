import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run ocean-freight:serve',
        production: 'nx run ocean-freight:preview',
      },
      ciWebServerCommand: 'nx run ocean-freight:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
