import React from "react";

import titleList from "./titleNames";
import {
    GitlabOutlined,
    GithubOutlined,
    RedditOutlined,
    SnippetsFilled,
    LinkedinOutlined,
} from "@ant-design/icons";
const menuList = [
    {
        title: titleList.Nav1,
        key: '/tech',
        icon: <GitlabOutlined />
    },
    {
        title: titleList.Nav2,
        key: '/life',
        icon: <RedditOutlined />
    },
    {
        title: titleList.Nav3,
        key: '/resume',
        icon: <SnippetsFilled />
    },
    {
        title: titleList.Nav4,
        icon: <LinkedinOutlined />,
        link: titleList.LinkedIn
    },
    {
        title: titleList.Nav5,
        icon: <GithubOutlined />,
        link: titleList.Github
    }
];

export default menuList;