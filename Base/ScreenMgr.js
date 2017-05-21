var ScreenMgr = cc.Class.extend({
   currentScreen: null,

   ctor: function(){
       this.currentScreen = null;
   },

   changeScreen: function(screenId){
        switch (screenId){

            case LOADING_SCREEN:
            {
                this.currentScreen = new LoadingScreen();
                cc.director.runScene(new cc.TransitionFade(0.5, this.currentScreen));
                break;
            }

            case MENU_SCREEN:
            {
                this.currentScreen = new MenuScreen();
                cc.director.runScene(new cc.TransitionFade(0.5, this.currentScreen));
                break;
            }

            case PLAY_SCREEN:
            {
                this.currentScreen = new PlayScene();
                cc.director.runScene(new cc.TransitionFade(0.5, this.currentScreen));
                break;
            }
            default :
            {

            }
        }
   },

});

ScreenMgr.screenMgrInstance = null;

ScreenMgr.getInstance = function()
{
    if(ScreenMgr.screenMgrInstance == null){
        ScreenMgr.screenMgrInstance = new ScreenMgr();
    }
    return ScreenMgr.screenMgrInstance;
}