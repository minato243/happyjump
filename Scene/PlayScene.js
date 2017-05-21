/**
 * Created by thaod on 5/17/2017.
 */

var PlayScene = cc.Scene.extend({
    space: null,
    gameLayer: null,


    onEnter:function () {
        this._super();
        this.initPhysics();
        this.gameLayer = new cc.Layer();

        var backGround = new BackGroundLayer();
        var gamePlay = new GamePlayLayer(this.space);
        this.gameLayer.addChild(backGround, BACK_GROUND_LAYER, BACK_GROUND_LAYER);
        this.gameLayer.addChild(gamePlay, ANIMATION_LAYER, ANIMATION_LAYER);
        this.addChild(this.gameLayer, BACK_GROUND_LAYER);
        var statusLayer = new StatusLayer();
        this.addChild(statusLayer, STATUS_LAYER);
        this.scheduleUpdate();
    },

    initPhysics: function(){
        this.space = new cp.Space();
        this.space.gravity = cp.v(0, -350);
        //var wallBottom = new cp.SegmentShape(this.space.staticBody,
        //    cp.v(0, g_groundHeight),// start point
        //    cp.v(4294967295, g_groundHeight),// MAX INT:4294967295
        //    0);// thickness of wall
        //this.space.addStaticShape(wallBottom);
    },

    update: function(dt){
        //cc.log("update "+ dt);
        //this.space.step(dt)
        this._super(dt);
        var gamePlayLayer = this.gameLayer.getChildByTag(ANIMATION_LAYER);
        gamePlayLayer.update(dt);

    }
});