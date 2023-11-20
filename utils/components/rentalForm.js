import React, { useState } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert'
import ButtonGroup from '@mui/material/ButtonGroup'

import emailjs from 'emailjs-com';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const NameFlexContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
});

const RentalForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
    spaceType: '',
    date: null,
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceID = 'service_8k1v5ot';
    const userID = 'w9dPXJSZ_AucFEwRs';
    const templateID = 'template_q2wxbw1';

    try {
      const response = await emailjs.send(serviceID, templateID, {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        message: formData.message,
        spaceType: formData.spaceType,
        date: formData.date
      }, userID);

      console.log('Email sent successfully:', response);

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
        spaceType: '',
        date: null
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }
  };

  const handleButtonClick = (value) => {
    setFormData({
      ...formData,
      spaceType: value,
    });
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const currentDate = dayjs();

  const handleDateChange = (date) => {
    if (dayjs(date).isAfter(dayjs(), 'day')) {
      setFormData({
        ...formData,
        date: date,
      });
    } else {
      console.error('Selected date is not valid.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          width: { xs: '90%', sm: '90%', md: '90%', lg: '40%', xl: '40%' },
          gap: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <NameFlexContainer sx={{ flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" } }}>
          <TextField
            sx={{
              flexGrow: '1',
              background: '#ffffff',
              '& label.Mui-focused': {
                color: '#50891e',
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#50891e',
                },
              },
            }}
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            InputProps={{
              sx: {
                borderRadius: '0.8rem',
              },
            }}
          />
          <TextField
            sx={{
              flexGrow: '1',
              background: '#ffffff',
              '& label.Mui-focused': {
                color: '#50891e',
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#50891e',
                },
              },
            }}
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            InputProps={{
              sx: {
                borderRadius: '0.8rem',
              },
            }}
          />
        </NameFlexContainer>
        <TextField
          sx={{
            background: '#ffffff',
            '& label.Mui-focused': {
              color: '#50891e',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#50891e',
              },
            },
          }}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          InputProps={{
            sx: {
              borderRadius: '0.8rem',
            },
          }}
        />
        <TextField
          sx={{
            background: '#ffffff',
            '& label.Mui-focused': {
              color: '#50891e',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#50891e',
              },
            },
          }}
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          InputProps={{
            sx: {
              borderRadius: '0.8rem',
            },
          }}
        />
        <TextField
          sx={{
            background: '#ffffff',
            '& label.Mui-focused': {
              color: '#50891e',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#50891e',
              },
            },
          }}
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          InputProps={{
            sx: {
              borderRadius: '0.8rem',
            },
          }}
        />

        <InputLabel htmlFor="space-type" sx={{ paddingLeft: '0.5rem' }}>
          Space Type
        </InputLabel>
        <ButtonGroup sx={{
            display: 'flex',
            flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
            justifyContent: 'center',
            width: '100%'
          }}>
          <Button
            variant={formData.spaceType === 'Den' ? 'contained' : 'outlined'}
            onClick={() => handleButtonClick('Den')}
            sx={{
              flexGrow: 1,
              color: formData.spaceType === 'Den' ? '#FFFFFF' : '#302400',
              padding: '0.5rem 1rem',
              width: { xs: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" },
              bgcolor: formData.spaceType === 'Den' ? '#50891e' : '#FFFFFF',
              border: '1px solid #302400',
              fontSize: '0.8rem',
              '&:hover': {
                bgcolor: '#50891e',
                color: '#FFFFFF'
              },
            }}
          >
            Den
          </Button>
          <Button
            variant={formData.spaceType === 'Board Room' ? 'contained' : 'outlined'}
            onClick={() => handleButtonClick('Board Room')}
            sx={{
              flexGrow: 1,
              color: formData.spaceType === 'Board Room' ? '#FFFFFF' : '#302400',
              padding: '0.5rem 1rem',
              width: { xs: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" },
              bgcolor: formData.spaceType === 'Board Room' ? '#50891e' : '#FFFFFF',
              border: '1px solid #302400',
              fontSize: '0.8rem',
              '&:hover': {
                bgcolor: '#50891e',
                color: '#FFFFFF'
              },
            }}
          >
            Board Room
          </Button>
          <Button
            variant={formData.spaceType === 'Green Space' ? 'contained' : 'outlined'}
            onClick={() => handleButtonClick('Green Space')}
            sx={{
              flexGrow: 1,
              color: formData.spaceType === 'Green Space' ? '#FFFFFF' : '#302400',
              padding: '0.5rem 1rem',
              width: { xs: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" },
              bgcolor: formData.spaceType === 'Green Space' ? '#50891e' : '#FFFFFF',
              border: '1px solid #302400',
              fontSize: '0.8rem',
              '&:hover': {
                bgcolor: '#50891e',
                color: '#FFFFFF'
              },
            }}
          >
            Green Space
          </Button>
          <Button
            variant={formData.spaceType === 'Den & Green Space' ? 'contained' : 'outlined'}
            onClick={() => handleButtonClick('Den & Green Space')}
            sx={{
              flexGrow: 1,
              color: formData.spaceType === 'Den & Green Space' ? '#FFFFFF' : '#302400',
              padding: '0.5rem 1rem',
              width: { xs: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" },
              bgcolor: formData.spaceType === 'Den & Green Space' ? '#50891e' : '#FFFFFF',
              border: '1px solid #302400',
              fontSize: '0.8rem',
              '&:hover': {
                bgcolor: '#50891e',
                color: '#FFFFFF'
              },
            }}
          >
            Den & Green Space
          </Button>
          <Button
            variant={formData.spaceType === 'Board & Green Space' ? 'contained' : 'outlined'}
            onClick={() => handleButtonClick('Board & Green Space')}
            sx={{
              flexGrow: 1,
              color: formData.spaceType === 'Board & Green Space' ? '#FFFFFF' : '#302400',
              padding: '0.5rem 1rem',
              width: { xs: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" },
              bgcolor: formData.spaceType === 'Board & Green Space' ? '#50891e' : '#FFFFFF',
              border: '1px solid #302400',
              fontSize: '0.8rem',
              '&:hover': {
                bgcolor: '#50891e',
                color: '#FFFFFF'
              },
            }}
          >
            Board & Green Space
          </Button>
        </ButtonGroup>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              flexGrow: '1',
              background: '#ffffff',
              '& label.Mui-focused': {
                color: '#50891e',
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#50891e',
                },
              },
            }}
            label="Choose a Date"
            name="date"
            value={formData.date}
            minDate={currentDate}
            onChange={handleDateChange}
            InputProps={{
              sx: {
                borderRadius: '0.8rem',
              },
            }}
          />
        </LocalizationProvider>

        {submitStatus === 'success' && (
          <Alert variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', color: 'green' }}>
            Thank you for your submission!
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

export default RentalForm;
