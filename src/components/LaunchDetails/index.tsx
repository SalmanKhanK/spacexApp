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
        return <h1>Loading</h1>
    }
    if(error || !data){
        return <h1>Error</h1>
    }
    return (
        <div>
             <LaunchDetails data={data}/>       
        </div>
    )
}
