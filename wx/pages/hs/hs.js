var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    list:"",
    ipt:"",
    name:"",
    show:""
  },
  search:function(e){
    var that = this;
   // console.log(e);
    wx.request({
      url: 'http://www.beastzzl.top/json/test.js',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) { 
        var obj = res.data.data;
        console.log(res.data);
        obj.map(function(a,b,c){
          if (that.data.ipt == a.name) 
          {  that.setData({ show: [a]})}
          that.setData({
            list:a,
            name:a.name
          });
        
        });
       // console.log(that.data.show)
      }
    })
  },
  change:function(e){
    this.setData({
      ipt:e.detail.value
    })
  }
})