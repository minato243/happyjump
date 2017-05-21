/**
 * Created by thaod on 5/19/2017.
 */
var MAP_OBJECT_UNKNOWN =0;
var MAP_OBJECT_PLAYER =1;
var MAP_OBJECT_OBSTACLE =2;
var MAP_OBJECT_COIN =3;
var MAP_OBJECT_STRAW_BERRY =4;
var MAP_OBJECT_MINI_GROUND =5;
var MAP_OBJECT_TEMP_MINI_GROUND =0;
var MapObject = cc.Class.extend({

    position: null,
    type: 0,

    ctor: function(){

    },

    update: function(delta) {

    }
});