export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/about/index',
    'pages/goods/category/index',
    'pages/cart/index',
    'pages/usercenter/my/index',
    'pages/example/index',
  ],
  subPackages: [
    {
      root: 'components/',
      pages: [
        'icon/example/index',
        'button/example/index',
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/tabbar-home-on.png',
        iconPath: 'images/tabbar-home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/goods/category/index',
        selectedIconPath: 'images/tabbar-cate-on.png',
        iconPath: 'images/tabbar-cate.png',
        text: '分类'
      },
      {
        pagePath: 'pages/cart/index',
        selectedIconPath: 'images/tabbar-cart-on.png',
        iconPath: 'images/tabbar-cart.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/usercenter/my/index',
        selectedIconPath: 'images/tabbar-my-on.png',
        iconPath: 'images/tabbar-my.png',
        text: '个人中心'
      }
    ]
  }
})
