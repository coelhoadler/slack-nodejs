require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const { SLACK_TOKEN: token, CHANNEL_ID: channel } = process.env;
const web = new WebClient(token);

(async () => {
    try {
        // Post a message to the channel, and await the result.
        // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
        for (let index = 0; index < 2; index++) {

            const result = await web.chat.postMessage({
                text: `[Node] Hello world ${index} at ${new Date().getTime()} timestamp`,
                channel,
            });

            // The result contains an identifier for the message, `ts`.
            console.log(`Successfully send message ${result.ts} in conversation ${channel}`);
        }

    } catch ($x) {
        console.log(`Error: ${$x}`)
    }
})();