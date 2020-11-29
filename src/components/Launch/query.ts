import gql from 'graphql-tag'

export const Query_Launch = gql`
query MissionInfo{
  launches(sort: "mission_name", limit: 10) {
    mission_name
    launch_success  
    flight_number
  }
}
`;
