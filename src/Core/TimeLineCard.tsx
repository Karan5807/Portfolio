import { Grid, Typography } from '@mui/material';

export function TimeLineCard({ data }) {
  return (
    <Grid container>
      <Typography variant='h6' m={2}>{data}</Typography>
    </Grid>
  )
}

export function JobCard({companyName, duration, details, skills}){
  return(
    <Grid container m={2}>
      <Typography variant="h2">{companyName}</Typography>
      <Typography variant="h4">{duration}</Typography>
      <Typography variant="h6" mt={2}>{details}</Typography>
      <Typography variant="h5" mt={2}>{`Skills: ${skills}`}</Typography>
    </Grid>
    )
}



export function EducationCard(){
  return(

  )
}