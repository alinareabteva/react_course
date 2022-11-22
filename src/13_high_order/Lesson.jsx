import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './loadingHOC.css';
import LoadingHOC from './loadingHOC';

//menu-NavBar
const AppLink = (props) => ({
  render: () => (
    <Link {...props} activeClassName="active" />
  )
})
export class NavBar extends Component {
  render(){
    return (
    <Router>
      <nav>
       <AppLink to="/" >Home</AppLink>
       <AppLink to="/portfolio" >Portfolio</AppLink>
       <AppLink to="/contacts">Contacts</AppLink>
      </nav>
    </Router>
    );
  }
}


//-----------------------------------------------------
//Loading and appears text
class AppComponentUI extends Component {
  render(){
    return(
      <div>{this.props.data.title}</div>
    );
  }
}

const AppComponent = LoadingHOC('data')(AppComponentUI);

class Lesson extends Component {
  state = {
    data: {},
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.updateState(data))
  }
  updateState = (data) => {
    window.setTimeout(() => {
      this.setState({ data })
    }, 3000);
  }
  render(){
    return (
       <AppComponent data={this.state.data} />
    );
  }
}

export default Lesson;
