import React from 'react'
import {useMissionInfoDetailsQuery} from '../../generated/graphql';
import LaunchDetails from './Launchdetails';
import {useLocation} from 'react-router-dom'
export const MissionInfoDeatilsList = () => {
const location = useLocation();
        const ids=location.state
        console.log(ids ,typeof(ids))
  //const ids = (location.state).toString()
    const {data,error,loading} = useMissionInfoDetailsQuery({variables:{id:`${ids}`}})
    if(loading){
        return <h4>Loading</h4>
    }
    if(error || !data){
        return <h4>Error</h4>
    }
    return (
        <div>
             <LaunchDetails data={data}/>       
        </div>
    )
}
