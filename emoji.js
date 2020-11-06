var AllPonyEmoji = {
	"&ts-think": "https://www.picbed.cn/images/2020/11/06/ts_think.png"
};
window.$docsify.plugins.push(
function (hook, vm){
	hook.beforeEach(function (content){
	var c = content;
		for (var em of Object.entries(AllPonyEmoji.entries)){
			c = replaceAll(c,em[0],"<img width='80' height='72' href='"+em[1]+"'></img>);
		}
	return c;
	})
})
function replaceAll(origin,s,j){
   if (s in origin.replace(s,j)){
		return replaceAll(origin.replace(s,j),s,j)
	}else{
		return origin.replace(s,j)
	}
}
