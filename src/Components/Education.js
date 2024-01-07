import { Container, Box, Typography, Stack, Divider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <Box
      id="education"
      width="100%"
      height="fit-content"
      sx={{ backgroundColor: "#E5D1FA" }}
    >
      <Container sx={{ padding: "24px !important" }} data-aos="fade-up">
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
            EDUCATION
          </Typography>
        </Box>

        <Box
          width="100%"
          height="50%"
          sx={{ backgroundColor: "#AAE3E2", borderRadius: "10px" }}
          p={2}
        >
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={4}>
              <Box width={{ sm: "10%", xs: "30%" }} height="auto">
                <img
                  src="https://storage.googleapis.com/ezap-prod/forms/361/ignou.jpg"
                  width="100%"
                  height="100%"
                  alt="Collage "
                  style={{ borderRadius: "10%" }}
                />
              </Box>

              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Indira Gandhi National Open University Delhi (IGNOU)
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Bachelor of Computer Application (BCA)
                </Typography>
                <Typography variant="h5">2020 - 2023</Typography>
              </Box>
            </Stack>
            <Divider />
            <Stack direction="row" spacing={4}>
              <Box width={{ sm: "10%", xs: "30%" }} height="auto">
                <img
                  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201207/cbse-logo_650_011714052203.jpg?VersionId=HqXQ.oeEfquFyDZv5N88IuksHaq4.eZu&size=690:388"
                  width="100%"
                  height="100%"
                  alt="Collage "
                  style={{ borderRadius: "10%" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Govt Boys Senior Secondary School ,Delhi
                </Typography>
                <Typography variant="h5">CBSE (XII) </Typography>
                <Typography variant="h5">2020</Typography>
              </Box>
            </Stack>
            <Divider />
            <Stack direction="row" spacing={4}>
              <Box width={{ sm: "10%", xs: "30%" }} height="auto">
                <img
                  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201207/cbse-logo_650_011714052203.jpg?VersionId=HqXQ.oeEfquFyDZv5N88IuksHaq4.eZu&size=690:388"
                  width="100%"
                  height="100%"
                  alt="Collage "
                  style={{ borderRadius: "10%" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Govt Boys Senior Secondary School ,Delhi
                </Typography>
                <Typography variant="h5">CBSE (X) </Typography>
                <Typography variant="h5">2018</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
