import React from 'react'
import {MissionInfoQuery} from '../../generated/graphql';
import {useHistory} from 'react-router-dom';
import {Button, Link} from '@material-ui/core'
interface props {
    data:MissionInfoQuery
}
const Launch :React.FC<props>=({data})=>{
    console.log(data)
    const history=useHistory();
    const Details=(id:any)=>{
        history.push({
                pathname:"/details",
                state:id
        })
    }
    
     return(
         <div>
              <h1>Missions</h1>
             
              <ol >
              {  !!data.launches &&
                  data.launches?.map((LaunchObj,key)=>{
                       return (
                        <li key={key}>
                          <h3>{LaunchObj?.mission_name}</h3>
                       <h4>Launch Success:{JSON.stringify(LaunchObj?.launch_success)}</h4>
                  <Button variant="contained" color="primary" 
                  onClick={()=>Details(LaunchObj?.flight_number)} >
                    Click here to show more details
                  </Button>
                        </li>
                        )
                        
                  })
              }
                </ol>
               
         </div>
     )
}
export default Launch;