import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <Grid container>
            <Grid container bgcolor={"whitesmoke"} display={"flex"} justifyContent={"space-between"} className="Header">
                <Grid item p={1}>
                    <Typography color={"#002D62"} fontSize={32} fontFamily={"Style Script"} fontWeight={700}>Karan Singh</Typography>
                </Grid>
                <Grid item p={1} marginRight={2} minWidth={500} display={"flex"} justifyContent={"space-between"}>
                    <Grid item>
                        <Link className='Link' to={"/Projects"}>Projects</Link>
                    </Grid>
                    <Grid item>
                        <Link className='Link' to={"/Education"}>Education</Link>
                    </Grid>
                    <Grid item>
                        <Link className='Link' to={"/Blogs"}>Blogs</Link>
                    </Grid>
                    <Grid item>
                        <Link className='Link' to={"/Contact"}>Contact</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Header