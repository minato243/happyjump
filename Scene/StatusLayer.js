/**
 * Created by thaod on 5/17/2017.
 */

var StatusLayer = cc.Layer.extend({
    coinLabel: null,
    scoreLabel: null,
    pauseButton: null,

    ctor: function(){
        this._super();
        this.init();
    },

    init: function(){
        this._super();
        var statusLayer = ccs.load(res.StatusLayer_json);
        this.addChild(statusLayer.node);

        this.coinLabel = statusLayer.node.getChildByName("lb_coin");
        this.scoreLabel = statusLayer.node.getChildByName("lb_score");
        this.pauseButton = statusLayer.node.getChildByName("btn_pause");
        this.scoreLabel.setString("00");
        this.coinLabel.setString("0");
    }
});