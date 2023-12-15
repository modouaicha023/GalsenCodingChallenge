/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts'],
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: { ssr: true, },
    }
}

module.exports = nextConfig
