import Header from "../Core/Header";
import "../App.css";
import { Grid, Typography } from "@mui/material";
import { JobCard } from "../Core/TimeLineCard";
import { dataWork, WorkData } from "../assets/data/constantData";

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
          <Grid item>
            <Typography textAlign={"center"} variant="h1" fontFamily={"Style Script"}>
              Working Experience
            </Typography>
            <Grid className="BCA border border-3 rounded-3">
              {dataWork.map((me: WorkData) => (<JobCard companyName={me.name} duration={me.duration} details={me.detail} skills={me.skill} />))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Education;