import { Space, Table, Tag,Popconfirm,Button} from 'antd';
import {connect,useDispatch,UserState,UserStateData} from 'umi'
import UserModal from '@/components/userMoal'
import {useState,FC,useEffect} from 'react'
// 这里有个坑，如果传过来的props.users直接是个数组的话会报some方法错误，需要传一个对象，然后从对象中取数组，反正不要直接传数组，要传对象
interface UsersProps{
  users:UserState
}
// 泛型会被传递给函数的参数和返回值
const Users:FC<UsersProps> = (props) => {
  useEffect(()=>{
    console.log('effect');
    
  },[])
  console.log('props',props);
  // props里面也可以取到dispatch
  let dispatch=useDispatch()
  let [ifModalShow,setIfModalShow]=useState(false)
  // useState命名比较特殊
  let [record,setRecord]=useState<UserStateData | undefined>()
  //参数是一个React的鼠标事件虚拟节点,React.MouseEvent<HTMLElement>
  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    console.log('Click yes',e);
    dispatch({
      //dispatch的type要写全
      type:'users/deleteData',
      // 加一个问号防止record为undefined报错的情况
      payload:{id:record?.id}
    })
  };
  let editHandler=(record:UserStateData)=>{
    setRecord(record)
    setIfModalShow(true)
  }
  let closeModal=()=>{
    setIfModalShow(false)
  }
  let formSubmit=(data:UserStateData)=>{
    console.log('表单提交数据到users页面',data);
    if(data.id){
      dispatch({
        // 调用非当前model的reducer,前面要加对应命名空间,而且不需要加/
        type:'users/editData',
        payload:{data,id:record?.id}
      })
    }else{
      dispatch({
        // 调用非当前model的reducer,前面要加对应命名空间,而且不需要加/
        type:'users/addData',
        payload:{data}
      })
    }
  }
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log('Click no');
  };



  const columns = [
    {
      title:'ID',
      dataIndex: 'id',
      // key: 'id',
    },
    {
      title:'Name',
      dataIndex: 'name',
      // key: 'id',
    },
    {
      title: 'CreatTime',
      dataIndex: 'create_time',
      // key: 'create_time',
    },
    {
      title: 'Action',
      // key: 'action',
      render: (text:String, record:UserStateData) => {
        return (
          <Space size="middle">
            <span>
              <a onClick={()=>{editHandler(record)}}>编辑</a>
              &nbsp;
              &nbsp;
              <Popconfirm 
                title="删除这一条数据?"
                description="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="是"
                cancelText="否">
                <a onClick={()=>{setRecord(record)}}>删除</a>
            </Popconfirm>
              
              </span>
          </Space>
        )
      }
    },
  ];
  return (
<div className='list-table'>
  {/* 从添加处打开modal,就清空record,再用record.id判断是添加还是修改,从而触发对应dispatch */}
  <Button type='primary' onClick={()=>{setIfModalShow(true);setRecord({})}}>添加一条数据</Button>
  {/* antd文档说明用rowKey给表格传key值,他是一个字符串 */}
  <Table columns={columns} dataSource={props.users.data} rowKey='id' pagination={{defaultPageSize:6}}/>
  <UserModal ifModalShow={ifModalShow} closeModal={closeModal} record={record} formSubmit={formSubmit}>
  </UserModal>
</div>
)
}
const mapStateToProps=(state:{users:{}})=>{
  // state包括返回过来的新状态，loading,router三个部分  
  return {
    // connect包裹的函数返回的值就是props接收到的值
    users:state.users
  }
}
export default connect(mapStateToProps)(Users);