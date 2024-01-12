import { Grid, Typography } from '@mui/material';

export function TimeLineCard({ data }) {
  return (
    <Grid container>
      <Typography variant='h6' m={2}>{data}</Typography>
    </Grid>
  )
}

export function JobCard({ companyName, duration, details, skills }) {
  return (
    <Grid container m={2} className='workExperience'>
      <Typography variant="h2" fontFamily={"Montserrat"} mt={1}>{companyName}</Typography>
      <Typography variant="h4" fontFamily={"Montserrat"} mt={1}>{duration}</Typography>
      <Typography variant="h6" mt={2} fontFamily={"Montserrat"}>{details}</Typography>
      <Typography variant="h5" mt={2} fontFamily={"Montserrat"}>{`Skills: ${skills}`}</Typography>
    </Grid>
  )
}


export function EducationCard({ instituationName, courseName, detailOne, detailTwo, detailThree, detailFour }) {
  return (
    <Grid container m={3} className='Education'>
      <Typography variant="h3" fontFamily={"Montserrat"} mt={1}>{instituationName}</Typography>
      <Typography variant="h4" fontFamily={"Montserrat"} mt={1}>{courseName}</Typography>
      <Typography variant="h6" fontFamily={"Montserrat"} mt={1}>{detailOne}</Typography>
      <Typography variant="h6" fontFamily={"Montserrat"} mt={1}>{detailTwo}</Typography>
      <Typography variant="h6" fontFamily={"Montserrat"} mt={1}>{detailThree}</Typography>
      <Typography variant="h6" fontFamily={"Montserrat"} mt={1}>{detailFour}</Typography>
    </Grid>
  )
}

export function CertificationCard(){
  return(
    <Grid container display={"flex"} justifyContent={"space-between"}>

    </Grid>
    )
}