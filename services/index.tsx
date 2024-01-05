import request, { gql } from "graphql-request";

const URL =
  "https://api-us-west-2.hygraph.com/v2/clqx29yv6r96c01ui4m3w1tb4/master";
export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        name
        price
        seats
        carbrand
        carType
        image {
          url
        }
      }
    }
  `;

  const result = await request(URL, query);
  return result;
};
