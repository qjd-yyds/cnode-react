import axios from 'axios';
import { useDispatch } from 'react-redux';

const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
});
// 获取主题列表数据
function useTopicsList() {
  const dispatch = useDispatch();
  return function (tab = 'all', page = 1, limit = 20, mdrender = true) {
    dispatch({
      type: 'topics_loading'
    });
    http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res) => {
      dispatch({
        type: 'topics_loadover',
        data: res.data.data
      });
    });
  };
}
// 主题详情
function useTopic() {
  const dispatch = useDispatch();
  return function (id) {
    dispatch({
      type: 'topic_loading'
    });
    http
      .get(`/topic/${id}`)
      .then((res) => {
        dispatch({
          type: 'topic_loadover',
          data: res.data.data
        });
      })
      .catch((res) => {
        dispatch({
          type: 'topic_error',
          errMsg: res.response.data.error_msg
        });
      });
  };
}
export { useTopicsList, useTopic };
