import React from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    const { posts } = this.props;
    return (
      <div className="photo-grid">
        {posts.map((post, i) => (
          <Photo key={i} i={i} {...this.props} post={post} />
        ))
        }
      </div>
    );
  }

});

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }

}

export default connect(mapStateToProps)(PhotoGrid);
