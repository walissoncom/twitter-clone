import React from 'react';

import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

import './Feed.css';

function Feed() {
    return (
        <div className="feed">

            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post />

        </div>
    )
}

export default Feed;