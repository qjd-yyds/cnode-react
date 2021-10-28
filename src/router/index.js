import React from 'react';
import Page404 from '@/view/404';
import AboutPage from '../view/about';
import GetStartPage from '../view/getstart';
import IndexPage from '../view/index';
import TopicPage from '../view/topic';
import UserPage from '../view/user';
import QueryString from 'qs';
const types = ['all', 'good', 'share', 'ask', 'job', 'dev'];
const route = [
  {
    path: '/',
    exact: true, // 精确匹配
    render(props) {
      const { location } = props;
      const { search } = location;
      const { tab, page } = QueryString.parse(search.substr(1));
      if ((tab === undefined && page === undefined) || (types.includes(tab) && page === undefined) || page > 0) {
        return <IndexPage {...props} />;
      }
      return <Page404 />;
    }
  },
  {
    path: '/topics/:id',
    exact: true, // 精确匹配
    render(props) {
      return <TopicPage {...props} />;
    }
  },
  {
    path: '/user/:username',
    exact: true, // 精确匹配
    render(props) {
      return <UserPage {...props} />;
    }
  },
  {
    path: '/getStart',
    exact: true, // 精确匹配
    render(props) {
      return <GetStartPage {...props} />;
    }
  },
  {
    path: '/about',
    exact: true, // 精确匹配
    render(props) {
      return <AboutPage {...props} />;
    }
  },
  {
    path: '',
    exact: false, // 精确匹配
    render(props) {
      return <Page404 {...props} />;
    }
  }
];
const nav = [
  {
    to: '/',
    txt: '首页'
  },
  {
    to: '/getStart',
    txt: '新手入门'
  },
  {
    to: '/about',
    txt: '关于我们'
  }
];
const indexNav = [
  {
    txt: '全部',
    to: '/?tab=all'
  },
  {
    txt: '精华',
    to: '/?tab=good'
  },
  {
    txt: '分享',
    to: '/?tab=share'
  },
  {
    txt: '问答',
    to: '/?tab=ask'
  },
  {
    txt: '招聘',
    to: '/?tab=job'
  },
  {
    txt: '客户端测试',
    to: '/?tab=dev'
  }
];
export { route, nav, indexNav, types };
