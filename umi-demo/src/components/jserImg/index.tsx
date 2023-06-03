import styles from './index.less'
import { Spin } from 'antd';
import {useState}   from 'react'
const JserImg=()=>{
    let [ifShow,setIfShow]=useState(false)
    setTimeout(()=>{
        setIfShow(true)
    },1500)
    return (
        <div>
            {
            ifShow
            ?
            (
                <div>
                <img src={require('@/assets/images/jser.png')} className={styles.bjImg}/>
                <img src={require('@/assets/images/HTTP传输.png')} className={styles.bjImg} style={{width:'400px'}}/>
            </div>
            )
            :
            (
                <Spin size='large' tip='Loading'></Spin>
            )
            }
        </div>
        
    )
}
export default JserImg