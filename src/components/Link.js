import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.link.description} (
          <a href={this.props.link.url}>{this.props.link.url}</a>)
        </div>
      </div>
    );
  }
}

export default Link;
