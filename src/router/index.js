import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// 实现路由懒加载
const ZLDiscover = lazy(() => import('@/pages/discover'));
const ZLRecommend = lazy(() => import('@/pages/discover/c-pages/recommend'));
const ZLRanking = lazy(() => import('@/pages/discover/c-pages/ranking'));
const ZLSong = lazy(() => import('@/pages/discover/c-pages/song'));
const ZLRadio = lazy(() => import('@/pages/discover/c-pages/radio'));
const ZLArtist = lazy(() => import('@/pages/discover/c-pages/artist'));
const ZLAlbum = lazy(() => import('@/pages/discover/c-pages/album'));
const ZLPlayer = lazy(() => import('@/pages/player'));
const ZLMine = lazy(() => import('@/pages/mine'));
const ZLFriend = lazy(() => import('@/pages/friend'));

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <ZLDiscover />,
    children: [
      {
        path: "",
        element: <Navigate to="recommend" />
      },
      {
        // 子路由路径可以不用带上父路由的路径，前边也不用加/
        path: "recommend",
        element: <ZLRecommend />
      },
      {
        path: "ranking",
        element: <ZLRanking />
      },
      {
        path: "song",
        element: <ZLSong />
      },
      {
        path: "radio",
        element: <ZLRadio />
      },
      {
        path: "artist",
        element: <ZLArtist />
      },
      {
        path: "album",
        element: <ZLAlbum />
      },
      {
        path: "player",
        element: <ZLPlayer />
      }
    ]
  },
  {
    path: "/mine",
    element: <ZLMine />
  },
  {
    path: "/friend",
    element: <ZLFriend />
  }
]

export default routes;