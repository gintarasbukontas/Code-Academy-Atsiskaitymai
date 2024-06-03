import mongoose from "mongoose";

const companyProfileSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  founder: String,
  foundedYear: Number,
  numberOfEmployees: Number,
});

export default mongoose.model("CompanyProfile", companyProfileSchema);
