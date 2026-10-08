import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

const C = {
  navy: "#0b1f4d",
  blue: "#1565c0",
  pale: "#eaf3fd",
  ink: "#1b2333",
  muted: "#5b6577",
  page: "#f5f7fb",
};

const details = [
  { icon: <EmailIcon />, label: "Email", value: "danielchidiebere109@gmail.com" },
  { icon: <PhoneIcon />, label: "Phone", value: "+234 81480 37569" },
  { icon: <LocationOnIcon />, label: "Location", value: "Owerri, Imo State" },
];

const faqs = [
  {
    q: "Do I need experience to join?",
    a: "No. Our programs are beginner friendly and start from the basics.",
  },
  {
    q: "How do I enroll?",
    a: "Create an account on the Register page, choose your program, and we will contact you with the next steps.",
  },
  {
    q: "Can I ask questions before I decide?",
    a: "Yes. Send us a message using the form above or call us and we will help you choose.",
  },
];

const empty = { name: "", email: "", phone: "", message: "" };

export default function Contactus() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = {};
    if (!values.name.trim()) found.name = "Enter your name";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) found.email = "Enter a valid email address";
    if (values.message.trim().length < 10) found.message = "Write at least 10 characters";
    setErrors(found);
    if (Object.keys(found).length) return;

    // TODO: send `values` to your backend or an email service (e.g. EmailJS)
    console.log("Contact form:", values);
    setSent(true);
    setValues(empty);
  };

  return (
    
<div>
    <Header/>
    <Box sx={{ bgcolor: C.page, color: C.ink }}>

      {/* 1. HEADING */}
      <Container maxWidth="md" sx={{ pt: { xs: 7, md: 10 }, pb: 5, textAlign: "center" }}>
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
          Contact us
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: 800, color: C.navy, fontSize: { xs: "2.2rem", md: "3.2rem" }, mb: 2 }}
        >
          Let's talk
        </Typography>
        <Typography sx={{ color: C.muted, fontSize: "1.1rem", lineHeight: 1.7 }}>
          Questions about a program or enrolment? We usually reply quickly.
        </Typography>
      </Container>

      {/* 2. SPLIT CARD: info panel + form */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 9 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "#fff",
            boxShadow: "0 18px 48px rgba(11,31,77,.12)",
          }}
        >
          {/* Info panel */}
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              p: { xs: 4, md: 6 },
              color: "#fff",
              background: `linear-gradient(160deg, ${C.navy} 0%, ${C.blue} 100%)`,
            }}
          >
            {/* decorative circle */}
            <Box
              sx={{
                position: "absolute",
                width: 260,
                height: 260,
                borderRadius: "50%",
                right: -90,
                bottom: -90,
                bgcolor: "rgba(255,255,255,.08)",
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Contact information
            </Typography>
            <Typography sx={{ opacity: 0.85, mb: 5, lineHeight: 1.7 }}>
              Reach us any way that is easiest for you.
            </Typography>

            <Stack spacing={3} sx={{ position: "relative" }}>
              {details.map((d) => (
                <Stack key={d.label} direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(255,255,255,.15)",
                      flexShrink: 0,
                    }}
                  >
                    {d.icon}
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="body2" sx={{ opacity: 0.75 }}>
                      {d.label}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, wordBreak: "break-word" }}>
                      {d.value}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Form */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ p: { xs: 4, md: 6 } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: C.navy, mb: 3 }}>
              Send us a message
            </Typography>

            {sent && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Message sent. We will reply as soon as we can.
              </Alert>
            )}

            <Stack spacing={2.5}>
              <Box
                sx={{
                  display: "grid",
                  gap: 2.5,
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                }}
              >
                <TextField
                  label="Full name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                />
              </Box>
              <TextField
                label="Phone (optional)"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                multiline
                rows={5}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  bgcolor: C.blue,
                  borderRadius: 10,
                  py: 1.4,
                  textTransform: "none",
                  fontWeight: 600,
                  alignSelf: "flex-start",
                  px: 5,
                }}
              >
                Send message
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* 3. FAQ */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 6, md: 9 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, color: C.navy, textAlign: "center", mb: 4 }}
          >
            Common questions
          </Typography>
          {faqs.map((f) => (
            <Accordion
              key={f.q}
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e3e9f3",
                borderRadius: "12px !important",
                mb: 1.5,
                "&::before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 3, py: 0.5 }}>
                <Typography sx={{ fontWeight: 600 }}>{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography sx={{ color: C.muted, lineHeight: 1.7 }}>{f.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      
    </Box>
    <Footer />
    </div>
  );
}
