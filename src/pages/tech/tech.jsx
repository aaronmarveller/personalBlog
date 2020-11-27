import React, {Component} from 'react';
import { Card } from "antd";
import './tech.less';
import blogData from "../../mock/blogData";
import LeftNav from "../../components/sider";

export default class Tech extends Component {
    getArticleName = (blogData) => {
        return blogData.map(item => {
            return (
                <Card title={item.title} className="card" extra={<a href="#">More</a>} id={item.anchor}>
                    {this.getSubTitle(item.subtitle)}
                </Card>
            );
        })
    };

    getSubTitle = (subtitleList) => {
        return subtitleList.map(item => {
            return (
                <p>{item}</p>
            )
        })
    };


    render() {
        return (
            <div className="tech" id="content">
                <LeftNav/>
                {this.getArticleName(blogData)}
            </div>
        );
    }
}
