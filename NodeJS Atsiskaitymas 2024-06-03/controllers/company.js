import Company from "../models/Company.js";

export async function addCompany(req, res) {
  const { name, industry, location } = req.body;

  if (!name || !industry || !location) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  if (typeof name !== "string") {
    res.status(400).json({ error: "name is not a string" });
    return;
  }

  if (typeof industry !== "string") {
    res.status(400).json({ error: "industry is not a string" });
    return;
  }

  if (typeof location !== "string") {
    res.status(400).json({ error: "location is not a string" });
    return;
  }

  try {
    const newCompany = new Company({
      name,
      industry,
      location,
    });

    await newCompany.save();

    res.json(newCompany);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCompanies(req, res) {
  try {
    const companies = await Company.find();

    if (companies.length > 0) {
      res.json(companies);
    } else {
      res.status(404).json({ error: "No companies found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCompanyById(req, res) {
  const { id } = req.params;

  const found = await Company.findById(id);

  try {
    if (found) {
      const company = await Company.findById(id).populate("profileId");

      res.json(company);
    } else {
      res.status(404).json({ error: "Company by this ID not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateCompany(req, res) {
  const { id } = req.params;
  const { name, industry, location } = req.body;

  if (!name && !industry && !location) {
    res.status(400).json({ error: "No valid information in Body" });
    return;
  }

  try {
    const company = await Company.findById(id);

    if (company) {
      if (name && typeof name === "string") {
        company.name = name;
      } else {
        res.status(400).json({ error: "name is not a string" });
        return;
      }

      if (industry && typeof industry === "string") {
        company.industry = industry;
      } else {
        res.status(400).json({ error: "industry is not a string" });
        return;
      }

      if (location && typeof location === "string") {
        company.location = location;
      } else {
        res.status(400).json({ error: "location is not a string" });
        return;
      }

      await company.save();

      res.json(company);
    } else {
      res.status(404).json({ error: "Company by this ID not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
