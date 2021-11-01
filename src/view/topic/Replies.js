import { Card, Comment, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FromNow from '../../components/FromNow';
import { Link } from 'react-router-dom';
export default function replies(props) {
  const { data = [], loading } = props;
  data.reverse();
  return (
    <Card type="inner" title="评论列表" loading={loading}>
      <List
        dataSource={data}
        pagination={true}
        renderItem={(itemData) => {
          const { author, content, create_at } = itemData;
          return (
            <List.Item>
              <Comment
                datetime={
                  <time>
                    发表于：
                    <FromNow date={create_at}></FromNow>
                  </time>
                }
                avatar={
                  <Link to={`/user/${author.loginname}`}>
                    <Avatar title={author.avatar_url} src={author.avatar_url} icon={<UserOutlined />} />
                  </Link>
                }
                content={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}
                  ></div>
                }
              ></Comment>
            </List.Item>
          );
        }}
      ></List>
    </Card>
  );
}
