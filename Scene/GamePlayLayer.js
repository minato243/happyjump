/**
 * Created by thaod on 5/17/2017.
 */

var GamePlayLayer = cc.Layer.extend({
    space: null,
    sprite: null,
    body: null,

    ctor: function(space){
        this._super();
        this.space = space;
        this.init();
    },

    init: function(){
        this._super();
        //cc.spriteFrameCache.addSpriteFrames(res.runner_plist);
        //this.spriteSheet = new cc.SpriteBatchNode(res.runner_png);
        //this.addChild(this.spriteSheet);
        //
        //
        //// init runningAction
        //var animFrames = [];
        //for (var i = 0; i < 8; i++) {
        //    var str = "runner" + i + ".png";
        //    var frame = cc.spriteFrameCache.getSpriteFrame(str);
        //    animFrames.push(frame);
        //}
        //
        //var animation = new cc.Animation(animFrames, 0.1);
        //this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
        //this.sprite = new cc.Sprite("#runner0.png");
        //this.sprite.attr({x:80, y:85});
        //this.sprite.runAction(this.runningAction);

        //var player = new cc.Sprite("#ic_player.png");
        //player.attr({x: 240, y :140});
        this.sprite = new cc.PhysicsSprite("#ic_player.png");
        var contentSize = this.sprite.getContentSize();
        // 2. init the runner physic body
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        //3. set the position of the runner
        this.body.p = cc.p(240, g_groundHeight + contentSize.height / 2);
        //4. apply impulse to the body
        this.body.applyImpulse(cp.v(0, 400), this.body.p);//run speed
        //5. add the created body to space
        this.space.addBody(this.body);
        //6. create the shape for the body
        this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
        //7. add shape to space
        this.space.addShape(this.shape);
        //8. set body to the physic sprite
        this.sprite.setBody(this.body);
        this.addChild(this.sprite);
    },

    update: function(dt){
        var pos = this.sprite.getPosition();
        pos.y = pos.y + dt * V_JUMP;
        console.log("posY = "+ pos.y);
        this.sprite.setPosition(pos);
    }



});