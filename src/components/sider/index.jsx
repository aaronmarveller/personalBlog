import { Anchor } from 'antd';
import React, { Component } from "react";
import "./index.less";

const { Link } = Anchor;

export default class LeftNav extends Component {

    render() {

        return (
            <div className="leftNav">
                <Anchor
                    onClick={this.handleClick}
                    getContainer={() => document.getElementById('content')}
                    targetOffset={500}
                >
                    <Link href="#1" title="Basic demo" />
                    <Link href="#2" title="Static demo" />
                    <Link href="#3" title="API">
                        <Link href="#4" title="Anchor Props" />
                        <Link href="#5" title="Link Props" />
                    </Link>
                </Anchor>
            </div>
        );
    }
}