var AllPonyEmoji = [
  {
    key: "ts-think",
    url: "https://www.picbed.cn/images/2020/11/06/ts_think.png",
    width: 80,
    height: 72,
  },
];
window.$docsify.plugins.push(function (hook, vm) {
  hook.beforeEach(function (content) {
    var c = content;
    for (var em of AllPonyEmoji) {
      c = replaceAll(
        c,
        "&" + em.key,
        `<img width='${em.width}' height='${em.height}' href='${em.url}'></img>`
      );
    }
    return c;
  });
});
function replaceAll(origin, s, j) {
  if (s in origin.replace(s, j)) {
    return replaceAll(origin.replace(s, j), s, j);
  } else {
    return origin.replace(s, j);
  }
}
