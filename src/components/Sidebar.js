import { Layout,Radio, Space } from 'antd';
import React, { useState } from 'react';
import './Sidebar.css'
const { Sider } = Layout;
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <Sider className="side-bar" trigger={null} collapsible collapsed={collapsed}>
            <div className="radios">
                <p>Configuration</p>
                <p>Select input source </p>
                <Radio.Group  onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio className="radio-btns" value={1}>Webcam</Radio>
                        <Radio className="radio-btns" value={2}>Local Video</Radio>
                    </Space>
                </Radio.Group>
            </div>
    </Sider>
);
};
export default Sidebar;
