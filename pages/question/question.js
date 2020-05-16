Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionNum: [1,2,3,4,5,6,7,8],
    questionList: [], 
  },

  /**
   * 获取题目列表
   */
  getQuesList(){
    var quesData = require('../../question.js');
    var quesList = quesData.quesList;
    
    var min = 1;
    var max = 65;
    var arr = [];
    for (var i = 0; i < 8; i++) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      num = parseInt(num, 10);
      if (arr.indexOf(num) == -1){
        arr.push(num);
      }
      else{
        i -= 1;
      }
    }
    
    var question = [];
    for (var j = 0; j < 8; j++){
      question.push(quesList[arr[j]-1]);
    }

    this.setData({
      questionList: question
    })
  },

  /**
   * 处理点击选项
   * comment below added by: yupeng
   * 1. 检查答题是否选对，错误自动添加到错题集
   * 2. 添加收藏题目功能，此处可能需要在question.wxml中实现
   * 3. 错题集和收藏功能都可以根据题目id和用户id，添加到一个js文件中（与题目库question.js类似）
   */
  handleClick:function(e){
    // 输出用户选择的选项（ABCD-1234）
    console.log(e.currentTarget.dataset.ans);
    // 输出这道题的id（题库里的编号）
    console.log(e.currentTarget.dataset.id);
    // 测试答错时的反馈
    console.log(e.currentTarget.dataset.answer);
    if (e.currentTarget.dataset.ans == e.currentTarget.dataset.answer){
      console.log("答对了~");
      // 弹框显示答对了信息
      wx.showModal({
        title: '答对了~',
        content: '恭喜你，答对了',
        showCancel: false,
        cancelText: '取消',
        confirmText: "确定",//默认是“确定”
      });
    }
    else{
      console.log("答错了！");
      // 弹框显示答错了信息
      wx.showModal({
        title: '答错了！',
        content: '对不起，答错了',
        showCancel: false,
        cancelText: '取消',
        confirmText: "确定",//默认是“确定”
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getQuesList();
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