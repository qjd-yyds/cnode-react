import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { indexNav, types } from '@/router';
import QueryString from 'qs';
function IndexNav(props) {
  const { search } = useLocation();
  let { tab, page } = QueryString.parse(search.substr(1));
  console.log(page);
  const activeIndex = typeof tab === 'undefined' ? 0 : types.indexOf(tab);
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[activeIndex + '']}>
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
