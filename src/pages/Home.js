import React, { Fragment, useContext } from "react";

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';


import Friends from '../components/Friends';
import Contacts from '../components/Contacts';
import Group from '../components/Group';
import Events from '../components/Events';
import Createpost from '../components/Createpost';
// import Memberslider from '../components/Memberslider';
// import Friendsilder from '../components/Friendsilder';
import Storyslider from '../components/Storyslider';
import Postview from '../components/Postview';
import Load from '../components/Load';
import Profilephoto from '../components/Profilephoto';
import { useQuery } from "@apollo/client";
import ContentLoader from 'react-content-loader'
import { AuthContext } from "../context/auth";
import { FETCH_POSTS_QUERY } from '../utils/graphql';
import { Transition } from 'semantic-ui-react'

const Home = () => {
    const { user } = useContext(AuthContext);
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    return (
        <Fragment>
            <Header />
            <Leftnav />
            <Rightchat />

            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="row feed-body">
                            <div className="col-xl-8 col-xxl-9 col-lg-8">
                                <Storyslider />
                                {user && (
                                    <Createpost />
                                )}
                                {loading ? (
                                    <ContentLoader viewBox="0 0 380 70">
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                                        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                                        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                                    </ContentLoader>
                                ) :
                                    (
                                        <Transition.Group duration="500">
                                            {
                                                data.getPosts && data.getPosts.map(post => (
                                                    <Postview key={post.id} id={post.id} postvideo="" likecount={post.likeCount} commentcount={post.commentCount} postimage="post.png" avater="user.png" user={post.username} time={post.createdAt} des={post.body} />
                                                ))
                                            }
                                        </Transition.Group>
                                    )
                                }
                                <Load />
                            </div>
                            <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                                <Friends />
                                <Contacts />
                                <Group />
                                <Events />
                                <Profilephoto />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popupchat />
            <Appfooter />
        </Fragment>
    );
}

export default Home;