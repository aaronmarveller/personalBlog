import React, {Component} from 'react';
import {Menu} from "antd";
import {Link, withRouter} from "react-router-dom";
import "./index.less";
import menuList from "../../config/menuList";

class Nav extends Component {
    state = {
        current: '',
    };

    getMenuNodes = (menuList) => {
        return menuList.map(item => {
            if (item.key) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            } else {
                return (
                    <Menu.Item icon={item.icon} className="header-right">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                    </Menu.Item>
                )
            }
        });
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div className="header">
                <Menu onClick={this.handleClick}
                      selectedKeys={[current]}
                      mode="horizontal"
                >
                    {this.getMenuNodes(menuList)}
                </Menu>
            </div>
        );
    }
}

// add the router to a class
export default withRouter(Nav);

