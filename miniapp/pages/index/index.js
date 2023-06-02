// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    value: "",
    articleProps: {
      value: ""
    }
  },
  inputHandle(evt) {
    console.log(evt)
    this.setData({
      'articleProps.value': evt.detail.value.replace(/\d*/g, '')
    })
  },
  nativeInput(evt) {
    this.setData({
      value: evt.detail.value.replace(/\d*/g, '')
    })
  }
})
