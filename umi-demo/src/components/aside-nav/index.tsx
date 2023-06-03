import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import {useHistory,useParams,useLocation,useRouteMatch,useSelector} from 'umi'
const items = [
  {
    label: 'personal-center-1',
    key: 'personal-center-1',
    icon: <MailOutlined />,
  },
  {
    label: 'personal-center-2',
    key: 'personal-center-2',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'personal-center-3',
    key: 'personal-center-3',
    icon: <MailOutlined />,
  },
  {
    label: 'personal-center-4',
    key: 'personal-center-4',
    icon: <MailOutlined />,
  },
  {
    label: 'personal-center-5',
    key: 'personal-center-5',
    icon: <MailOutlined />,
  },
];
const AsideNav = () => {
  let history=useHistory()
  let globalState=useSelector(state=>state)
  let {asideNavCurrent}=globalState.asideNavState
  const [current,setCurrent]=useState('')
  const onClick = (e) => {
    console.log(`侧边导航栏被点击了,他的key是${e.key}`);
    switch(e.key){
        case 'personal-center-1':
          history.push({
            pathname:'/personal-center/personal-center-1',
            query:{params:'参数1'}
        })
        break;
        case 'personal-center-2':
          history.push({
            pathname:'/personal-center/personal-center-2',
            query:{params:'参数2'}
        })
        break;
        case 'personal-center-3':
          history.push({
            pathname:'/personal-center/personal-center-3',
            query:{params:'参数3'}
        })
        break;
        case 'personal-center-4':
          history.push({
            pathname:'/personal-center/personal-center-4',
            query:{params:'参数4'}
        })
        break;
        case 'personal-center-5':
          history.push({
            pathname:'/personal-center/personal-center-5',
            query:{params:'参数5'}
        })
        break;
    }
  };
  return <Menu onClick={onClick} selectedKeys={[asideNavCurrent]}  mode="vertical" items={items} style={{width:'15vw',height:'130vh'}} theme="dark"/>;
};
export default AsideNav;