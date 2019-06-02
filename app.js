//app.js
import XpdNet from './net/index';

App({

    onLaunch: function () {

    },

    globalData: {
        userInfo: null
    },

    getXpdNet: function () {
        return XpdNet;
    }

});