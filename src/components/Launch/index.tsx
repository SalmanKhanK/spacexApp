import React from 'react'
import {useMissionInfoQuery} from '../../generated/graphql';
import Launch from './Launch'



export const LaunchList = () => {
    const {data,error,loading} =useMissionInfoQuery();
    if(loading){
        return <h4>Loading...</h4>
    }
    if(error || !data){
        return <h4>Error</h4>
    }
    return (
        <div>
            <Launch data={data} />
        </div>
    )
}


