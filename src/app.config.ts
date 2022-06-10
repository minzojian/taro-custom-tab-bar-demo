export default {
  pages: [
    'pages/index/index'
  ],
  tabBar: {
    custom: true,
    // color: '#000000',
    // selectedColor: '#000000',
    // backgroundColor: '#000000',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
    },
    //  {
    //   pagePath: 'pages/place/index',
    //   text: '场馆',
    // }, {
    //   pagePath: 'pages/user/index',
    //   text: '我的',
    // }
  ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
