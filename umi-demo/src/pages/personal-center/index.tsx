import styles from './index.less';
import React from 'react';
import { Timeline } from 'antd';

const PersonalCenter: React.FC = () => {
  return (
    <div className={styles.PersonalCenterList}>
    <Timeline>
      <Timeline.Item><span>2023-6-1:Begin to study UmiJs and Browser plugin</span></Timeline.Item>
      <Timeline.Item><span>2023-6-2:Take up UmiJs and fix problems</span></Timeline.Item>
      <Timeline.Item><span>2023-6-3:Perfect the demo and start attempt plasmo</span></Timeline.Item>
      <Timeline.Item><span>2023-6-4:Optimize demos and Write documents</span></Timeline.Item>
      <Timeline.Item><span>2023-6-5:Submit code</span></Timeline.Item>
    </Timeline>
    </div>
  );
}


export default PersonalCenter