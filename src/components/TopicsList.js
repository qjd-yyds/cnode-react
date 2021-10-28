import { List } from 'antd';
function TopicsList(props) {
  const { loading, data } = props;
  return (
    <List
      className="topics_list"
      loading={loading}
      dataSource={data}
      renderItem={(item,index) => {
        return <List.Item key={index}>{item.title}</List.Item>;
      }}
    ></List>
  );
}

export default TopicsList;
