import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// TODO: add postedBy
const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

export default class CreateLink extends Component {
  state = {
    description: "",
    url: ""
    // postedBy: ""
  };

  render() {
    // const { description, url, postedBy } = this.state;
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3 items-center">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          // variables={{ description, url, postedBy }}
          variables={{ description, url }}
          onCompleted={() => this.props.history.push("/")}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}
