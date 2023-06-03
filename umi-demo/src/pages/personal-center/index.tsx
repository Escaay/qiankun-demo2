import styles from './index.less';
import {useHistory,useParams,useLocation,useRouteMatch} from 'umi'
export default function PersonalCenter(state) {
  // 如果是路由跳转过来那么参数是location,history,match,routes等
  // 如果是子组件渲染，传的是props
  // console.log('state',state);
  let params=useParams()
  // console.log('params:',params);
  let location=useLocation()
  // console.log('location:',location);
  let routesMatch=useRouteMatch()
  // console.log('routesMatch:',routesMatch);
  return (
    <div>
      <h1>个人中心</h1>
    </div>
  );
}
