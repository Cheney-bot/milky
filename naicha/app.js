//app.js
import Request from "./http/request"
import {userInfoApi} from "./http/api"
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.checkLogin();
  },
  checkLogin() {
    // 检查登录,
    const token = wx.getStorageSync('TOKEN');
    if (token) {
      //检查token是否过期
      wx.request({
        url: 'http://localhost:3000/api/auth/check_login',
        method: 'GET',
        data: {
          token
        },
        success:async ({
          statusCode
        }) => {
          if (statusCode !== 200) {
            //登录过期了
            this.login();
          }else{
            // 请求用户信息
            const data = await Request.get(userInfoApi);
            console.log(data);
            
          }
        },
        fail: (error) => {
          this.login();
        }
      });
    } else {
      this.login();
    }
  },
  login() {
    //登录:第一步，获得code
    wx.login({
      success({
        code
      }) {
        // 登录第二步：将code发送给服务器
        wx.request({
          url: 'http://localhost:3000/api/auth/send_code',
          method: 'POST',
          data: {
            code
          },
          // 登录第六步：获得登录态
          success(res) {
            const token = res.data.token;

            // 登录第七步：保存登录态
            wx.setStorageSync('TOKEN', token);
            getCurrentPages()[0].setData({
              isLoadin:true
            })
          },
          fail(error) {
            console.log(error);
          }
        })
      }
    })
  }
})