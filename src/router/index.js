import React from 'react';
import Page404 from '@/view/404';
import AboutPage from '../view/about';
import GetStartPage from '../view/getstart';
import IndexPage from '../view/index';
import TopicPage from '../view/topic';
import UserPage from '../view/user';
const route = [
  {
    path: '/',
    exact: true, // 精确匹配
    render(props) {
      props.testName = 'testName';
      return <IndexPage {...props} />;
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
    name: '全部',
    url: '/?tab=all'
  },
  {
    name: '精华',
    url: '/?tab=good'
  },
  {
    name: '分享',
    url: '/?tab=share'
  },
  {
    name: '问答',
    url: '/?tab=ask'
  },
  {
    name: '招聘',
    url: '/?tab=job'
  },
  {
    name: '客户端测试',
    url: '/?tab=dev'
  }
];
export { route, nav, indexNav };
