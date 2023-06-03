import throttle from '@/utils/throttle'
export default  {
    namespace:'navState',
    state:{
        ifAsideNavShow:false,
        navCurrent:'users',
    },
    reducers:{
        // lightTopNav(state,action){
            // 先触发路径变化，再触发nav挂载，所以最终返回的navCurrent是123
            // console.log('action',action);
            // return {ifAsideNavShow:false,navCurrent:'123'}
        // },
        closeAsideNav(state,action){
            // console.log('触发closeAsideNav,关闭侧边栏');
            return {ifAsideNavShow:false,navCurrent:action.payload.navCurrent}
        },
        openAsideNav(state,action){
            // console.log('触发openAsideNav,开启侧边栏');
            return {ifAsideNavShow:true,navCurrent:action.payload.navCurrent}
        }
    },
    effects:{

    },
    subscriptions:{
        setup({dispatch,history}){
            // 监听页面路径变化
            return history.listen((location,action)=>{
                console.log('subscription订阅数据显示，当前页面路径为:',location.pathname);
                let pathname=location.pathname
                let whichPersonalPage=()=>{
                    return pathname.split('/')[1]
                }
                // 判断在哪个页面,进行响应的初始化
                switch(whichPersonalPage()){
                    case 'personal-center':
                        dispatch({
                            type:'openAsideNav',
                            payload:{navCurrent:'personal-center'}
                        })
                        break;
                    case 'users':
                        dispatch({
                            type:'closeAsideNav',
                            payload:{navCurrent:'users'}
                        })
                        break;
                }
            })
        }
    },
}