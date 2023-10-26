import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// buildホストから環境変数を取得
const BASE = process.env.BASE

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: BASE,
});
