import React from 'react';
import Page404 from '../view/404';
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

export { route };
