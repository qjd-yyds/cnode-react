import { Card } from 'antd';
import { Link } from 'react-router-dom';
import TopicTag from '@/components/TopicTag';
import FromNow from '../../components/FromNow';
export default function Details(props) {
  const { data, loading } = props;
  const { content, author, create_at, good, top, tab, title, visit_count } = data;
  return (
    <Card
      type="inner"
      bordered
      loading={loading}
      title={
        <>
          <h1>
            <TopicTag tab={top ? 'top' : good ? 'good' : tab}></TopicTag>
            {title}
          </h1>
          <p>
            - 作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>- 创建时间：
            <FromNow date={create_at} /> - 浏览人数：
            {visit_count}
          </p>
        </>
      }
    >
      <div
        dangerouslySetInnerHTML={{
          __html: content
        }}
      ></div>
    </Card>
  );
}
