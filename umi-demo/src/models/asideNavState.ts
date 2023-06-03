// 控制侧边导航栏初始化高亮
export default{
    namespace:'asideNavState',
    state:{
        asideNavCurrent:'',
    },
    reducers:{
        setAsideNavCurrent(state,action){
           return {
            asideNavCurrent:action.payload.current
           }
        }
    },
    effects:{

    },
    subscriptions:{
        setup({dispatch,history}){
            history.listen((location,action)=>{
                console.log('asidenav路径变化');
                let getPathName=()=>{
                    let pathname=location.pathname
                    let pathnameArr=pathname.split('/')
                    
                    if(pathnameArr.length>=3){
                      return pathnameArr[2]
                    }else{
                      return false
                    }
                  }
                  
                  let payload={current:getPathName()}
                  dispatch({type:'setAsideNavCurrent',payload})
                //   switch(getPathName()){
                //       case 'personal-center-1':
                //         payload.current=
                //           break;
                //       case 'personal-center-2':
                //           console.log(2);
                //           break;
                //       case 'personal-center-3':
      
                //           break;
                //       case 'personal-center-4':
      
                //           break;
                //       case 'personal-center-5 ':
      
                //           break;
                //   }
            })
        }
    }
}