import React, { useState, useEffect } from 'react';

export default function GoogleCalendar() {
    const [iframeHeight, setIframeHeight] = useState('600px');

    useEffect(() => {
        const updateHeight = () => {
            const width = window.innerWidth;
            if (width > 768) {
                setIframeHeight('600px');
            } else {
                setIframeHeight('300px');
            }
        };


        updateHeight();
        window.addEventListener('resize', updateHeight);


        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23d9e2b5&ctz=America%2FEdmonton&showTitle=0&showTz=0&showCalendars=0&showPrint=0&showTabs=1&showDate=1&showNav=1&src=ZWxtd29vZHBhcmtjbGNhbGVuZGFyQGdtYWlsLmNvbQ&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
            style={{
                display: 'block',
                margin: '0 auto',
                width: '90%',
                height: iframeHeight,
                border: 'none',
            }}
        />
    );
}

