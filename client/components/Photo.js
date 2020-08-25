import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    render() {
        const { post, i, comments } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">

                    <Link to={{ pathname: `/view/${post.code}`, state: { postCode: post.code } }}>
                        <img src={post.display_src} alt={post.caption} ></img>
                    </Link>

                    <ReactCSSTransitionGroup transitionName="like"
                        transitionEnterTimeOut={700}
                        transitionLeaveTimeOut={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </ReactCSSTransitionGroup>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.props.onLikePress.bind(null, i)} className="heart">&hearts; {post.likes}</button>

                        <Link className="button" to={{ pathname: `/view/${post.code}`, state: { postCode: post.code } }}>

                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>

                        </Link>
                    </div>
                </figcaption>
            </figure>
        );

    }

});


const mapDispatchToPros = (dispatch) => {
    return {
        onLikePress: (index) => {
            dispatch({
                type: 'INCREMENT_LIKES',
                index
            });
        },

    }
}

export default connect(null, mapDispatchToPros)(Photo);