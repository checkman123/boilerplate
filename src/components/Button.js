import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn__click">
        <button
          className="btn__increment"
          onClick={() => this.props.increment()}
        >
          Increment
        </button>
        <button
          className="btn__decrement"
          onClick={() => this.props.decrement()}
        >
          decrement
        </button>
      </div>
    );
  }
}

export default Button;
