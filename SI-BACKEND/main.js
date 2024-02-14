// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const productController = require('./controllers/ProductController');
// const operationManagerController = require('./controllers/operationManagerController');
// const reportController = require('./controllers/reportController');
// const requestRoutes = require('./routes/requestRoutes'); 
// const productRoutes = require('./routes/productRoutes'); 
// const reportRoutes = require('./routes/reportRoutes'); 



// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// Routes
// app.use('/api/products', productRoutes);
// app.use('/api', operationManagerController);
// app.use('/api/getReport', reportRoutes);
// app.use('/api/operation-manager/requests', requestRoutes); 
// app.use('/api/getRequestReports', reportRoutes); 

// const PORT = 3000;

// app.listen(PORT, () => {
//     mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//             console.log(`Listening on port ${PORT}`);
//         })
//         .catch(err => console.log("Couldn't connect to MongoDB:", err));
// });
  