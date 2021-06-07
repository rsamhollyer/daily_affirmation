require('dotenv').config();
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.command('/knowledge', async ({ command, ack, say }) => {
  try {
    await ack();
    say('Yaaay! that command works!');
  } catch (error) {
    console.log('err');
    console.error(error);
  }
});
app.message('hey', async ({ command, say }) => {
  try {
    say('Yaaay! that command works!');
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
