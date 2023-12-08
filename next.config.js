// IMPORTANT - comment out "output: 'export'," whenever you want to start a local server (localhost). if already commented out, leave it alone and go about your business - Pritam

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {  NEXT_PUBLIC_GOOGLE_MAPS_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY  }
}

module.exports = nextConfig
