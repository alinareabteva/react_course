import React, {Component} from 'react';

//------create an element, other variants------
React.createElement('div', null, 'Simple div with text');
React.createElement('input', {className: 'just-class'});



function Welcome(){
  return <h1>Hello world!</h1>
}

class SuperWelcome extends Component{
  render(){
    return <h1>Hello world!</h1>
  }
}

function Lesson(){
  return(
    <div>
      <Welcome />
      <SuperWelcome />
    </div>
  )
}

export default Lesson;
