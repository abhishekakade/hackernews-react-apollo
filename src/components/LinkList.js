import React, { Component } from "react";
import Link from "./Link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

// you need to have 2 servers running to see anything being fetched from the 'server'.
// one is cra at localhost:3000 and another is graphql at localhost:4000.

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

class LinkList extends Component {
  render() {
    // commented out because this data is now being fetched from the server

    // const linksToRender = [
    //   {
    //     id: "1",
    //     description: "Prisma turns your database into a GraphQL API 😎",
    //     url: "https://www.prismagraphql.com"
    //   },
    //   {
    //     id: "2",
    //     description: "The best GraphQL client",
    //     url: "https://www.apollographql.com/docs/react/"
    //   }
    // ];

    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const linksToRender = data.feed.links;

          return (
            <div>
              {linksToRender.map(link => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;
