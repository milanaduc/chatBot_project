import React from "react";

import TextComponent from "../TextComponent/TextComponent";

import "../ChatComponents/ChatComponent.css";

class ChatComponents extends React.Component {
  state = {
    text: [],
    newText: "",
  };
  answerBack = () => {
    const yes = 1;
    const no = 0;
    const ans = Math.floor(Math.random() * 2);
    console.log(ans);
    if (ans === 1) return "yea";
    else return "no";
  };
  setNewItem = (e) => {
    this.setState({ newText: e.target.value });
  };

  addNewItem = () => {
    if (this.state.newText === "") return;
    let { text } = this.state;
    text.push(this.state.newText);
    text.push(this.answerBack());
    this.setState({
      text: text,

      newText: "",
    });
  };

  render() {
    const { text } = this.state;

    return (
      <>
        <div className="c-post-question">
          {text.length === 0 ? (
            <p>No data.</p>
          ) : (
            text.map((m) => <TextComponent text={m}></TextComponent>)
          )}
        </div>

        <div>
          <input
            value={this.state.newText}
            onChange={(e) => this.setNewItem(e)}
          ></input>
          <button onClick={this.addNewItem}>Sent</button>
        </div>
      </>
    );
  }
}

export default ChatComponents;
