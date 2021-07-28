const axios = require("axios");
const URL = process.env.SLACK_URL;
const slackToken = process.env.SLACK_BOT_TOKEN;

exports.sendNotificationToBotty = async (channel) => {
    try {
    
        const res = await axios.post( URL, {
            channel: channel,
            "attachments": [
                {
                    "fallback": "Plain-text summary of the attachment.",
                    "color": "#2eb886",
                    "pretext": "Optional text that appears above the attachment block",
                    "author_name": "Bobby Tables",
                    "author_link": "http://flickr.com/bobby/",
                    "author_icon": "http://flickr.com/icons/bobby.jpg",
                    "title": "Slack API Documentation",
                    "title_link": "https://api.slack.com/",
                    "text": "Optional text that appears within the attachment",
                    "fields": [
                        {
                            "title": "Priority",
                            "value": "High",
                            "short": false
                        }
                    ],
                    "image_url": "http://my-website.com/path/to/image.jpg",
                    "thumb_url": "http://example.com/path/to/thumb.png",
                    "footer": "Slack API",
                    "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                    "ts": 123456789
                }
            ]
          }, { headers: { authorization: `Bearer ${slackToken}` } });
        
        //   console.log(res.data);
        return res.data;
        
    } catch (err) {
        console.log(err);
    }
};