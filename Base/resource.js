var res = {
    HelloWorld_png : "res/HelloWorld.png",
    playSceneImage: {type: "image", src: "res/playScene.png"},
    playScenePlist: {type: "plist", src: "res/playScene.plist"},
    PlayScene_jon: "res/PlayScene.json",
    StatusLayer_json: "res/StatusLayer.json",
    BackgroundLayer00_json: "res/BackGroundLayer00.json",
    BackgroundLayer01_json: "res/BackGroundLayer01.json",

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
