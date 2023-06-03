import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import {useHistory,useParams,useLocation,useRouteMatch} from 'umi'
import { useEffect } from 'react';
import {useSelector,useDispatch}  from 'umi'
const items = [
  {
    label: '主页',
    key: 'users',
    icon: <MailOutlined />,
  },
  {
    label: '个人中心',
    key: 'personal-center',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
];
// console.log('nav组件外');
// 上面函数组件外的代码只会在挂载的时候执行一次
const Nav = () => {
    let dispatch=useDispatch()
    let globalState=useSelector((state)=>state)
    // console.log('globalState',globalState);
    // 模拟DidMount,挂载时通过全局数据自动高亮对应导航栏
    // useEffect(()=>{console.log('effect');dispatch({type:'navState/lightTopNav',payload:{pathname:history.location.pathname}})
    // },[])
    // 编程式路由跳转
  let history=useHistory()
  let {navCurrent}=globalState.navState
  const onClick = (e) => {
    switch(e.key){
        case 'users':
            history.push({
                pathname:'/users',
                query:{param1:'nav参数1'},
            })
            break;
        case 'personal-center':
            history.push({
                pathname:'/personal-center',
                query:{params:'nav参数2'},
            })
            break;
    }
  };
  return <Menu onClick={onClick} selectedKeys={[navCurrent]} mode="horizontal" items={items} theme="dark"/>;
};
export default Nav;