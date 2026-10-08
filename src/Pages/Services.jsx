import React from "react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

const C = {
  navy: "#0b1f4d",
  blue: "#1565c0",
  sky: "#29b6f6",
  pale: "#eaf3fd",
  ink: "#1b2333",
  muted: "#5b6577",
};

const programs = [
  {
    no: "01",
    title: "Fullstack Development",
    text: "Build complete web apps, from the screen your users see to the database behind it.",
    meta: "4 months · Beginner friendly",
    topics: ["HTML & CSS", "JavaScript", "React", "Node.js"],
  },
  {
    no: "02",
    title: "UI/UX Design",
    text: "Learn to research users, plan screens and design products people find easy to use.",
    meta: "3 months · Beginner friendly",
    topics: ["User research", "Wireframes", "Figma", "Prototyping"],
  },
  {
    no: "03",
    title: "Graphics Design",
    text: "Create logos, social media graphics and print designs that clients will pay for.",
    meta: "3 months · Beginner friendly",
    topics: ["Branding", "Logos", "Social media", "Print"],
  },
];

const extras = [
  { icon: <SchoolIcon />, title: "Mentoring", text: "One-on-one guidance on your projects." },
  { icon: <LaptopMacIcon />, title: "Website design", text: "Simple, professional sites for small businesses." },
  { icon: <BusinessCenterIcon />, title: "Team training", text: "Custom training for your organisation." },
];

export default function Services() {
  return (
<div>
    <Header/>
    <Box sx={{ bgcolor: "#fff", color: C.ink }}>
    
      {/* 1. INTRO (light, left-aligned) */}
      <Container maxWidth="lg" sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 4, md: 6 } }}>
        <Typography
          sx={{
            color: C.blue,
            fontWeight: 700,
            letterSpacing: 3,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Our services
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            color: C.navy,
            fontSize: { xs: "2.4rem", md: "3.6rem" },
            lineHeight: 1.1,
            maxWidth: 720,
            mb: 3,
          }}
        >
          Skills that open{" "}
          <Box component="span" sx={{ color: C.blue }}>
            real doors
          </Box>
        </Typography>
        <Typography sx={{ color: C.muted, fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 560 }}>
          Choose a program, learn by building real projects, and finish with work
          you can show to clients and employers.
        </Typography>
      </Container>

      {/* 2. PROGRAM LIST */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        {programs.map((p) => (
          <Box
            key={p.no}
            sx={{
              display: "grid",
              gap: { xs: 2, md: 4 },
              gridTemplateColumns: { xs: "1fr", md: "100px 1.3fr 1fr auto" },
              alignItems: "center",
              py: 4,
              borderTop: "1px solid #e3e9f3",
              "&:last-of-type": { borderBottom: "1px solid #e3e9f3" },
              transition: "background-color .2s",
              "&:hover": { bgcolor: "#f8fbff" },
            }}
          >
            <Typography
              sx={{ fontSize: "2.6rem", fontWeight: 800, color: "#c9ddf5", lineHeight: 1 }}
            >
              {p.no}
            </Typography>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: C.navy, mb: 1 }}>
                {p.title}
              </Typography>
              <Typography sx={{ color: C.muted, lineHeight: 1.7 }}>{p.text}</Typography>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ color: C.muted, mb: 1.5, fontWeight: 600 }}>
                {p.meta}
              </Typography>
              <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
                {p.topics.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{ bgcolor: C.pale, color: C.blue, fontWeight: 600 }}
                  />
                ))}
              </Stack>
            </Box>

            <Button
              href="/register"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 10,
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                borderColor: C.blue,
                color: C.blue,
                justifySelf: { xs: "start", md: "end" },
                "&:hover": { bgcolor: C.blue, color: "#fff", borderColor: C.blue },
              }}
            >
              Enroll
            </Button>
          </Box>
        ))}
      </Container>

      {/* 3. ALSO OFFERED */}
      <Box sx={{ bgcolor: C.pale, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, color: C.navy, mb: 4 }}>
            Also offered
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 4,
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            }}
          >
            {extras.map((e) => (
              <Stack key={e.title} direction="row" spacing={2} alignItems="flex-start">
                <Box sx={{ color: C.blue, mt: 0.3 }}>{e.icon}</Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>{e.title}</Typography>
                  <Typography sx={{ color: C.muted, lineHeight: 1.6 }}>{e.text}</Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 4. CALL TO ACTION (dark card) */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <Box
          sx={{
            borderRadius: 4,
            p: { xs: 4, md: 7 },
            color: "#fff",
            textAlign: "center",
            background: `linear-gradient(135deg, ${C.navy} 0%, ${C.blue} 100%)`,
          }}
        >
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Not sure which program fits you?
          </Typography>
          <Typography sx={{ opacity: 0.9, mb: 3 }}>
            Talk to us and we will help you choose.
          </Typography>
          <Button
            href="/contactus"
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: C.navy,
              borderRadius: 10,
              px: 4,
              py: 1.3,
              textTransform: "none",
              fontWeight: 700,
              "&:hover": { bgcolor: C.pale },
            }}
          >
            Contact us
          </Button>
        </Box>
      </Container>

    </Box>
    <Footer />
    </div>
  );
}