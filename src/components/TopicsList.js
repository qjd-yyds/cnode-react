import { List, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TopicTag from './TopicTag';
import { Link } from 'react-router-dom';
import moment from 'moment';
function TopicsList(props) {
  const { loading, data } = props;
  return (
    <List
      className="topics_list"
      loading={loading}
      dataSource={data}
      renderItem={(item, index) => {
        const { author, last_reply_at, top, good, id, tab, title } = item;
        const { avatar_url, loginname } = author;
        return (
          <List.Item key={index}>
            <Col>
              <Link to={`/user/${loginname}`}>
                <Avatar title={avatar_url} src={avatar_url} icon={<UserOutlined />} />
              </Link>
            </Col>
            <Col xs={24} md={20}>
              <TopicTag tab={top ? 'top' : good ? 'good' : tab}></TopicTag>
              <Link to={`/topics/${id}`}>{title}</Link>
            </Col>
            <Col xs={0} md={4}>
              {last_reply_at}
            </Col>
          </List.Item>
        );
      }}
    ></List>
  );
}

export default TopicsList;
