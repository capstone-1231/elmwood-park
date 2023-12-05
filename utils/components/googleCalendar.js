import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function GoogleCalendar() {
    const [iframeHeight, setIframeHeight] = useState('600px');
    const [containerMargin, setContainerMargin] = useState('-6rem 0 0 -1rem');

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth;

            if (width > 768) {
                setIframeHeight('600px');
                setContainerMargin('-6rem 0 0 -1rem');
            } else if (width <= 416) {
                setIframeHeight('300px');
                setContainerMargin('-7rem 0 0 -1rem');
            } else {
                setIframeHeight('300px');
                setContainerMargin('-6rem 0 0 -1rem');
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div>
            <Typography variant="h2" align="center" paddingBottom="1rem">
                Event Calendar
            </Typography>
            <iframe
                src="https://embed.styledcalendar.com/#xy6J2PJVzOa54qOGFChx"
                title="Styled Calendar"
                className="styled-calendar-container"
                style={{ width: '100%', marginBottom: '2rem' }}
                data-cy="calendar-embed-iframe"
            ></iframe>
            <Container
                sx={{
                    backgroundColor: '#FFFFF2',
                    height: '5rem',
                    zIndex: '1',
                    margin: containerMargin,
                    position: 'absolute',
                    width: '97%',
                    paddingBottom: '2rem',
                }}
            >
            </Container>
            <script
                async
                type="module"
                src="https://embed.styledcalendar.com/assets/parent-window.js"
            ></script>
        </div>
    );
}
