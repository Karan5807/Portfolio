import Header from "../Core/Header";
import "../App.css";
import { Grid, Typography } from "@mui/material";
import { TimeLineCard } from "../Core/TimeLineCard";
import { HomeLeftData, HomeRightData, dataLeft, dataRight } from "../assets/data/constantData";

function Home() {


  return (
    <Grid container mt={8}>
      {/* Section for Header */}
      <Grid container>
        <Header />
      </Grid>

      <Grid container>
        {/* Section for Descrption */}
        <Grid className="Description">
          <Grid item mt={5} pt={3}>
            <Typography textAlign={"center"} fontFamily={"Style Script"} variant="h1">Hello World !</Typography>
          </Grid>

          {/* <Grid item mt={5} p={1}>
            <Typography fontFamily={"Euphoria Script"} textAlign={"center"} variant="h3">Step inside my Online Space</Typography>
          </Grid>

          <Grid item mt={5} p={1}>
            <Typography textAlign={"center"} fontFamily={"Euphoria Script"} variant="h3">Begin your journey on my Website</Typography>
          </Grid> */}

          <Grid container justifyContent={"center"} mb={2}>
            <Grid item mt={5} p={1}>
              <Typography textAlign={"center"} fontFamily={"Montserrat"} variant="h1">I'm Karan Singh</Typography>
            </Grid>

            <Grid item mt={5} p={1}>
              <Typography textAlign={"center"} fontFamily={"Montserrat"} variant="h3">A Full Stack Developer <span>An Aspring Data Scientist</span></Typography>
            </Grid>

          </Grid>
        </Grid>

        {/* Section for About */}
        <Grid container mt={3} p={3} display={"flex"} justifyContent={"space-evenly"} className="About">

          <Grid item width={500}>
            <Typography textAlign={"left"} fontFamily={"Roboto"} variant="h6">
              {dataLeft.map((user: HomeLeftData) => (
                <TimeLineCard key={user.name} data={user.detail} />
              ))}
            </Typography>
          </Grid>

          <Grid item width={500} justifyContent={"flex-end"}>
            <Typography textAlign={"left"} fontFamily={"Roboto"} variant="h6">
              {dataRight.map((user: HomeRightData) => (
                <TimeLineCard key={user.name} data={user.detail} />
              ))}
            </Typography>
          </Grid>

          <Grid className="Home_End" mt={6} container justifyContent={"center"}>
            <Typography p={2} variant="h6" textAlign={"center"} fontFamily={"Montserrat"}>
              Thank you for visiting my portfolio. Feel free to explore my work and get in touch if you have any questions or project ideas. Let's build something amazing together!
            </Typography>

            <Typography p={2} fontFamily={"Montserrat"} textAlign={"center"} variant="h5"> Enjoy My Web Space </Typography>
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
}

export default Home;