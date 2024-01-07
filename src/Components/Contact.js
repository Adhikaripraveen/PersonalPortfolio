import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CloseIcon from "@mui/icons-material/Close";

const Contact = () => {
  const [show, setShow] = useState(false);
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_9a58cnv",
        "template_7hxb1sd",
        form.current,
        "19b6GvENcMdwBWnhP"
      )
      .then((result) => {
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
    
    setShow(true);
  };

  return (
    <Box
      id="contact"
      width="100%"
      height="fit-content"
      sx={{ backgroundColor: "#D14D72" }}
    >
      <Container
        sx={{ paddingBottom: "2rem" }}
        data-aos="fade-up"
        data-aos-offset="100"
      >
        <Box>
          <Typography
            gutterBottom
            textAlign="center"
            sx={{
              color: "white",
              fontWeight: "900",
              fontFamily: "Unbounded, sans-serif",
              fontSize: "4.5rem",
              textShadow:
                " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
            }}
          >
            CONTACT ME
          </Typography>
          <form ref={form} onSubmit={handleSubmit}>
            <Box
              p={4}
              sx={{ border: "2px solid black", borderRadius: "10px " }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    color: "white",
                    fontWeight: "900",
                    fontFamily: "Unbounded, sans-serif",
                    textShadow:
                      " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                  }}
                >
                  Email Me
                </Typography>
                {show && (
                  <Box
                    component="span"
                    sx={{
                      border: "2px solid black",
                      padding: "1rem",
                      borderRadius: "24px",

                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        color: "Green",
                        fontWeight: "900",
                        fontFamily: "Unbounded, sans-serif",
                        display: "inline",
                        textShadow:
                          " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                      }}
                    >
                      Your Mail has Send Successfully.
                    </Typography>
                    <CloseIcon
                      sx={{
                        position: "absolute",
                        right: "1%",

                        fontSize: "3rem",
                        color: "white",
                      }}
                      onClick={() => {
                        setShow(false)
                      }}
                    />
                  </Box>
                )}
                <TextField
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white",
                      fontSize: "1.5rem",
                      fontFamily: "Unbounded, sans-serif !important",
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                    },
                    "& .MuiFilledInput-root": {
                      "& input": {
                        fontSize: "1.5rem",
                        color: "white",
                      },
                    },
                    "& .MuiFilledInput-root:after": {
                      borderBottom: "2px solid white",
                      color: "white !important",
                    },
                    "& .MuiFormLabel-root-MuiInputLabel-root-Mui-focused": {
                      color: "white ",
                      fontSize: "5rem",
                    },
                  }}
                  autoComplete="off"
                  id="standard-basic"
                  label="Name"
                  variant="filled"
                  name="to_name"
                />
                <TextField
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white",
                      fontSize: "1.5rem",
                      fontFamily: "Unbounded, sans-serif !important",
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                    },
                    "& .MuiFilledInput-root": {
                      "& input": {
                        fontSize: "1.5rem",
                        color: "white",
                      },
                      "&.Mui-focused Textfield": {
                        color: "white",
                      },
                    },
                    "& .MuiFilledInput-root:after": {
                      borderBottom: "2px solid white",
                    },
                  }}
                  id="standard-basic"
                  label="Email"
                  variant="filled"
                  name="from_name"
                  autoComplete="off"
                />

                <TextField
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white",
                      fontSize: "1.5rem",
                      fontFamily: "Unbounded, sans-serif !important",
                      textShadow:
                        " -1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a, 4px 4px #2a2a2a",
                    },
                    "& .MuiFilledInput-input": {
                      fontSize: "1.5rem",
                      color: "white",
                    },

                    "& .MuiFilledInput-root:after": {
                      borderBottom: "2px solid white",
                      color: "white",
                    },
                    "& .MuiFormLabel-root-MuiInputLabel-root-Mui-focused": {
                      color: "white ",
                      fontSize: "5rem",
                    },
                  }}
                  id="standard-basic"
                  label="Message"
                  variant="filled"
                  name="message"
                  multiline
                />
              </Stack>
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                size="large"
                type="submit"
              >
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
