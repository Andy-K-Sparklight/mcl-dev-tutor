var AllPonyEmoji = [
  {
    key: /ts-think/g,
    url: "https://www.picbed.cn/images/2020/11/06/ts_think.png",
    width: 80,
    height: 72,
  },
];
if(!window.$docsify.plugins){window.$docsify.plugins=[]}
window.$docsify.plugins.push(function (hook, vm) {
  hook.afterEach(function (html,next) {
    var c = html;
    for (var em of AllPonyEmoji) {
        c=c.replace(em.key, `<img width='${em.width}' height='${em.height}' href='${em.url}'></img>`)
     }
    next(c)
  });
});
