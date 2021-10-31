import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
// 扩展dayjs
dayjs.extend(relativeTime);
export default function FromNow(props) {
  const { date } = props;
  return dayjs(date).locale('zh-cn').fromNow();
}
