import React, {Component, useState} from 'react';

//Old
// class CounterButton extends Component{
//   constructor(props){
//     super(props);
//
//     this.state = {
//       counter: 0,
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//
//   }
// };

//Modern
class CounterButton extends Component{
  state = {
    counter:0,
  }
  handleClick = () => {
    // this.setState(prevState => ({
    //   counter: ++prevState.counter,
    // }))


    this.setState(({counter}) => ({
      counter: ++counter,
    }))

  }

  render(){
    const {counter} = this.state;

    return(
      <div>
        <div> {counter} </div>
        <button onClick={this.handleClick}>+1 </button>
      </div>
    );
  }
}

//Super Modern
 const FunctionComponentCounterButton = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(prevState => prevState + 1)
  }

  return (
    <div>
      <div> {counter} </div>
      <button onClick={handleClick}>+1 </button>
    </div>
  )
}

const Lesson3 = () => {
  return (
    <div>
      <CounterButton />
      <FunctionComponentCounterButton />
    </div>
  )
}

export default Lesson3;
