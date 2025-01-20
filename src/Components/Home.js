import { Grid, Typography, Container, Box, Link, Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img from "../Images/img.jpg";
export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <Box id="home">
      <Box>
        <Container
          sx={{
            padding: "0 !important",
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              p: "1rem",
              gap: { md: "3rem", xs: "0" },
              marginBottom: "10rem",
              height: "fit-content",
              position: " relative",
              top: "8rem",
            }}
          >
            <Grid item md={6}>
              <Typography variant="h4" color="secondary">
                Hello It's Me
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  textShadow:
                    "-1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                  fontFamily: "Unbounded, sans-serif",
                  color: "#FF6AC2",
                  marginBottom: "1rem",
                }}
              >
                Praveen Singh
              </Typography>

              <Typography
                variant="h2"
                color="primary"
                sx={{
                  textShadow:
                    " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                  fontFamily: "Unbounded, sans-serif",
                  color: "#FF6AC2",
                  marginBottom: "1rem",
                }}
              >
                Fullstack Developer
              </Typography>
              <Link
                href="https://drive.google.com/file/d/17E2uzT7awkzTkjkdt7wVwHZNEToThbU0/view"
                target="blank"
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#B931FC",
                    fontSize: "1.5rem",
                    "&:hover": {
                      backgroundColor: "#FE7BE5",
                    },
                  }}
                >
                  Download CV
                </Button>
              </Link>
              <Box mt={2}>
                <Link href="mailto:adhikariP861@gmail.com" title="Email">
                  <EmailOutlinedIcon
                    sx={{ fontSize: "3rem", cursor: "pointer", color: "black" }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/AdhikariSingh/"
                  title="Linkedin"
                  target="_blank"
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: "3rem",
                      color: "blue",
                      marginLeft: "1rem",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </Box>
              <Box mt={3}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#B931FC",
                    fontFamily: "Libre Baskerville, serif",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                >
                  Full Stack Developer with hands-on experience in building dynamic web applications using the MERN stack. Adept at both front-end and back-end development, with a passion for creating efficient, scalable, and user-centric web applications. Eager to contribute technical expertise to a forward-thinking team.
                </Typography>
              </Box>
            </Grid>

            <Grid item md={4} xs={12}>
              <Box>
                <img
                  src={img}
                  alt="logo"
                  width="100%"
                  height="auto"
                  data-aos="fade-up"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
