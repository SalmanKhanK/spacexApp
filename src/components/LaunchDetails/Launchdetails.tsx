import React from 'react'
import {MissionInfoDetailsQuery} from '../../generated/graphql'
import {useHistory} from 'react-router-dom'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Grid,Card,CardMedia, Button,Link} from '@material-ui/core/';
interface props{
    data:MissionInfoDetailsQuery
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
      },
      gridroot: {
        flexGrow: 1,
        marginTop:10
      },
    
  }),
);
const LaunchDetails:React.FC<props>=({data})=>{
    const classes = useStyles();
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
        return   <Button  variant="contained" color="primary" onClick={handleBack}>Back</Button>
               
        }
    return(
        <div>
            <Header />
            <h3>MissionDetails</h3>
           <p><strong>Mission_Name:</strong> {data.launch.mission_name}</p>
           <p><strong>Launch_Year:</strong> {data.launch.launch_year}</p>
           <p><strong>Details:</strong> {data.launch.details}</p>
            <p><strong>Launch_Success:</strong> {JSON.stringify(data.launch.launch_success)}</p>
            <p><strong>Rocket_Name:</strong> {data.launch.rocket?.rocket_name}</p>
            <Link href={`${data.launch.links?.article_link}`}>
        Article Link
      </Link>
        <div className={classes.gridroot}>
        
           {
             !!data.launch.links && !!data.launch.links.flickr_images && (
                
        <Grid container spacing={2}>
              {data.launch.links.flickr_images.map((image,key) =>
                 image ? 
                 <Grid item md={4} sm={6} xs={12} key={key}>
                 <Card className={classes.root} >
                     <CardMedia className={classes.media} image={image} />
                 </Card>
                 </Grid>: null
              )}
              
        </Grid>
            

          )}  
    </div>
        </div>
    )
}
export default LaunchDetails;