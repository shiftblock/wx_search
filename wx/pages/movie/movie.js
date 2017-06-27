// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kd_company:"",
    kd_number:"",
    kd_info:"",
    song:"",
    cartoon:"",
    cartoonsearch:"",
    searchSong:"11",
    array: ['申通', 'ems', '顺丰', '圆通','中通','韵达','天天','德邦'],
    objectArray: [
      {
        id: 0,
        name: '申通'
      },
      {
        id: 1,
        name: 'ems'
      },
      {
        id: 2,
        name: '顺丰'
      },
      {
        id: 3,
        name: '圆通'
      },
      {
        id: 4,
        name: '中通'
      },
      {
        id: 5,
        name: '韵达'
      },
      {
        id: 6,
        name: '天天'
      },
      {
        id: 7,
        name: '德邦'
      },


    ],
    index: 0,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindPickerChange: function (e) {
  
    
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  cartoonsubmit:function(e){
    var cartoontitle = e.detail.value.cartoonname;
    console.log(cartoontitle);
    var that = this;
    this.setData({
      cartoonsearch: cartoontitle
    });
    console.log(this.data.cartoonsearch);
    wx.request({
      url: 'http://japi.juhe.cn/comic/book', //仅为示例，并非真实的接口地址
      data: {
        'key': 'ca175eb0929507504d815a99b91916ed',
        'name': that.data.cartoonsearch
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          cartoon: res.data.result.bookList
        });
        console.log(that.data.cartoon)
      }
    })
  }
  ,
  songsubmit:function(e){console.log(e.detail.value);
  var that = this;
  var searchSong1 = e.detail.value.songname;
  this.setData({ searchSong: searchSong1})
  console.log(this.data.searchSong)
  wx.request({
    url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
    data: {
      'from': 'qianqian',
      'version': '2.1.0',
      'method': 'baidu.ting.search.catalogSug',
      'format': 'json',
      'query': that.data.searchSong
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      that.setData({song:res.data.album});
      console.log(that.data.song)
    }
  })
  
  },
  formSubmit:function(e){
    console.log(e.detail.value);
    var that = this;
    var company=e.detail.value.kd_company;
    var nnn=parseInt(e.detail.value.kd_number);
    if(company==0){this.setData({
      kd_company:"shentong"
    })}
    else if (company == 1) {
      this.setData({
        kd_company: "ems"
      })}
       else if (company == 2) {
      this.setData({
        kd_company: "shufeng"
      })}
       else if (company == 3) {
      this.setData({
        kd_company: "yuantong"
      })}
       else if (company == 4) {
      this.setData({
        kd_company: "zhongtong"
      })}
       else if (company == 5) {
      this.setData({
        kd_company: "yunda"
      })}
       else if (company == 6) {
      this.setData({
        kd_company: "tiantian"
      })}
       else if (company == 4) {
      this.setData({
        kd_company: "debangwuliu"
      })};
      var ccc = this.data.kd_company;
     
    wx.request({
      url: 'http://www.kuaidi100.com/query', //仅为示例，并非真实的接口地址
      data: {
        
        'type':ccc,
       // '719696456451'
        'postid': nnn
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
     //   console.log(res.data.data);
        that.setData({
          kd_info: res.data.data
        });
        console.log(that.data.kd_info)
      }
    })
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
  
  }
})