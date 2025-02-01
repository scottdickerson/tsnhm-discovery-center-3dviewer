# Project Setup

This project requires `git lfs` to be installed. If you don't have it installed, you can install it by following the instructions [here](https://git-lfs.github.com/). and Vercel to be [configured](https://vercel.com/docs/projects/overview#git-large-file-storage-lfs) to support it.

## Building

By default this builds a static site to the `/dist` directory than can be served with `nginx` using the sample `nginx.conf` or by using the `serve -s dist` command.

```bash
npm run build
serve -s dist
```

## Deploying to Vercel

If you want to automatically deploy to Vercel instead on push to main, you can comment in the lines of the `astro.config.mjs` file related to vercel, or overwrite the `astro.config.mjs` file with the `astro.config.vercel.mjs` file.
