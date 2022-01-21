const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://radhakant:mongotest@mongo-29-12-21.iblaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection Done !!!");
  })
  .catch((e) => {
    console.log("Not connected");
  });
