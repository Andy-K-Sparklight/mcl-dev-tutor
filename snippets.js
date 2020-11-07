window.$docsify = window.$docsify || {};
window.$docsify.plugins = window.$docsify.plugins || [];
window.$docsify.plugins.push(function (hook, vm) {
  hook.afterEach(function (html, next) {
    next(parseBSAlert(html));
  });
});
function parseBSAlert(html) {
  var hb = html;
  var BSAlertRegex = /{bsa (success|info|warning|danger|primary|secondary|dark|light)+ [^}]*}/g;
  var all = html.match(BSAlertRegex);
  if (all) {
    for (var i = 0; i < all.length; i++) {
      var typeRegex = /(?<=\{bsa )(success|info|warning|danger|primary|secondary|dark|light)/g;
      var textRegex = /(?<=\{bsa (success|info|warning|danger|primary|secondary|dark|light) )[^\}]*(?=\})/g;
      var type = all[i].match(typeRegex) || [];
      var text = all[i].match(textRegex) || [];
      var res = `<div class="alert alert-${type[0] || ""}">${
        text[0] || ""
      }</div>`;
      hb = hb.replace(all[i], res);
    }
  }
  return hb;
}
