import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { location, posts, comments } = this.props;
    let postId = location.state.postCode;
    const i = posts.findIndex((post) => post.code == postId);
    const post = posts[i];
    const postComments = comments[postId] || [];
    return (
      <div className='single-photo'>
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} />
      </div>
    );
  },
});

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(Single);
