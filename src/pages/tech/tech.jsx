import React, {Component} from 'react';
import { Card } from "antd";
import './tech.less';
import blogData from "../../mock/blogData";

export default class Tech extends Component {
    getArticleName = (blogData) => {
        return blogData.map(item => {
            return (
                <Card title={item.title} className="card" extra={<a href="#">More</a>}>
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
            <div className="tech">
                {this.getArticleName(blogData)}
            </div>
        );
    }
}
