const {getWeather} = getApp().getXpdNet();

Page({

    data: {
        weather: {
            degree: 0,
            humidity: 0,
            weather: "晴",
            wind_direction: 2,
            wind_power: 2,
        },
        winds: ["北风", "东北风", "东风", "东南风", "南风", "西南风", "西风", "西北风"],
        attractions: ["http://xiaopingdu.vip/images/hero_bg.jpg"]
    },

    onLoad: function () {

    },

    onShow:function () {
        let that = this;
        getWeather()
            .then(result => that.setData({weather: result}))
            .catch(err => console.error(err));
    }


});
