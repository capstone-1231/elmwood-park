import React, { useState } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
    console.log(formData);
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
        <NameFlexContainer>
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
        <NameFlexContainer>
          <Select
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
            labelId="space-type"
            label="Space Type"
            name="spaceType"
            value={formData.spaceType}
            onChange={handleInputChange}
            required
            InputProps={{
              sx: {
                borderRadius: '0.8rem',
              },
            }}
          >
            <MenuItem value="Den">Den</MenuItem>
            <MenuItem value="Board Room">Board Room</MenuItem>
            <MenuItem value="Green Space">Green Space</MenuItem>
            <MenuItem value="Den & Green Space">Den & Green Space</MenuItem>
            <MenuItem value="Board & Greenspace">Board & Greenspace</MenuItem>
          </Select>
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
              onChange={handleDateChange}
              InputProps={{
                sx: {
                  borderRadius: '0.8rem',
                },
              }}
            />
          </LocalizationProvider>
        </NameFlexContainer>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableRipple
          sx={{
            width: '8rem',
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
