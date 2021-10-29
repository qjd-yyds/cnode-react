import { Pagination } from 'antd';
import QueryString from 'qs';
import { Link, useLocation } from 'react-router-dom';

export default function IndexPagination() {
  const { search } = useLocation();
  const { tab = 'all', page = '1' } = QueryString.parse(search.substr(1));
  return (
    <div className="index_pagination">
      <Pagination
        defaultCurrent={page}
        defaultPageSize={20}
        total={1000}
        itemRender={(page, type) => {
          switch (type) {
            case 'prev':
              return <Link to={`/?tab=${tab}&page=${page}`}>{'<'}</Link>;
            case 'page':
              return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>;
            case 'next':
              return <Link to={`/?tab=${tab}&page=${page}`}>{'>'}</Link>;
            default:
              return <Link to={`/?tab=${tab}&page=${page}`}>{'...'}</Link>;
          }
        }}
      />
    </div>
  );
}
