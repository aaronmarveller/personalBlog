import React, {Component} from "react";
import { Layout} from 'antd';
import {Redirect, Route, Switch}  from 'react-router-dom';
import Nav from "../../components/header";
import Tech from "../tech/tech";
import Resume from "../resume/resume";
import Life from "../life/life";

const { Content, Header, Sider, Footer } = Layout;

export default class Blog extends Component {
    render() {
        return (
            <Layout style={{height: '100%'}} >
                <Layout style={{ padding: '0' }}>
                    <Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "white"}}>
                        <Nav/>
                    </Header>
                    <Layout style={{ padding: '0' }}>
                        <Sider style={{backgroundColor: "#d2e0fa"}}>
                            LeftSider
                        </Sider>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                marginTop: 56,
                                minHeight: 570,
                                backgroundColor: "white"
                            }}
                        >
                            <Switch>
                                <Route path='/tech' component={Tech}/>
                                <Route path='/life' component={Life}/>
                                <Route path='/resume' component={Resume}/>
                                <Redirect to='/tech'/>
                            </Switch>
                        </Content>
                        <Sider style={{backgroundColor: "#d2e0fa"}}>right sidebar</Sider>
                    </Layout>
                    <Footer style={{
                        textAlign: 'center',
                        color: '#cccccc',
                        fontSize: '15px'
                    }}>
                        In order to have a better performance, please use Chrome Browser
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}