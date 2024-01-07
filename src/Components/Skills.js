import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@mui/material";

const Skills = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <>
      <Box
        id="skills"
        data-aos="fade-up"
        width="100%"
        height="fit-content"
        sx={{ backgroundColor: "#9fd7fa" }}
      >
        <Stack>
          <Container sx={{ padding: "0 !important" }}>
            <Typography
              variant="h1"
              gutterBottom
              textAlign="center"
              sx={{
                color: "white",
                fontWeight: "900",
                fontFamily: "Unbounded, sans-serif",
                textShadow: {
                  md: " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                  xs: "",
                },
              }}
            >
              SKILLS
            </Typography>

            <Grid container columnSpacing={2} rowSpacing={4} mt={1} mb={1}>
              <Grid item md={4} xs={4} sx={{ paddingLeft: "0 !important" }}>
                <Box>
                  <Stack
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    textAlign="center"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      width="30%"
                      height="auto"
                      src="http://3.bp.blogspot.com/-RaQkWMDZh2M/VxNsYbqan6I/AAAAAAAACSQ/vNUFQVEmiaAgQTgnx3WUY7U7Tq5G9gvKgCLcB/s1600/html-editor-.png"
                      alt="HTML"
                      style={{
                        borderRadius: "1rem",
                      }}
                    />

                    <Typography
                      component="div"
                      variant="h4"
                      sx={{
                        fontFamily: "Unbounded, sans-serif",
                        fontWeight: "900",
                        lineHeight: "5rem",
                        color: "#C147E9",
                        textShadow: {
                          md: " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                          xs: "",
                        },
                      }}
                    >
                      HTML
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={4} xs={4} sx={{ paddingLeft: "0 !important" }}>
                <Box>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    textAlign="center"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      width="30%"
                      height="auto"
                      src="https://www.softorks.com/Images/css.jpg"
                      alt="css"
                      style={{ borderRadius: "1rem" }}
                    />
                    <Typography
                      component="div"
                      variant="h4"
                      sx={{
                        fontFamily: "Unbounded, sans-serif",
                        fontWeight: "900",
                        color: "#C147E9",
                        lineHeight: "5rem",
                        textShadow: {
                          md: " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                          xs: "",
                        },
                      }}
                    >
                      CSS
                    </Typography>
                  </Stack>{" "}
                </Box>
              </Grid>
              <Grid item md={4} xs={4} sx={{ paddingLeft: "0 !important" }}>
                <Box>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    textAlign="center"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      width="30%"
                      height="auto"
                      src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png"
                      alt="Bootstrap"
                      style={{ borderRadius: "1rem" }}
                    />
                    <Typography
                      component="div"
                      variant={isMobile ? "h5" : "h4"}
                      sx={{
                        fontFamily: "Unbounded, sans-serif",
                        fontWeight: "900",
                        lineHeight: "5rem",

                        color: "#C147E9",
                        textShadow: {
                          md: " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                          xs: "",
                        },
                      }}
                    >
                      BOOTSTRAP
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={4} xs={4} sx={{ paddingLeft: "0 !important" }}>
                <Box>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    textAlign="center"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      width="30%"
                      height="auto"
                      src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png"
                      alt="javascript"
                      style={{ borderRadius: "1rem" }}
                    />
                    <Typography
                      component="div"
                      variant={isMobile ? "h5" : "h4"}
                      sx={{
                        fontFamily: "Unbounded, sans-serif",
                        fontWeight: "900",
                        lineHeight: "5rem",
                        color: "#C147E9",
                        textShadow: {
                          md: " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                          xs: "",
                        },
                      }}
                    >
                      JAVASCRIPT
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={4} xs={4} sx={{ paddingLeft: "0 !important" }}>
                <Box>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    textAlign="center"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      width="30%"
                      height="auto"
                      src="https://www.pngkey.com/png/full/222-2224712_react-react-logo-png.png"
                      alt="react"
                      style={{ borderRadius: "1rem" }}
                    />
                    <Typography
                      component="div"
                      variant="h4"
                      sx={{
                        fontFamily: "Unbounded, sans-serif",
                        fontWeight: "900",
                        color: "#C147E9",
                        lineHeight: "5rem",

                        textShadow: {
                          md: " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                          xs: "",
                        },
                      }}
                    >
                      REACT
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={4} xs={4} sx={{ paddingLeft: "0 !important" }}>
                <Box>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    textAlign="center"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      width="30%"
                      height="auto"
                      src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1"
                      alt="react"
                      style={{
                        borderRadius: "1rem",
                      }}
                    />
                    <Typography
                      component="div"
                      variant="h4"
                      sx={{
                        fontFamily: "Unbounded, sans-serif",
                        fontWeight: "900",
                        color: "#C147E9",

                        lineHeight: "5rem",
                        textShadow: {
                          md: " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                          xs: "",
                        },
                      }}
                    >
                      REDUX
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={4} xs={4} sx={{ paddingLeft: "0 !important" }}>
                <Box>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    textAlign="center"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      width="30%"
                      height="auto"
                      src="https://pngimg.com/uploads/github/github_PNG53.png"
                      alt="github"
                      style={{ borderRadius: "1rem" }}
                    />
                    <Typography
                      component="div"
                      variant="h4"
                      sx={{
                        fontFamily: "Unbounded, sans-serif",
                        fontWeight: "900",
                        lineHeight: "5rem",
                        color: "#C147E9",
                        textShadow: {
                          md: " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                          xs: "",
                        },
                      }}
                    >
                      GITHUB
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Box>
    </>
  );
};

export default Skills;
