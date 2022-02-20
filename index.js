// const connection = require('./config/db');
const sequelize = require('./config/db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({ extended: true }));
app.use('/api/products', require('./routes/products'));

app.listen(PORT, () => {
  console.log(`Puerto ${PORT}`);
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('DB connection successfuly');
    })
    .catch((error) => {
      console.log(error);
    });
});
