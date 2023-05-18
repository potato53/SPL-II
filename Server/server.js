
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const userRoute = require("./routes/Users")
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
const userRoutes = require('./routes/user');
const addproductroute = require('./routes/addproduct');
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");

dotenv.config();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

/* Creating a REST API (Some Endpoints) */
// app.get("/api/test", ()=> {
//     console.log("test is successful");
// }); 

app.use(cors());
app.use(express.json());
// app.use("/api/users", userRoute);   // whenever we go to "/api/users" our application will use userRoute 
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/user", userRoutes)
app.use("/api/Addition", addproductroute)
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })