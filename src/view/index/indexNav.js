import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { indexNav, types } from '@/router';
import QueryString from 'qs';
function IndexNav(props) {
  const { search } = useLocation();
  let { tab = 'all', page = '1' } = QueryString.parse(search.substr(1));
  console.log(page, 'page');
  const activeIndex = typeof tab === 'undefined' ? 0 : types.indexOf(tab);
  return (
    <Menu className="index_nav" mode="horizontal" selectedKeys={[activeIndex + '']}>
      {indexNav.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <Link to={item.to}>{item.txt}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export default IndexNav;
