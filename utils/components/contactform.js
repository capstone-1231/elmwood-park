import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

const NameFlexContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
});

const IconImage = styled('img')({
  marginLeft: '1rem',
  width: '2rem',
  paddingBottom: '1rem'
});

const ElmwoodIconFlex = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceID = 'service_3ikoxue';
    const userID = 'HRvsR4jC6mY0r3AG9';
    const templateID = 'template_tq1ql5r';

    try {
      const response = await emailjs.send(serviceID, templateID, {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        message: formData.message,
      }, userID);

      console.log('Email sent successfully:', response);

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          width: '100%',
          gap: '1rem',
          paddingTop: '2rem'
        }}
      >
       <ElmwoodIconFlex sx={{ padding: '2rem 0 1rem 0' }}>
            <Typography variant="h2" component="h2" gutterBottom>
                General Inquiries Form
            </Typography>
            <IconImage sx={{ display: { xs: "none", sm: "none", md: "inherit", lg: "inherit", xl: "inherit" }, }} src="tree-icon-left.png" alt="Elmwood Tree Icon" />
        </ElmwoodIconFlex>
        <NameFlexContainer sx={{ flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" } }}>
          <TextField
            sx={{
              flexGrow: '1',
              background: '#ffffff',
              "& label.Mui-focused": {
                color: "#50891e"
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#50891e"
                }
              }
            }}
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            InputProps={{
              sx: {
                borderRadius: "0.8rem",
              }
            }}
          />
          <TextField
            sx={{
              flexGrow: '1',
              background: '#ffffff',
              "& label.Mui-focused": {
                color: "#50891e"
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#50891e"
                }
              }
            }}
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            InputProps={{
              sx: {
                borderRadius: "0.8rem",
              }
            }}
          />
        </NameFlexContainer>
        <TextField
          sx={{
            background: '#ffffff',
            "& label.Mui-focused": {
              color: "#50891e"
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#50891e"
              }
            }
          }}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          InputProps={{
            sx: {
              borderRadius: "0.8rem",
            }
          }}
        />
        <TextField
          sx={{
            background: '#ffffff',
            "& label.Mui-focused": {
              color: "#50891e"
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#50891e"
              }
            }
          }}
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          InputProps={{
            sx: {
              borderRadius: "0.8rem",
            }
          }}
        />
        <TextField
          sx={{
            background: '#ffffff',
            "& label.Mui-focused": {
              color: "#50891e"
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#50891e"
              }
            }
          }}
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          InputProps={{
            sx: {
              borderRadius: "0.8rem",
            }
          }}
        />

        {submitStatus === 'success' && (
          <Alert variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', color: 'green' }}>
          Thank you for your submission! Please wait up to 1-2 business days for us to respond.
        </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', color: 'red' }}>
          Error submitting the form. Please try again.
        </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            width: '100%',
            borderRadius: '0.8rem',
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
            },
          }}
        >
          Submit
        </Button>
      </Container>
    </form>
  );
};

export default ContactForm;
