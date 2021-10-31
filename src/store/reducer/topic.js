export default function topic(
  topic = {
    loading: true,
    data: {
      author: {}
    },
    isError: false,
    errMsg: ''
  },
  action
) {
  switch (action.type) {
    case 'topic_loading':
      return {
        loading: true,
        data: {
          author: {}
        },
        isError: false,
        errMsg: ''
      };
    case 'topic_loadover':
      return {
        loading: false,
        data: action.data,
        isError: false,
        errMsg: ''
      };
    case 'topic_error':
      return {
        loading: false,
        data: {
          author: {}
        },
        isError: true,
        errMsg: action.errMsg
      };
    default:
      return topic;
  }
}
