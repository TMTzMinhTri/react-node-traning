if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
}
else {
    module.exports =require('./dev')
}

// module.exports = {
//     googleClientID: "394911232807-pg2m5fpprqbg1c7n2i4gu2d92atfus6e.apps.googleusercontent.com",
//     googleClientSecret: "UYoqaDYtIK47uM-r8jsjvWYJ",
//     mongoURI : "mongodb+srv://tranminhtri:tranminhtri@projectfullstack-hmkii.mongodb.net/test?retryWrites=true",
//     cookieKey: "afjhasdfuashdfusdhfslfsd"  
// }