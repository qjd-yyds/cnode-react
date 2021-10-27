import { Layout, Affix, Row, Col, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { nav } from '../router';
function Header() {
  // 获取当前路由信息
  const { pathname } = useLocation();
  const activeIndex = nav.find((navData) => navData.to === pathname);
  return (
    <Affix offsetTop={0}>
      <Layout.Header id="header">
        <div className="wrap">
          <Row>
            <Col xs={12} sm={8} md={4}>
              <h1 className="logo">
                <Link to="/">logo</Link>
              </h1>
            </Col>
            <Col xs={12} sm={16} md={20}>
              <Menu mode="horizontal" theme="dark" selectable defaultSelectedKeys={[activeIndex.to]}>
                {nav.map((item) => (
                  <Menu.Item key={item.to}>
                    <Link to={item.to}>{item.txt}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Col>
          </Row>
        </div>
      </Layout.Header>
    </Affix>
  );
}

export default Header;
