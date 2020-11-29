import React from 'react'
import {MissionInfoQuery} from '../../generated/graphql';
import {useHistory} from 'react-router-dom';
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
                               <button onClick={()=>Details(LaunchObj?.flight_number)} >{LaunchObj?.mission_name}</button>
                        </li>
                        )
                        
                  })
              }
                </ol>
         </div>
     )
}
export default Launch;