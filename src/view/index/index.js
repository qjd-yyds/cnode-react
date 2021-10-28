import TopicsList from '@/components/TopicsList';
import QueryString from 'qs';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useTopicsList } from '../../store/action';
import IndexNav from './indexNav';
function IndexPage(props) {
  const getData = useTopicsList();
  const { search } = useLocation();
  // 当前页面qs
  const { tab, page } = QueryString.parse(search.substr(1));
  let { loading, data } = useSelector((state) => {
    return state.topics;
  });
  useEffect(() => {
    getData(tab, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, page]);
  return (
    <div>
      <IndexNav />
      <TopicsList loading={loading} data={data} />
    </div>
  );
}

export default IndexPage;
