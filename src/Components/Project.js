import {
  Container,
  Link,
  Button,
  Stack,
  Typography,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Movix from "../Images/Movix.png";
import Task from "../Images/Task.png";
import PropertySite from "../Images/PropertySite.png";

export const Project = () => {
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
        id="projects"
        width="100%"
        height="fit-content"
        sx={{ backgroundColor: "#FFACAC" }}
      >
        <Container sx={{ padding: "1rem" }}>
          <Typography
            color="primary"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: "4.5rem",
              color: "white",
              fontWeight: "900",
              fontFamily: "Unbounded, sans-serif",
              textShadow:
                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
            }}
          >
            PROJECTS
          </Typography>

          <Box>
            <Stack
              direction="column"
              spacing={2}
              sx={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Stack spacing={1} direction="row">
                <Box
                  sx={{
                    padding: "1rem",

                    borderRadius: "14px",
                  }}
                  data-aos="zoom-in-up"
                >
                  <Typography
                    component="span"
                    variant="h3"
                    gutterBottom
                    sx={{
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                      fontFamily: "Libre Baskerville,serif",
                      color: "#F11A7B",
                    }}
                  >
                    <StarIcon
                      sx={{
                        color: "yellow",
                        fontSize: "3rem",
                      }}
                    />
                    MOVIX
                  </Typography>
                  <Typography
                    component="span"
                    variant="h3"
                    gutterBottom
                    sx={{
                      marginLeft: "1rem",
                      color: "#A076F9",
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                      fontFamily: "Libre Baskerville,serif",
                    }}
                  >
                    :- Movie And TV Series Streaming Site
                  </Typography>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "2rem",
                      background: "#BEADFA",
                      borderRadius: "14px",
                      marginTop: "1rem",
                    }}
                    data-aos="zoom-in-up"
                  >
                    <Stack
                      spacing={2}
                      sx={{
                        marginTop: "1rem",
                        gap: "1rem",
                        flexDirection: {
                          md: "row",
                          xs: "column",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: {
                            sm: "100%",
                            md: "40%",
                          },
                        }}
                      >
                        <img
                          src={Movix}
                          alt="Movix"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Stack direction="column" spacing={1}>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Tech Stack :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            React,HTML,CSS,Api Integration,Responsive
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Content Streaming :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            The platform enables users to watch a vast library
                            of movies and TV shows.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            API Integration :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            All the movies and series data are providing by the
                            TMDB on the user’s request basis.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Watchlist Feature:-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            One of the standoutfeatures of MOVIX is its
                            watchlistfunctionality .Users can add movies and TV
                            shows to their personal watchlists, making it
                            convenientto keep track of contentthey plan to watch
                            later
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Search Functionality:-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            :Users can easily search fortheirfavorite content
                            using the search feature, which allows them to
                            discover new titles orlocate specific movies and TV
                            shows quickly.
                          </Typography>
                        </Box>
                        <Box>
                          <Link
                            href="https://Adhikaripraveen.github.io/MOVIX"
                            target="blank"
                          >
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                backgroundColor: "#B931FC",
                                fontFamily: "Libre Baskerville,serif",
                                marginRight: "1rem",
                                fontSize: "1rem",
                                "&:hover": {
                                  backgroundColor: "#FE7BE5",
                                },
                              }}
                            >
                              Live Site
                            </Button>
                          </Link>
                          <Link
                            href="https://github.com/Adhikaripraveen/MOVIX"
                            target="blank"
                          >
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                backgroundColor: "#B931FC",
                                fontFamily: "Libre Baskerville,serif",
                                marginRight: "1rem",
                                fontSize: "1rem",
                                "&:hover": {
                                  backgroundColor: "#FE7BE5",
                                },
                              }}
                            >
                              Github
                            </Button>
                          </Link>
                        </Box>
                      </Stack>
                    </Stack>
                  </Paper>
                </Box>
              </Stack>

              <Stack spacing={1} direction="row">
                <Box
                  sx={{
                    padding: "1rem",

                    borderRadius: "14px",
                  }}
                  data-aos="zoom-in-up"
                >
                  <Typography
                    component="span"
                    variant="h3"
                    gutterBottom
                    sx={{
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                      fontFamily: "Libre Baskerville,serif",
                      color: "#F11A7B",
                    }}
                  >
                    <StarIcon
                      sx={{
                        color: "yellow",
                        fontSize: "3rem",
                      }}
                    />
                    Task Management System
                  </Typography>
                  <Typography
                    component="span"
                    variant="h3"
                    gutterBottom
                    sx={{
                      marginLeft: "1rem",
                      color: "#A076F9",
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                      fontFamily: "Libre Baskerville,serif",
                    }}
                  >
                    :-A React-based project designed for efficient task
                    management.
                  </Typography>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "2rem",
                      background: "#BEADFA",
                      borderRadius: "14px",
                      marginTop: "1rem",
                    }}
                    data-aos="zoom-in-up"
                  >
                    <Stack
                      spacing={2}
                      sx={{
                        marginTop: "1rem",
                        gap: "1rem",
                        flexDirection: {
                          md: "row",
                          xs: "column",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: {
                            sm: "100%",
                            md: "40%",
                          },
                        }}
                      >
                        <img src={Task} alt="Task" width="100%" height="100%" />
                      </Box>
                      <Stack direction="column" spacing={1}>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Tech Stack :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            React,HTML,CSS,local Storage,Responsive
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Features :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            Users can add,Delete and modifiy the tasks
                            seamlessly through a user-friendly interface.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            LocalStorage Integration :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            Alltasks are stored locally using the browser's
                            “localStorage“.Ensures persistent data even afterthe
                            browseris closed, providing a seamless user
                            experience.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            State Management :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            Utilizes React state managementto keep track of
                            dynamic changes within the application
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Learning Outcomes:-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            Opportunity to enhance React skills, state
                            management, and local storage usage.Practical
                            application of frontend development concepts in a
                            real-world project.
                          </Typography>
                        </Box>
                        <Box>
                          <Link
                            href="https://Adhikaripraveen.github.io/Task-Management-App"
                            target="blank"
                          >
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                backgroundColor: "#B931FC",
                                fontFamily: "Libre Baskerville,serif",
                                marginRight: "1rem",
                                fontSize: "1rem",
                                "&:hover": {
                                  backgroundColor: "#FE7BE5",
                                },
                              }}
                            >
                              Live Site
                            </Button>
                          </Link>
                          <Link
                            href="https://github.com/Adhikaripraveen/Task-Management-App"
                            target="blank"
                          >
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                backgroundColor: "#B931FC",
                                fontFamily: "Libre Baskerville,serif",
                                marginRight: "1rem",
                                fontSize: "1rem",
                                "&:hover": {
                                  backgroundColor: "#FE7BE5",
                                },
                              }}
                            >
                              Github
                            </Button>
                          </Link>
                        </Box>
                      </Stack>
                    </Stack>
                  </Paper>
                </Box>
                {/* This is Movix section */}
              </Stack>
              <Stack spacing={1} direction="row">
                <Box
                  sx={{
                    padding: "1rem",

                    borderRadius: "14px",
                  }}
                  data-aos="zoom-in-up"
                >
                  <Typography
                    component="span"
                    variant="h3"
                    gutterBottom
                    sx={{
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                      fontFamily: "Libre Baskerville,serif",
                      color: "#F11A7B",
                    }}
                  >
                    <StarIcon
                      sx={{
                        color: "yellow",
                        fontSize: "3rem",
                      }}
                    />
                    PROPERTYSITE :-
                  </Typography>
                  <Typography
                    component="span"
                    variant="h3"
                    gutterBottom
                    sx={{
                      marginLeft: "1rem",
                      color: "#A076F9",
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                      fontFamily: "Libre Baskerville,serif",
                    }}
                  >
                    Real Estate Property Listing Website.
                  </Typography>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "2rem",
                      background: "#BEADFA",
                      borderRadius: "14px",
                      marginTop: "1rem",
                    }}
                    data-aos="zoom-in-up"
                  >
                    <Stack
                      spacing={2}
                      sx={{
                        marginTop: "1rem",
                        gap: "1rem",
                        flexDirection: {
                          md: "row",
                          xs: "column",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: {
                            sm: "100%",
                            md: "40%",
                          },
                        }}
                      >
                        <img
                          src={PropertySite}
                          alt="PropertySite"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Stack direction="column" spacing={1}>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Tech Stack :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            React,HTML,CSS,Carousel ,Responsive
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Property Listings :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            Property Site offers a user-friendly interface where
                            users can browse through an extensive catalog of
                            real estate listings.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Carousel :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            The platform employs a dynamic carousel display to
                            showcase property listings. This visually engaging
                            feature allows users to scroll through listings
                            effortlessly and get a glimpse of each property.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            FAQ Section :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            Property Site includes an FAQ (Frequently Asked
                            Questions) section to address common queries users
                            may have regarding the property listings, buying
                            process, and other related topics
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{
                              color: "#FF6AC2",
                              fontWeight: "600",
                              textShadow:
                                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                            }}
                          >
                            Responsive Design :-
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "black",
                              fontSize: "1.8rem",
                              marginLeft: "0.5rem",
                              fontFamily: "Libre Baskerville,serif",
                            }}
                          >
                            The website is designed to be fully responsive,
                            ensuring a seamless user experience on various
                            devices, including desktops, tablets, and mobile
                            phones
                          </Typography>
                        </Box>
                        <Box>
                          <Link
                            href="https://adhikaripraveen.github.io/PropertySite/"
                            target="blank"
                          >
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                backgroundColor: "#B931FC",
                                fontFamily: "Libre Baskerville,serif",
                                marginRight: "1rem",
                                fontSize: "1rem",
                                "&:hover": {
                                  backgroundColor: "#FE7BE5",
                                },
                              }}
                            >
                              Live Site
                            </Button>
                          </Link>
                          <Link
                            href="https://github.com/Adhikaripraveen/PropertySite"
                            target="blank"
                          >
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                backgroundColor: "#B931FC",
                                fontFamily: "Libre Baskerville,serif",
                                marginRight: "1rem",
                                fontSize: "1rem",
                                "&:hover": {
                                  backgroundColor: "#FE7BE5",
                                },
                              }}
                            >
                              Github
                            </Button>
                          </Link>
                        </Box>
                      </Stack>
                    </Stack>
                  </Paper>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};
