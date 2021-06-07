require('dotenv').config();
const { App } = require('@slack/bolt');
const instance = require('./config');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.command('/affirm', async ({ command, ack, say }) => {
  try {
    const {
      data: { affirmation },
    } = await instance();

    await ack();

    say(`${affirmation}`);
  } catch (error) {
    console.log('err');
    console.error(error);
  }
});

app.message(/affirm/, async ({ command, say }) => {
  try {
    const {
      data: { affirmation },
    } = await instance();
    say(`${affirmation}`);
  } catch (error) {
    console.log('err');
    console.error(error);
  }
});

(async () => {
  const port = 5633;
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();
