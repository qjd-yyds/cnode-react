import { Layout, Affix, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Affix offsetTop={0}>
      <Layout.Header>
        <div className="wrap">
          <Row>
            <Col xs={10}>
              <h1 className="logo">
                <Link>logo</Link>
              </h1>
            </Col>
            <Col xs={14}>
            </Col>
          </Row>
        </div>
      </Layout.Header>
    </Affix>
  );
}

export default Header;
