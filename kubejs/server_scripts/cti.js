PlayerEvents.loggedIn(event => {
    var player = event.player;
    var text = Text.green("工匠：技艺革新[版本:0.4a]").hover("全新冒险更新");
    player.tell(text);
});
PlayerEvents.loggedIn(event => {
    var player = event.player;
    var text = Text.green("整合包百科地址").clickOpenUrl("https://www.mcmod.cn/modpack/989.html").hover("点击打开");
    player.tell(text);
});
PlayerEvents.loggedIn(event => {
    var player = event.player;
    var text = Text.red("作品传播协议CC-BY-NC-ND4.0").clickOpenUrl("https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans").hover("点击打开");
    player.tell(text);
});
PlayerEvents.loggedIn(event => {
    var player = event.player;
    var text = Text.red("问题反馈，游玩讨论加入CTI官方QQ群：761155624").clickCopy("761155624").hover("点击复制");
    player.tell(text);
});