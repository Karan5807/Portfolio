import Header from "../Core/Header";
import "../App.css";
import { Grid, Typography } from "@mui/material";
import { JobCard, EducationCard } from "../Core/CardTemplate";
import { dataWork, WorkData, AcademicData, educationData } from "../assets/data/constantData";
import CampaignTwoToneIcon from '@mui/icons-material/CampaignTwoTone';

function Education() {
  return (
    <Grid container mt={8}>

      {/* Section for Header */}
      <Grid container>
        <Header />
      </Grid>


      <Grid container>
        {/* Section for Experience */}
        <Grid container>
          {/* Section for Expercience */}
          <Grid>
            <Grid item>
              <Typography textAlign={"center"} variant="h3" fontFamily={"Style Script"}>
                Working Experience
              </Typography>
            </Grid>
            <Grid item m={5}>
              {dataWork.map((me: WorkData) => (<JobCard companyName={me.name} duration={me.duration} details={me.detail} skills={me.skill} />))}
            </Grid>
          </Grid>

          {/* Section for Education */}
          <Grid mt={4}>
            <Grid item>
              <Typography variant="h3" fontFamily={"Style Script"} textAlign={"center"}>
                Academic Qualification
              </Typography>
            </Grid>
            <Grid item m={5}>
              {educationData.map((me: AcademicData) => (<EducationCard instituationName={me.instituationName} courseName={me.courseName} detailOne={me.detailOne} detailTwo={me.detailTwo} detailThree={me.detailThree} detailFour={me.detailFour} />))}
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default Education;