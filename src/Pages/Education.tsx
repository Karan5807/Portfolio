import Header from "../Core/Header";
import "../App.css";
import { Grid, Typography } from "@mui/material";

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
              <Grid className="Detail m-5">
                <Typography variant="h2">Musquare Technologies</Typography>
                <Typography variant="h4">Full Stack Developer (MERN) <span>(2023 Jan - Present )</span></Typography>
                <Typography typography="h6"> <span> </span> I compeleted my Bachelor's of Computer Application from Lucknow (Uttar-Pradesh).</Typography>
                <Typography variant="h6"> <span> </span> I was studied basic Computer Application Subject's like Database, OOPS, Operating System, Low-level-Design.</Typography>
                <Typography variant="h6"> <span> </span> Apart from this, I Learned Programming Langauges like C++,Java,JavaScript.</Typography>
                <Typography variant="h6"> <span> </span> Core Member of College Fest, Sports & Cultural Activities.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Education;