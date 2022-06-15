const dotenv = require('dotenv');
const path = require('path');
const app = require('./app');

dotenv.config({ path: path.join(__dirname, 'config.env') });
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});
