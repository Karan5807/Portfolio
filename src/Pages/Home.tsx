import Header from "../Core/Header";
import "../App.css";
import { Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

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

          <Grid item mt={5} p={1}>
            <Typography fontFamily={"Euphoria Script"} textAlign={"center"} variant="h3">Step inside my Online Space</Typography>
          </Grid>

          <Grid item mt={5} p={1}>
            <Typography textAlign={"center"} fontFamily={"Euphoria Script"} variant="h3">Begin your journey on my Website</Typography>
          </Grid>

          <Grid>
            <Grid item mt={5} p={1}>
              <Typography textAlign={"center"} fontFamily={"Montserrat"} variant="h1">I'm Karan Singh</Typography>
            </Grid>

            <Grid item mt={5} p={1}>
              <Typography textAlign={"center"} fontFamily={"Montserrat"} variant="h2">A Full Stack Developer <span>An Aspring Data Scientist</span></Typography>
            </Grid>

          </Grid>
        </Grid>

        {/* Section for About */}
        <Grid container mt={3} p={3} display={"flex"} justifyContent={"space-evenly"} className="About">

          <Grid item width={500}>
            <Typography textAlign={"justify"} fontFamily={"Roboto"} variant="h6">
              <span ><StarIcon /></span>    Welcome to my developer portfolio! I'm passionate about crafting digital experiences and turning ideas into functional, beautiful websites and applications. As a developer, I bring a unique blend of creativity and technical expertise to every project.
              <br />
              <br />
              <span ><StarIcon /></span>    In this digital showcase, you'll find a collection of my work, Each project represents a unique challenge I've tackled, showcasing my skills in front-end and back-end development.
              <br />
              <br />
              <span ><StarIcon /></span>    My goal is to create seamless, user-friendly experiences that not only meet the technical requirements but also leave a lasting impression. I believe in the power of clean code and intuitive design.
            </Typography>
          </Grid>

          <Grid item width={500} justifyContent={"flex-end"}>
            <Typography textAlign={"justify"} fontFamily={"Roboto"} variant="h6">
              <span ><StarIcon /></span>    Technologies are my tools, and I'm proficient in a wide range of them, including HTML, CSS, JavaScript, TypeScript, Python, and many more. I'm also well-versed in using various frameworks and libraries to optimize and accelerate development.
              <br />
              <br />
              <span ><StarIcon /></span>    Continuous learning is a cornerstone of my approach. I'm always exploring new technologies, trends, and best practices to stay at the forefront of the industry and provide the best solutions to my company and clients.
              <br />
              <br />
              <span ><StarIcon /></span>    Whether you're a business in need of a digital presence, a startup with an app idea, or a fellow developer looking to collaborate, I'm eager to hear from you and discuss how I can contribute to your success.
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