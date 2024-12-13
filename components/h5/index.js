export default {
  install(app) {
    const globModules = import.meta.glob('./*.vue', { eager: true })
    for (const key in globModules) {
      const name = /.\/(?<comp>.*).vue/.exec(key)?.groups.comp
      if (name) {
        app.component(`hl-h5-${name.toLowerCase()}`, globModules[key].default)
      }
    }
  },
}
