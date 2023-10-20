import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Container from '@mui/material/Container'

const NameFlexContainer = styled('div')({
  display: 'flex',
  gap: '1rem'
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container sx={{ 
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        width: { xs: "90%", sm: "90%", md: "90%", lg: "40%", xl: "40%" },
        gap: '1rem'
       }}>
        <NameFlexContainer>
          <TextField sx={{ 
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
          <TextField sx={{ 
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
        <TextField sx={{ 
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
          <TextField sx={{ 
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
          <TextField sx={{ 
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
        <Button type="submit" variant="contained" color="primary" disableRipple sx={{ 
        width: '8rem',
        borderRadius: '0.8rem',
        ':hover, :active, :focus': {
          bgcolor: 'secondary.main',
          color: '#ffffff',
        }
       }}>
          Submit
        </Button>
      </Container>
    </form>
  );
}

export default ContactForm;
