/**
 * Created by thaod on 5/17/2017.
 */
var BackGroundLayer = cc.Layer.extend({
    sprite:null,
    map00: null,
    map01: null,

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var playScene = ccs.load(res.PlayScene_jon);
        this.addChild(playScene.node);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello New Day", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "Play" splash screen"
        this.sprite = new cc.Sprite("#ic_sun.png");
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        this.map00 = ccs.load(res.BackgroundLayer00_json);
        this.addChild(this.map00);
        var mapWidth = playScene.getContentSize().width;
        this.map00.setPosition(cc.p(mapWidth, 0));

        this.map01 = ccs.load(res.BackgroundLayer01_json);
        this.addChild(this.map01);
        this.map01.setPosition(cc.p(mapWidth *2, 0));

        return true;
    }
});