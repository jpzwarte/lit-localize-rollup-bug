This repo contains a small Lit project that reproduces a bug with `@lit/localize-tools` where the transform mode does not work.

## Steps to reproduce
1. Close this repo
2. Run `npm ci`
3. Run `rollup -c`
4. Inspect `dist/nl/foo.js` and notice that the `msg('HELLO WORLD')` calls are still there
