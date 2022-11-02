import React, {Component, Fragment} from 'react';

//old variant
// const LevelThree = ({title}) => <h1>{title}</h1>
//
// const LevelTwo = ({title}) => <LevelThree title={title}/>
//
// const LevelOne = ({title}) => <LevelTwo title={title}/>

//-----------------------------------
//1) Create context
//2) We wrap the component through which we need to pass the value
//stored in the context using the provider.
//3) We wrap the component where the values from the context should
//get using the consumer.

const TitleContext = React.createContext();

const LevelThree = () => (
  <TitleContext.Consumer>
  {({title, subTitle, click}) => (
    <Fragment>
    <h1 onClick={click}>{title}</h1>
    <h2>{subTitle}</h2>
    </Fragment>
  )}
  </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo />


class Lesson extends Component {
  render(){
    return(
      <TitleContext.Provider value={{title: "Simple title", subTitle: "Sub Title",
      click: () => {console.log('Hello Alina!')}}}>
      <LevelOne />
      </TitleContext.Provider>

    );
  }
}

export default Lesson;
