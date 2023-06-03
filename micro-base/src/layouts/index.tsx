import  React from 'react'
import { Carousel } from 'antd';
import { useHistory } from 'umi';
import styles from './index.less'
const Layout: React.FC = (props) => {
    let history=useHistory()
    const onChange = (currentSlide: number) => {
        console.log('onChange');
        
        switch(currentSlide){
            case 0:
                history.push({
                    pathname:'/app1'
                })
                break;
            case 1:
                history.push({
                    pathname:'/app2'
                })
                break;
        }
    };
    const contentStyle: React.CSSProperties = {
        margin: 0,
        height:'100vh',
      };
    return (
        <div className={styles.layouts}>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>{props.children}</h3>
        </div>
        <div>
          <h3 style={contentStyle}>{props.children}</h3>
        </div>
      </Carousel>
      </div>
    );
  };
// const   Layout:React.FC=(props)=>{
//     return (
//         <div>
//             <div>
//                 <div>
//                     <Link to='/app1'>app1</Link>
//                 </div>
//                 <div>
//                     <Link to='/app2'>app2</Link>
//                 </div>
//             </div>
            
//         </div>
//     )
// }
export default Layout