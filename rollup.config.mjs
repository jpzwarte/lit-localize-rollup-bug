import { localeTransformers } from '@lit/localize-tools/lib/rollup.js';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const locales = localeTransformers('lit-localize.transform.json');

export default [locales[1]].map(({ locale, localeTransformer }) => ({
  input: {
    foo: 'src/foo.ts'
  },
  output: {
    dir: `dist/${locale}`,
    format: 'es',
    sourcemap: true
  },
  plugins: [
    typescript({
      compilerOptions: {
        outDir: `dist/${locale}`
      },
      transformers: {
        before: [localeTransformer]
      }
    }),
    nodeResolve()
  ]
}));
