import React from "react";

class TextComponent extends React.Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}

export default TextComponent;
