// import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

// const UsersModel = {
//   namespace: 'users',

//   state: {
//     name: '',
//   },

//   effects: {
//     *query({ payload }, { call, put }) {},
//   },
//   reducers: {

//     save(state, action) {
//         const data = [
//             {
//               key: '1',
//               name: 'John Brown',
//               age: 32,
//               address: 'New York No. 1 Lake Park',
//               tags: ['nice', 'developer'],
//             },
//             {
//               key: '2',
//               name: 'Jim Green',
//               age: 42,
//               address: 'London No. 1 Lake Park',
//               tags: ['loser'],
//             },
//             {
//               key: '3',
//               name: 'Joe Black',
//               age: 32,
//               address: 'Sydney No. 1 Lake Park',
//               tags: ['cool', 'teacher'],
//             },
//           ];
//       return data
//     },
//     // 启用 immer 之后
//     // save(state, action) {
//     //   state.name = action.payload;
//     // },
//   },
//   subscriptions: {
//     setup(ac) {
//         console.log(ac);
//       return ac.history.listen((location) => {
//         if (location.pathname === '/users') {
//             ac.dispatch({
//             type: 'save',
//           });
//         }
//       });
//     },
//   },
// };

// export default UsersModel;

import { Effect, Subscription, Reducer, useDispatch } from 'umi'
import { getRemoteList, editRemoteData, deleteRemoteData, addRemoteData } from './service'
// let dispatch=useDispatch()
export interface UserState {
    data: UserStateData[],
    meta: UserDateMeta
}
interface UserDateMeta {
    total: Number,
    per_page: Number,
    page: Number
}
export interface UserStateData {
    id: Number,
    name: String,
    email: String,
    create_time: String,
    update_time: String,
    status: Number
}
interface UsersModelType {
    namespace: 'users',
    reducers: {
        getList: Reducer<UserState>
    },
    effects: {
        getRemote: Effect,
        addData:Effect,
        editData:Effect,
        deleteData:Effect
    },
    state: UserState
    subscriptions: {
        setup: Subscription
    }
}
const UsersModel: UsersModelType = {
    namespace: 'users',
    state: {
        data: [],
        meta: {
            total: 1,
            per_page: 1,
            page: 1
        }
    },
    reducers: {
        // param1=state(仓库),param2=action(action中有payload参数)
        getList(param1, param2) {
            // return new State     返回的结果会替代原有的仓库,新仓库
            return param2.payload
        }
    },
    effects: {
        // 都是异步的，所以加✳号变成generator函数，里面每个语句都要用yield等待，相当于await，等的意思
        *getRemote(action, effects) {
            // effects含有put和call,put用来连接reducer，call用来连接service 
            const data:UserStateData = yield effects.call(getRemoteList)
            if(data){
            console.log('页面表格数据获取成功', data);
                yield effects.put({
                    type: 'getList',
                    payload: {
                        data
                    }
                })
            }else{
                console.log('请求失败');
            }
            // effect里面用put替代dispatch,effect没有返回值
        },
        *addData(action, effects) {
            let { data } = action.payload
            yield effects.call(addRemoteData, data)
            yield effects.put({
                type: 'getRemote'
            })
        },
        *editData(action, effects) {
            let { data, id } = action.payload
            // call可以让我们在service中去处理回调,如果直接在这调用api,那么就需要在这里用then处理
            yield effects.call(editRemoteData, data, id)
            // result是请求成功后从api返回来的值
            // console.log('edit',result);
            // dispatch({
            //     type:'getRemote'
            // })

            // effects用put调用reducers,而不是dispatch
            yield effects.put({
                type: 'getRemote'
            })
        },
        *deleteData(action, effects) {
            let { id } = action.payload
            yield effects.call(deleteRemoteData, id)
            yield effects.put({
                type: 'getRemote'
            })
        }
    },
    subscriptions: {
        setup(dh, done) {
            return dh.history.listen((loaction, action) => {
                if (loaction.pathname === '/users') {
                    dh.dispatch({
                        //这里dispatch到effects，由effects异步获取数据之后put到reducers中
                        type: 'getRemote',
                        payload: {}
                    })
                }
            })
            // dh是一个只包含dispatch函数和history的对象
        }
    }
}
export default UsersModel