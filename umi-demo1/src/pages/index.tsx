import styles from './index.less';
import { useModel } from 'umi';
export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  let {data,setData}  =masterProps
  return (
    <div className={styles.index}>
      <h1 className={styles.title}>我是子应用二号，下面是从主应用传过来的数据</h1>
      <ul className={styles.list}>
        {
          data.motivation.map((item,index)=>{
              return <li key={Math.random()}>
                  {item}
              </li>
          })
        }
        </ul>
    </div>
  );
}
