let express = require("express");
let linebot = require("linebot");

const app = express()
// webhook configuration
let bot = linebot({
    channelId: 'Line Bot Channel ID',
    channelSecret: 'Line Bot Channel Secret',
    channelAccessToken: 'Line Bot Access Token'
});

// connect with line server
const linebotParser = bot.parser();
app.post('/webhook', linebotParser);

// when webhook server receive  message, run callback function.
bot.on('message', function(event) {
    console.log(event); 
});

let server = app.listen(process.env.PORT || 3000, function(){
    let port = server.address().port;
    console.log("Webhook server is running on port " + port);
});
