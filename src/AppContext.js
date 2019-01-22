import React, { Component } from "react";
import PropTypes from "prop-types";

//import voice
import greeting from './Voice';
import newUser from './Voice';
import oldUser from './Voice';
import guestStudy from './Voice';

//create new context
const AppContext = React.createContext();

export class AppContextProvider extends Component {
  state = {
    isLoggedIn: false,
    name: '',
    cards: [
      {
        id: 'example',
        question: 'How many sides does a square have?',
        answer: '4',
        difficulty: 'easy',
        mastered: false
      }
    ],
    buttons: {
      display: false,
      types: [{
        type: 'twoButtons',
        button1Text: '',
        button1OnClickMethod: '',
        button2Text: '',
        button2OnClickMethod: '',
      }]
  },
    voiceState: greeting
  };
  //methods here
  handleChangeVoiceState = (newState) => {
      this.setState({
        voiceState: newState 
      })
    };

    handleChangeName = (name) => {
      this.setState({
        name: name 
      })
    };

  handleChangeState = ( stateKey, value ) => {
    this.setState({
      [stateKey]: value
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          AppState: this.state,
          HandleChangeState: this.handleChangeState,
          HandleChangeName: this.handleChangeName
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
};

AppContextProvider.propTypes = {
  children: PropTypes.any
};

export const AppContextConsumer = AppContext.Consumer;
