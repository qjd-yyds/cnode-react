import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useTopic } from '../../store/action';
import { Alert } from 'antd';
import Details from './Detail';
function TopicPage() {
  const { id } = useParams();
  const getData = useTopic();
  const history = useHistory();
  const { loading, data, isError, errMsg } = useSelector((state) => state.topic);
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
        <Details loading={loading} data={data} />
      )}
    </div>
  );
}
export default TopicPage;
