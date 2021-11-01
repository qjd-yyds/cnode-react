import { Card, Avatar } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useUser } from '../../store/action';
import TopicsList from '@/components/TopicsList.js';
import { UserOutlined } from '@ant-design/icons';
import FromNow from '../../components/FromNow';
function UserPage() {
  const { loading, data } = useSelector((state) => state.user);
  const { avatar_url, githubUsername, score, create_at, recent_replies = [], recent_topics = [] } = data;
  const getData = useUser();
  const { loginname } = useParams();
  useEffect(() => {
    getData(loginname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="user_page">
      <Card loading={loading} type="inner" className="user-details">
        <Avatar size={80} icon={<UserOutlined />} src={avatar_url}></Avatar>
        <p>
          用户名：{loginname}   
          注册时间：<FromNow date={create_at} />   
          积分：{score}
        </p>
        <p>
          github：
          <a target="_blank" href={`https://github.com/${githubUsername}`} rel="noreferrer">
            {`https://github.com/${githubUsername}`}
          </a>
        </p>
      </Card>
      <Card loading={loading} title={'最近创建的话题'} type="inner">
        <TopicsList loading={loading} data={recent_topics} />
      </Card>
      <Card loading={loading} title={'最近参与的话题'} type="inner">
        <TopicsList loading={loading} data={recent_replies} />
      </Card>
    </div>
  );
}

export default UserPage;
