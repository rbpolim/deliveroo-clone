import { gql } from "@apollo/client";

export const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      id
      name
      description
      address
      image {
        url
      }
      coordinates {
        latitude
        longitude
      }
      rating
      genres
    }
  }
`;
