import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useTopic } from '../../store/action';
import { Alert } from 'antd';
import Details from './Detail';
import Replies from './Replies';
function TopicPage() {
  const { id } = useParams();
  const getData = useTopic();
  const history = useHistory();
  const { loading, data, isError, errMsg } = useSelector((state) => state.topic);
  console.log(data);
  useEffect(() => {
    getData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      {isError ? (
        <Alert
          message={errMsg}
          type="success"
          closable
          onClose={() => {
            history.goBack();
          }}
        ></Alert>
      ) : (
        ''
      )}
      <Details loading={loading} data={data} />
      <Replies data={data.replies} loadin={loading}></Replies>
    </div>
  );
}
export default TopicPage;
