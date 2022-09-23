import App from './App';

const APP_PORT = process.env.PORT || process.env.APP_PORT;
const { APP_BASE_URL } = process.env;

App.listen(APP_PORT, () => {
  console.log(`server running on:${APP_BASE_URL}:${APP_PORT}`);
});
