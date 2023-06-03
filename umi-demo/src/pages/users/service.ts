import {request} from 'umi'

// 这个request本来是umi-request这个包里面的东西，但是umi把他集成到umi中了，所以我们直接从umi中引用

export const getRemoteList=async()=>{
   return request('https://public-api-v1.aspirantzhang.com/users',{
      method:'get',
      params:{}  
    })
    .then(res=>{return res.data})
    .catch(err=>{return false})
}
export const editRemoteData=(data,id)=>{
   return request(`https://public-api-v1.aspirantzhang.com/users/${id}`,{
      method:'put',
      data
   })
   .then(res=>{console.log('修改数据成功');return 'service的成功回调返回到modal的值'})
   .catch(err=>console.log('修改数据失败',err))
}
export const deleteRemoteData=(id)=>{
   return request(`https://public-api-v1.aspirantzhang.com/users/${id}`,{
      method:'delete',
      id
   })
   .then(res=>console.log('删除成功'))
   .catch(err=>console.log('删除失败',err))
}
export const addRemoteData=(data)=>{
   return request('https://public-api-v1.aspirantzhang.com/users',{
      method:'post',
      data:data
   })
   .then(res=>console.log('添加成功',res))
   .catch(err=>console.log('添加失败',err))
}