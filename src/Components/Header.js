import {
  Stack,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Link,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
export const Header = () => {
  const [value, setValue] = useState("home");
  const [show, setShow] = useState(false);

  const handleClick = (newValue) => {
    if (value !== newValue) {
      setValue(newValue);
    }
  };

  const handleScroll = () => {
    setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const showMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <Box p={2}>
        <AppBar
          sx={{
            width: "100%",
            position: "fixed !important",
            background: "yellow",
            borderRadius: "24px",
            marginBottom: "2rem",
            top: "1rem",
            left: "0",
            zIndex: "99999",
          }}
          elevation={0}
        >
          <Toolbar>
            <Typography
              variant="h2"
              edge="start"
              sx={{
                flexGrow: "1",
                textShadow:
                  " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
              }}
            >
              Portfolio
            </Typography>
            <Box onClick={showMenu}>
              <MenuIcon
                sx={{
                  fontSize: "4rem",
                  color: "black",
                  zIndex: "-99999",
                  display: { md: "none" },
                }}
              />
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { sm: "none", xs: "none", md: "block" } }}
            >
              <Link href="#home">
                <Button
                  variant="text"
                  onClick={() => handleClick("home")}
                  size="medium"
                  disableRipple
                  sx={{
                    borderRadius: "26px",
                    padding: "0",
                    background: value === "home" ? "#FE7BE5" : "",
                    "&:hover": {
                      background:
                        value === "home" ? " #FE7BE5 !important" : "#FE7BE5",
                      borderRadius: "26px",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#916DB3",
                      fontWeight: "600",
                      padding: "0.5rem 2rem",
                    }}
                  >
                    Home
                  </Typography>
                </Button>
              </Link>
              <Link href="#skills">
                <Button
                  onClick={() => handleClick("Skill")}
                  variant="text"
                  size="medium"
                  sx={{
                    borderRadius: "26px",
                    padding: "0",

                    backgroundColor: value === "Skill" ? "#FE7BE5" : "",
                    "&:hover": {
                      background:
                        value === "Skill" ? " #FE7BE5 !important" : "#FE7BE5",
                      borderRadius: "26px",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#916DB3",
                      fontWeight: "600",
                      padding: "0.5rem 2rem",
                    }}
                  >
                    Skills
                  </Typography>
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  variant="text"
                  onClick={() => handleClick("project")}
                  size="medium"
                  sx={{
                    borderRadius: "26px",
                    padding: "0",

                    backgroundColor: value === "project" ? "#FE7BE5" : "",
                    "&:hover": {
                      background:
                        value === "project" ? " #FE7BE5 !important" : "#FE7BE5",
                      borderRadius: "26px",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#916DB3",
                      fontWeight: "600",
                      padding: "0.5rem 2rem",
                    }}
                  >
                    Projects
                  </Typography>
                </Button>
              </Link>
              <Link href="#education">
                <Button
                  variant="text"
                  onClick={() => handleClick("education")}
                  size="medium"
                  sx={{
                    borderRadius: "26px",
                    padding: "0",

                    backgroundColor: value === "education" ? "#FE7BE5" : "",
                    "&:hover": {
                      background:
                        value === "education"
                          ? " #FE7BE5 !important"
                          : "#FE7BE5",
                      borderRadius: "26px",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#916DB3",
                      fontWeight: "600",
                      padding: "0.5rem 2rem",
                    }}
                  >
                    Education
                  </Typography>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="text"
                  size="small"
                  onClick={() => handleClick("contact")}
                  sx={{
                    borderRadius: "26px",
                    padding: "0",

                    backgroundColor: value === "contact" ? "#FE7BE5" : "",
                    "&:hover": {
                      background:
                        value === "contact" ? " #FE7BE5 !important" : "#FE7BE5",
                      borderRadius: "26px",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#916DB3",
                      fontWeight: "600",
                      padding: "0.5rem 2rem",
                    }}
                  >
                    Contact Me
                  </Typography>
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          border: "2px solid black",
          position: "fixed",
          width: "100vw",
          top: "8rem",
          zIndex: "9999",
          background: "yellow",
          borderRadius: "1rem",
          padding: "2rem",
          display: show === true ? "block" : "none",
        }}
      >
        <Stack direction="column" spacing={1}>
          <Link href="#home" sx={{ textDecoration: "none" }}>
            <Typography
              onClick={() => handleClick("home")}
              sx={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "1rem",
                padding: "1rem",
                textShadow:
                  " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                fontFamily: "Unbounded, sans-serif",
                fontWeight: "800",
                backgroundColor: value === "home" ? "#FE7BE5" : "",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="#skills" sx={{ textDecoration: "none" }}>
            <Typography
              onClick={() => handleClick("Skill")}
              sx={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "1rem",
                padding: "1rem",
                textShadow:
                  " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                fontFamily: "Unbounded, sans-serif",
                fontWeight: "800",
                backgroundColor: value === "Skill" ? "#FE7BE5" : "",
              }}
            >
              Skill
            </Typography>
          </Link>
          <Link href="#projects" sx={{ textDecoration: "none" }}>
            <Typography
              onClick={() => handleClick("projects")}
              sx={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "1rem",
                padding: "1rem",
                textShadow:
                  " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                fontFamily: "Unbounded, sans-serif",
                fontWeight: "800",
                backgroundColor: value === "projects" ? "#FE7BE5" : "",
              }}
            >
              Projects
            </Typography>
          </Link>
          <Link href="#education" sx={{ textDecoration: "none" }}>
            <Typography
              onClick={() => handleClick("Education")}
              sx={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "1rem",
                padding: "1rem",
                textShadow:
                  " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                fontFamily: "Unbounded, sans-serif",
                fontWeight: "800",
                backgroundColor: value === "Education" ? "#FE7BE5" : "",
              }}
            >
              Education
            </Typography>
          </Link>
          <Link href="#contact" sx={{ textDecoration: "none" }}>
            <Typography
              onClick={() => handleClick("contact")}
              sx={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "1rem",
                padding: "1rem",
                textShadow:
                  " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                fontFamily: "Unbounded, sans-serif",
                fontWeight: "800",
                backgroundColor: value === "contact" ? "#FE7BE5" : "",
              }}
            >
              Contact Me
            </Typography>
          </Link>
        </Stack>
      </Box>
    </>
  );
};
