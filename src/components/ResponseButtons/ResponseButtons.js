import React, { Component } from "react";

export default class ResponseButtons extends Component {
  state = {
    display: false,
    identity: "",
    btnType: "",
    btn1: "",
    btn1next: "",
    btn2: "",
    btn2next: ""
  };
  componentDidUpdate = () => {
    console.log("Console Log for componentDidUpdate for ResponseButtons");
  };
  componentDidMount = () => {
    const { preset, visibleButtons } = this.props.contextState.AppState;
    if (this.props.contextState.AppState.initializing === true) {
      this.setState(
        {
          identity: preset.greeting.identity,
          btn1: preset.greeting.btn1,
          btn1next: preset.greeting.btn1next,
          btn2: preset.greeting.btn2,
          btn2next: preset.greeting.btn2next,
          btnType: preset.greeting.btnType,
          visibleButtons: visibleButtons
        },
        console.log(
          "Console Log after setState of ComponentDidMount for ResponseButton"
        )
      );
    }
  };

  //Need to create button click handler
  handleButtonClick = clickType => {
    console.log(clickType, "button clicked!!!!!");
  };
  //current phrase identity is preset in context -done
  //componentDidMount will update state with first buttons, -done
  //after speech is done voice_ai will update context with visible: true -done
  //buttons become visible -done
  //onclick current phrase identity is updated in the context
  //visibility for buttons is turned off -done
  //new buttons are set to state in this component
  //new phrase is spoken
  //buttons are triggered to appear... repeat

  HandleUpdateContext = (item1, item2) => {
    this.props.contextState.HandleChangeState(item1, item2);
  };
  render() {
    let buttons;
    //switch determines definition of buttons
    switch (this.state.btnType) {
      case "":
        console.log("no buttons!");
        break;
      case "two":
        buttons = (
          //button visibility needs to be read straight off of the context state because this state has no means to update when that one changes
          <div
            className="ResponseButtons__ButtonContainer"
            style={{
              visibility: this.props.contextState.AppState.visibleButtons
                ? "visible"
                : "hidden"
            }}
          >
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => {
                this.handleButtonClick(this.state.btn1next);
              }}
            >
              {this.state.btn1}
            </button>
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => {
                this.handleButtonClick(this.state.btn2next);
              }}
            >
              {this.state.btn2}
            </button>
          </div>
        );
        break;
      default:
        return null;
    }
    return (
      //when displaying button make sure to add visibility: this.state.display
      <div>{buttons}</div>
    );
  }
}
