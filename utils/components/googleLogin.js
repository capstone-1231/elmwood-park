import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "CLIENT_ID"; // replace later

const GoogleAuthLogin = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      scope="https://www.googleapis.com/auth/calendar"
    />
  );
};

export default GoogleAuthLogin;

import { google } from 'googleapis';

const getCalendarEvents = async (accessToken) => {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  try {
    const response = await calendar.events.list({
      calendarId: 'elmwoodparkclcalendar@gmail.com', 
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return response.data.items;
  } catch (error) {
    console.error('The API returned an error: ' + error);
    throw error;
  }
};