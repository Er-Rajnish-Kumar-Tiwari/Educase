const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const schoolRoutes = require('./Routes/schoolRoutes');

dotenv.config();
app.use(cors());
app.use(express.json());

app.use(schoolRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
