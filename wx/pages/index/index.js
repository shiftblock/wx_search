//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    animationData:"",
    motto: 'Start',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(1, 1).rotate(360).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  ck:function(){
    // wx.switchTab({
    //   url: '../fontpage/fontpage',
    // })
    // wx.reLaunch({
    //   url: '../fontpage/fontpage',
    // })
    wx.reLaunch({
      url: '../fontpage/fontpage',
    })
  }
  

})
