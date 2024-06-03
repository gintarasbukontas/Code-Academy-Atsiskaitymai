import CompanyProfile from "../models/CompanyProfile.js";
import Company from "../models/Company.js";

export async function addCompanyProfile(req, res) {
  const { companyId, founder, foundedYear, numberOfEmployees } = req.body;

  if (!companyId || !founder || !foundedYear || !numberOfEmployees) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  if (typeof companyId !== "string") {
    res.status(400).json({ error: "companyId is not a string" });
    return;
  }

  if (typeof founder !== "string") {
    res.status(400).json({ error: "founder is not a string" });
    return;
  }

  if (typeof foundedYear !== "number") {
    res.status(400).json({ error: "foundedYear is not a number" });
    return;
  }

  if (typeof numberOfEmployees !== "number") {
    res.status(400).json({ error: "numberOfEmployees is not a number" });
    return;
  }

  try {
    const company = await Company.findById(companyId);

    if (company) {
      const newCompanyProfile = new CompanyProfile({
        companyId,
        founder,
        foundedYear,
        numberOfEmployees,
      });

      company.profileId = newCompanyProfile;

      await newCompanyProfile.save();

      await company.save();

      res.json(newCompanyProfile);
    } else {
      res.status(404).json({ error: "Company not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCompanyProfiles(req, res) {
  try {
    const companyProfiles = await CompanyProfile.find();

    if (companyProfiles.length > 0) {
      res.json(companyProfiles);
    } else {
      res.status(404).json({ error: "No company profiles found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateCompanyProfile(req, res) {
  const { id } = req.params;
  const { founder, foundedYear, numberOfEmployees } = req.body;

  if (!founder && !foundedYear && !numberOfEmployees) {
    res.status(400).json({ error: "No valid information in Body" });
    return;
  }

  try {
    const companyProfile = await CompanyProfile.findById(id);

    if (companyProfile) {
      if (founder && typeof founder === "string") {
        companyProfile.founder = founder;
      } else {
        res.status(400).json({ error: "founder is not a string" });
        return;
      }

      if (foundedYear && typeof foundedYear === "number") {
        companyProfile.foundedYear = foundedYear;
      } else {
        res.status(400).json({ error: "foundedYear is not a number" });
        return;
      }

      if (numberOfEmployees && typeof numberOfEmployees === "number") {
        companyProfile.numberOfEmployees = numberOfEmployees;
      } else {
        res.status(400).json({ error: "numberOfEmployees is not a number" });
        return;
      }

      await companyProfile.save();

      res.json(companyProfile);
    } else {
      res.status(404).json({ error: "Company Profile not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
