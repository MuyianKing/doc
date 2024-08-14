export default {
  install(app) {
    const globModules = import.meta.glob('./**/Index.vue', { eager: true });
    for (const key in globModules) {
      const name = /.\/(?<comp>.*)\/Index.vue/.exec(key)?.groups.comp;
      if (name) {
        app.component(`custom-${name}`, globModules[key].default);
      }
    }
  },
};
