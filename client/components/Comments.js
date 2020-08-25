import React from 'react';

const Comments = React.createClass({
  render() {
    const { postComments } = this.props;
    return (
      <div className='comments'>
        {postComments.map((comment, i) => {
          return (
            <div className='comment' key={i}>
              <p>
                <strong>{comment.user}</strong>
                {comment.text}
              </p>
            </div>
          );
        })}
      </div>
    );
  },
});

export default Comments;
