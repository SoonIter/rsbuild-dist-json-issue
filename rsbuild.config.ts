import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      optimization: {
        chunkIds: 'named',
        moduleIds: "named",
        minimize: false
      }
    }
  }
});
