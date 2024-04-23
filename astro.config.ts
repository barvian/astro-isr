import { defineConfig } from 'astro/config'
import vercel from "@astrojs/vercel/serverless"
import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    isr: true,
    webAnalytics: {
			enabled: true
		}
  }),
  integrations: [
    vue({
      script: {
				propsDestructure: true
			}
    })
  ]
});