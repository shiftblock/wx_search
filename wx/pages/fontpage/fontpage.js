// pages/fontpage/fontpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   or:true,
    imgUrls: [
      'http://cdn.steamstatic.com.8686c.com/steam/apps/406150/header.jpg?t=1494792496',
      'http://cdn.steamstatic.com.8686c.com/steam/apps/346110/header.jpg?t=1490980630',
      'http://cdn.steamstatic.com.8686c.com/steam/apps/578080/header.jpg?t=1493220159',
      'http://cdn.steamstatic.com.8686c.com/steam/apps/582600/header.jpg?t=1494516507',
      'http://cdn.steamstatic.com.8686c.com/steam/apps/381210/header.jpg?t=1494622152',
      'http://cdn.steamstatic.com.8686c.com/steam/apps/588650/header.jpg?t=1494863475'
    ],
    dlc: [
      {id:1, name: 'REFUNCT', price: '￥7', platform: '跑酷', img:'../../pic/frontpage-list/1.jpg'},
      {id:2 , name: 'VR Escape the space station', price: '￥22', platform: '冒险、角色扮演', img: '../../pic/frontpage-list/2.jpg' },
      {id:3 ,name: "Sherlock Holmes: The Devil's Daughter", price: '￥111', platform: '推理、冒险', img: '../../pic/frontpage-list/3.jpg' },
      {id:4 ,name: 'Halfdead', price: '￥6', platform: '冒险、多人', img: '../../pic/frontpage-list/4.jpg' },
      {id:5 , name: 'Desktop Dungeons', price: '￥38', platform: '策略、回合制', img: '../../pic/frontpage-list/5.jpg' },
      {id:6 , name: 'EARTHLOCK', price: '￥29', platform: '冒险、奇幻', img: '../../pic/frontpage-list/6.jpg' }
    ],
    id:"",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  hid:function(){
    console.log(1)
    this.setData({
      or:false
    })
  }
  ,

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  getid:function(e){
    //console.log(e.currentTarget.dataset.id);
    this.setData({
      id: e.currentTarget.dataset.id
    });
    wx.navigateTo({
      url: '../gamevideo/gamevideo?id='+this.data.id
    })
  }
})