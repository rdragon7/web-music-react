// 由于此项目一些api接口数据找不到，因此模拟一下数据

// 推荐页面入驻歌手数据
export const settleSinger = [
  {
    id: 1,
    picUrl: "https://p2.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg",
    name: "张惠妹aMEI",
    desc: "台湾歌手张惠妹" 
  },
  {
    id: 2,
    picUrl: "https://p2.music.126.net/wDxCsT3YEYdNg-UZU_ZKeg==/109951166047225823.jpg",
    name: "Fine乐团",
    desc: "独立音乐人" 
  },
  {
    id: 3,
    picUrl: "https://p2.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg",
    name: "万晓利",
    desc: "民谣歌手、中国现代民谣的代表人物之一" 
  },
  {
    id: 4,
    picUrl: "https://p2.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg",
    name: "音乐人赵雷",
    desc: "民谣歌手" 
  },
  {
    id: 5,
    picUrl: "https://p2.music.126.net/mS2PtUF2F_x949tJHS5Kog==/109951166457235020.jpg",
    name: "王三博",
    desc: "音乐人" 
  }
]

// 推荐页面热门主播数据
export const hotAncHor = [
  {
    id: 1,
    picUrl: "https://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg",
    name: "陈立",
    desc: "心理学家、美食家陈立教授" 
  },
  {
    id: 2,
    picUrl: "https://p2.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg",
    name: "刘维-Julius",
    desc: "歌手、播客节目《维维道来》主理人" 
  },
  {
    id: 3,
    picUrl: "https://p2.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg",
    name: "莫非定律MoreFeel",
    desc: "男女双人全创作独立乐团" 
  },
  {
    id: 4,
    picUrl: "https://p2.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg",
    name: "碎嘴许美达",
    desc: "脱口秀网络红人" 
  },
  {
    id: 5,
    picUrl: "https://p2.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg",
    name: "银临Rachel",
    desc: "古风音乐人" 
  }
]

// 歌手类别
export const artistCategories = [
  {
    title: "华语",
    area: 7,
    artists: [
      {
        name: "华语男歌手",
        url: "/discover/artist?id=1001",
        type: 1
      },
      {
        name: "华语女歌手",
        url: "/discover/artist?id=1002",
        type: 2
      },
      {
        name: "华语组合/乐队",
        url: "/discover/artist?id=1003",
        type: 3
      }
    ]
  },
  {
    title: "欧美",
    area: 96,
    artists: [
      {
        name: "欧美男歌手",
        url: "/discover/artist?id=2001",
        type: 1
      },
      {
        name: "欧美女歌手",
        url: "/discover/artist?id=2002",
        type: 2
      },
      {
        name: "欧美组合乐队",
        url: "/discover/artist?id=2003",
        type: 3
      },
    ]
  },
  {
    title: "日本",
    area: 8,
    artists: [
      {
        name: "日本男歌手",
        url: "/discover/artist?id=6001",
        type: 1
      },
      {
        name: "日本女歌手",
        url: "/discover/artist?id=6002",
        type: 2
      },
      {
        name: "日本组合/乐队",
        url: "/discover/artist?id=6003",
        type: 3
      },
    ]
  },
  {
    title: "韩国",
    area: 16,
    artists: [
      {
        name: "韩国男歌手",
        url: "/discover/artist?id=7001",
        type: 1
      },
      {
        name: "韩国女歌手",
        url: "/discover/artist?id=7002",
        type: 2
      },
      {
        name: "韩国组合/乐队",
        url: "/discover/artist?id=7003",
        type: 3
      },
    ]
  },
  {
    title: "其他",
    area: 0,
    artists: [
      {
        name: "其他男歌手",
        url: "/discover/artist?id=4001",
        type: 1
      },
      {
        name: "其他女歌手",
        url: "/discover/artist?id=4002",
        type: 2
      },
      {
        name: "其他组合乐队",
        url: "/discover/artist?id=4003",
        type: 3
      }
    ]
  },
]