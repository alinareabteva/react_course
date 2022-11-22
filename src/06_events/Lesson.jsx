import React, {Component, useState} from 'react';
import PropTypes from 'prop-types'

const MyLink = ({text, onClick}) => (
  <a href="/test" onClick={onClick}> {text} </a>
);

MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

MyLink.defaultProps = {
  text: 'Link',
  onClick: () => {},
}


export class App extends Component{

    handleClick = (e) => {
      e.preventDefault();
      console.log('Clicked on link!');
    //  this.test();
    }

  render(){
    return(
      <MyLink onClick={this.handleClick} />
    );
  }
}

export default App
