const mongoose = require("mongoose");

const connectDatabase = () => {
  const DB_URI = process.env.DB_URI;
  mongoose
    .connect(`${DB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host} `);
    })
    .catch((err) => {
      console.log(err);
    });

  // mongoose
  // .connect(process.env.DB_URL, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useCreateIndex: true,
  // })
  //   .then((data) => {
  //     console.log(`MongoDB connected with server: ${data.connection.host}`);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

module.exports = connectDatabase;
