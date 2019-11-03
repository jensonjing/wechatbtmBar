//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    list:[],
    changeIndex:0
  },
  onLoad: function () {
    this.initList();
  },
  getTab(data){
    const avIndex = data.detail;
    let navTile = null;
    this.setData({
      changeIndex:avIndex
    });
    if(avIndex == 0){
      navTile = "首页";
    }else if(avIndex == 1){
      navTile = "行业社区";
    }else if(avIndex == 2){
      navTile = "发现";
    }else if(avIndex == 3){
      navTile = "项目对接";
    }else if(avIndex == 4){
      navTile = "我的";
    };
    wx.setNavigationBarTitle({
      title: navTile
    });
  },
  initList(){
    const navMenu = [
      {
        "pagePath":'',
        "text": "首页",
        "iconPath": "../../imgs/1.jpg",
        "selectedIconPath": "../../imgs/1.jpg"
      },
      {
        "pagePath":'',
        "text": "行业社区",
        "iconPath": "../../imgs/1.jpg",
        "selectedIconPath": "../../imgs/1.jpg"
      },
      {
        "pagePath": "",
        "text": "发现",
        "iconPath": "../../imgs/1.jpg",
        "selectedIconPath": "../../imgs/1.jpg"
      },
      {
        "pagePath": "",
        "text": "项目对接",
        "iconPath": "../../imgs/1.jpg",
        "selectedIconPath": "../../imgs/1.jpg"
      },
      {
        "pagePath": "",
        "text": "我的",
        "iconPath": "../../imgs/1.jpg",
        "selectedIconPath": "../../imgs/1.jpg"
      }
    ];
    this.setData({
      list:navMenu
    });
  }
})
