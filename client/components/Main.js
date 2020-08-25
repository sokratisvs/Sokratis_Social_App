import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    const { children } = this.props;
    console.log('Main js');
    return (
      <div>
        <h1>
          <Link to="/">Sokratis SocialApp</Link>
        </h1>
        {React.cloneElement(children, this.props)}
      </div>
    );
  }
});
export default Main;