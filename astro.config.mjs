import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: nodejs({
    mode: 'standalone'
  }),
  integrations: [tailwind(), react()],
  
    middleware: [
      (req, res, next) => {
        console.log("🚀 ~ file: astro.config.mjs:17 ~ req:", req)
        const userCookie = req.cookies.id_user;
  
        if (!userCookie) {
          res.redirect('/login');
          return;
        }
  
        next();
      },
    ],
  
});