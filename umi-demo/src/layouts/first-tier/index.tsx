import styles from './index.less';
import Nav from '@/components/nav'
import AsideNav from '@/components/aside-nav'
import { useSelector,useLocation } from 'umi';
import {connect} from 'umi'
function FirstTier(props) {
  let location=useLocation(state=>state)
  let pathname=location.pathname.split('/')[1]
  // console.log('第一层的props:',props);
  let ifAsideNavShow=useSelector(state=>state.navState.ifAsideNavShow)
  return (
    <div className={styles.firstTier}>
      <div className={styles.nav}><Nav></Nav></div>
      {
        ifAsideNavShow?<div className={styles.assideNav}><AsideNav></AsideNav></div>:''
      }
      {/* 多个className要用模板字符串,而且各个值之间要用空格隔开 */}
      <div className={`${styles.content} ${pathname==='users'?styles.usersContent:''}`}>
        {props.children}
        </div>
    </div>
  );
}
// 可以用connect连接，然后在props中取models，也可也直接从useSelector中取models
// let mapStateToProps=(state)=>{
//     return {
//       ifAsideNavShow:state.navShow.ifAsideNavShow
//     }
// }

// export default connect(mapStateToProps)(FirstTier)
export default FirstTier
