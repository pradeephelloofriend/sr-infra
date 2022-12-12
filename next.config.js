module.exports = {
    modules: true,
    
    swcMinify: false,
    images: {
        //domains: ['localhost'],
        deviceSizes: [320, 420, 768, 1024, 1200],
        loader: "default",
        domains: ["res.cloudinary.com","speedtrack.co.in"],

    },
    env:{
        //API_PATH:"http://localhost:1337",
       // API_MAIL_PATH:"https://speedtrack.co.in/wp-snova/wp-json/wp/v2",

        API_PATH:"https://speedtrack.co.in/wp-sr/wp-json/wp/v2",
        GQL_API_PATH:'https://speedtrack.co.in/wp-sr/graphql',
        JWT_TOKEN:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1NzU1ODkxNCwiZXhwIjoxODE1MjM4OTE0fQ.kg71BT59KvKXpk6w0i-rBdx_At1NQWthSgmyXieYjiA',
    },
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',

    async redirects() {
        return [
            {
                source: '/logout',
                destination: '/',
                permanent: true,
            },
            {
                source: '/webmail',
                destination: 'https://webmail.agnelz.in/',
                permanent: true
              }
            // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
            /*{
                source: '/old-blog/:slug',
                destination: '/news/:slug',
                permanent: false,
            },
            // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
            {
                source: '/blog/:slug*',
                destination: '/news/:slug*',
                permanent: false,
            },
            // Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
            {
                source: '/post/:slug(\\d{1,})',
                destination: '/news/:slug',
                permanent: false,
            },*/
        ]
    },
}