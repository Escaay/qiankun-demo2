import {useState} from 'react'
export function useQiankunStateForSlave() {
    const [data, setData] = useState({
        motivation:[
            '1.才华是刀刃，辛苦是刀石，很锋利的刀刃，若日久不用磨，也会生锈，成为废物。',
            '2.努力到无能为力，拼搏到感动自己。',
            '3.不以其道，得之不去也。',
            '4.向上的路，并不拥挤。拥挤是因为，大部分人选择了安逸。',
            '5.人活着，其实就是一种心态，你若觉得快乐，幸福无处不在。'
        ]
    });
    return {
      data,
      setData,
    };
  }