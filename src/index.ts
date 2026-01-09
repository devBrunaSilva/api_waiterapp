import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express(); 
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
