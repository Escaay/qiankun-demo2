import { Button, Modal,Form,Input } from 'antd';
import style from './index.less'
import {useEffect,useRef} from 'react'
const UserMoadl=(props)=>{
    // initivalue不能被setState修改,这不符合常理,那么就去文档当中寻找
    // 通过initivalue找到setFieldsValue,通过setFieldsValue找到useFormInstance,要学会自己在文档中搜寻
    let formRef=useRef(null)
    const [form] = Form.useForm();
    let handleOk=()=>{
        // submit之后会跳到onFinish执行回调,再用props把他传回父页面
        form.submit()
        props.closeModal()
    }
    let handleCancel=()=>{
        props.closeModal()
    }
    let onFinish=(res)=>{
        props.formSubmit(res)
    }
    // 提交失败回调可以就在本组件处理
    let onFinishFailed=()=>{
        console.log('提交失败');
    }
    useEffect(()=>{
        if(props.ifModalShow===true)   formRef.current?.setFieldsValue(props.record)
    },[props.ifModalShow])
    return (
        <Modal title='basic modal' open={props.ifModalShow} onOk={handleOk} onCancel={handleCancel}>
            <Form ref={formRef} form={form} onFinish={onFinish}>
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label='create_Time'
      name="create_time"
    >
        <Input />
    </Form.Item>
  </Form>
        </Modal>
    )
}
export default UserMoadl