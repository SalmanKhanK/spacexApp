import React from 'react'
import {MissionInfoDetailsQuery} from '../../generated/graphql'
import {useHistory,useLocation} from 'react-router-dom'
interface props{
    data:MissionInfoDetailsQuery
}
const LaunchDetails:React.FC<props>=({data})=>{
   
    if(!data.launch){
        return <div>Launch Unavailable</div>
    }
    const Header = () => {
       // const location=useLocation();
        const history=useHistory();
        const handleBack=()=>{
            history.goBack();
        }
        //const atDetails=location.pathname==="/details";
        return   <button onClick={handleBack}>Back</button>
               
        }
    return(
        <div>
            <Header />
            <h3>MissionDetails</h3>
           <h3> {data.launch.mission_name}</h3>
    <p>{data.launch.launch_year}  {JSON.stringify(data.launch.launch_success)}</p>
       
        </div>
    )
}
export default LaunchDetails;