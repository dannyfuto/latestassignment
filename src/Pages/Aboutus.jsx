import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

import about from "../assets/about.jpg";

const C = {
  navy: "#0b1f4d",
  blue: "#1565c0",
  sky: "#29b6f6",
  pale: "#eaf3fd",
  ink: "#1b2333",
  muted: "#5b6577",
  page: "#f5f7fb",
};

const card = {
  bgcolor: "#fff",
  borderRadius: 3,
  p: 4,
  border: "1px solid #e3e9f3",
};

function IconBadge({ children }) {
  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        borderRadius: 2,
        display: "grid",
        placeItems: "center",
        bgcolor: C.pale,
        color: C.blue,
        mb: 2,
      }}
    >
      {children}
    </Box>
  );
}

export default function AboutUs() {
  return (
    <div>
        <Header/>
    <Box sx={{ bgcolor: C.page, color: C.ink }}>

      {/* 1. BANNER */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${C.navy} 0%, ${C.blue} 100%)`,
          color: "#fff",
          py: { xs: 8, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              mb: 2,
            }}
          >
            About Us
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7 }}>
            Our Digital Skills Academy in Owerri trains students in fullstack
            development, UI/UX and graphics design.
          </Typography>
        </Container>
      </Box>

      {/* 2. OUR STORY + OWNER */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gap: 6,
            alignItems: "center",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              order: { xs: -1, md: 0 },
            }}
          >
            <Box
              component="img"
              src={about}
              alt="Founder"
              sx={{
                width: { xs: 240, md: 300 },
                height: { xs: 320, md: 400 },
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 12px 32px rgba(21,101,192,.25)",
              }}
            />
          </Box>

          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 700, color: C.navy, mb: 2 }}
            >
              Our story
            </Typography>
            <Typography
              sx={{ color: C.muted, lineHeight: 1.9, mb: 3, fontSize: "1.05rem" }}
            >
              Write two or three sentences here about who you are, why you
              started the academy, and what students can expect when they learn
              with you.
            </Typography>
            <Button
              href="/contactus"
              variant="contained"
              sx={{
                bgcolor: C.blue,
                borderRadius: 10,
                px: 4,
                py: 1.2,
                textTransform: "none",
              }}
            >
              Contact us
            </Button>
          </Box>
        </Box>
      </Container>

      {/* 3. MISSION AND VISION */}
      <Box sx={{ bgcolor: C.pale, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            <Box sx={card}>
              <IconBadge>
                <FlagIcon />
              </IconBadge>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Our mission
              </Typography>
              <Typography sx={{ color: C.muted, lineHeight: 1.8 }}>
                To give students practical digital skills they can use to earn,
                build and grow, wherever they start from.
              </Typography>
            </Box>
            <Box sx={card}>
              <IconBadge>
                <VisibilityIcon />
              </IconBadge>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Our vision
              </Typography>
              <Typography sx={{ color: C.muted, lineHeight: 1.8 }}>
                A community where every learner in Owerri and beyond can
                compete in the digital economy.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 4. CALL TO ACTION */}
      <Box
        sx={{ bgcolor: "#4aa9f8", color: "#fff", py: 8, textAlign: "center" }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            Ready to start your learning journey?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Join us today and learn practical digital skills that can transform
            your future.
          </Typography>
          <Button
            href="/register"
            variant="contained"
            sx={{
              bgcolor: "#000",
              borderRadius: 10,
              px: 4,
              py: 1.2,
              textTransform: "none",
              "&:hover": { bgcolor: "#222" },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
    <Footer>

    </Footer>
    </div>
  );
}