export default {
  content: [
    './docs/**/*.js',
    './docs/**/*.vue',
    './components/**/*.vue',
    './docs/**/*.ts',
    './docs/**/*.md',
    './node_modules/@hl/ui/src/components/**/*.js',
  ],
  important: true,
  options: {
    safelist: ['html', 'body'],
  },
}
