import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const Header = ({ location }) => {
    return (
        <Menu
            selectedKeys={[location.pathname]}
            mode="horizontal"
            theme="dark"
        >
            <Menu.Item key="/users">
                <Link to="/users"><Icon type="bars" />Users</Link>
            </Menu.Item>
            <Menu.Item key="/">
                <Link to="/"><Icon type="home" />Home</Link>
            </Menu.Item>
            <Menu.Item key="/404">
                <Link to="/404"><Icon type="close-square" />404</Link>
            </Menu.Item>
            <Menu.Item key="/antd">
                <a href="https://github.com/dvajs/dva" target="_blank">
                    <Icon type="github" />dva
                </a>
            </Menu.Item>
        </Menu>
    )
}

export default Header;