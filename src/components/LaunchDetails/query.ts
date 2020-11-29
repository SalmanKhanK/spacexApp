import gql from  'graphql-tag'

export const Launch_Details=gql`
query MissionInfoDetails($id:String!){
  launch(id: $id) {
     details
     launch_success
     launch_year
     mission_name
     rocket {
       rocket_name
     }
     links {
       flickr_images
       article_link
     }
   }
 
 }
`;