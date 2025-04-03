import mongoose from "mongoose";

const mongoURI = "mongodb+srv://andre:23042024Ma@cluster0.4pmdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Sua URL do MongoDB local

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI); 
    console.log("MongoDB conectado!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
