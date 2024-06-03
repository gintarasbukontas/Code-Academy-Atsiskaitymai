import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: String,
  industry: String,
  location: String,
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CompanyProfile",
  },
});

export default mongoose.model("Company", companySchema);
