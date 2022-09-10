import App from './App';

const APP_PORT = 5000;
const APP_BASE_URL = 'http://localhost';

App.listen(APP_PORT, () => {
  console.log(`Servidor rodando em:${APP_BASE_URL}:${APP_PORT}`);
});
