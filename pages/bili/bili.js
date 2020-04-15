// pages/wynews/wynews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList:[]
  },

  /** 
   * 获取视频列表
  */
  getVideoList(){
    let that = this;
    wx.request({
      header: { "Accept": "*/*", 'content-type': 'application/json'},
      method: 'Get',
      url: 'https://api.bilibili.com/x/player/playurl?cid=171961770&qn=1&type=&otype=json&avid=100314090',
      success: function(res) {
        console.log(res);
        // if(res.data.code===200){
          // that.setData({
          //   videoList:res.data.data
          // })
        // }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoList();
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