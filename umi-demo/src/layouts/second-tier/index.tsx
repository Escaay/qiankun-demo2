import styles from './index.less';
import JserImg from '@/components/jserImg'
import {useState} from 'react'
export default function SecondTier(props) {
  let path=props.location.pathname
  let pathArr=path.split('/')
  let pathNamePage=1
  if(pathArr.length>=3){
    let pathName=pathArr[2]
    // 页码
    pathNamePage=Number(pathName.slice(-1))
  }
  // 页码
  return (
    <div className={styles.secondTier}>
      <div>
      <h1>第二层</h1>
      {props.children}
      </div>
      {
        pathNamePage===2
        ?
        (
          <JserImg></JserImg>
        )
        :
        ''
      }
      
    </div>
  );
}
