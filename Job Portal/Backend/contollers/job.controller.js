
import { Job } from "../models/job.model.js";

// Admin job posting.
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      companyId,
      experience,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !companyId ||
      !experience ||
      !jobType ||
      !position ||
      !location
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", status: false });
    }

    const job = await Job.create ({
      title,
      description,
      requirements: requirements.split(","),
      salary,
      location,
      jobType,
      position,
      company: companyId,
      experience: Number(experience),
      created_by: userId,
    });
    return res
    .status(201)
    .json({ message: "Job posted successfully", status: true,job });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", status: false });
  }
};

//Users :
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query ={
        $or: [
            { title: { $regex: keyword, $options: "i"} },
            { description: { $regex: keyword, $options: "i"} },
        ],
    };
    const jobs = await Job.find(query).populate({
        path: "company",
    }).sort({createdAt:-1});
    if(!jobs){
        return res.status(404).json({ message: "No jobs found", status: false });
    }
    return res.status(200).json({ jobs, status: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error", status: false });
    }
};

//Users :
export const getJobId = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
          path: "applications",
        });
        console.log("Job fetched:", job);
        
        if (!job){
        return res.status(404).json({ message: "Job not found", status: false });
        }
        return res.status(200).json({ job, status: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error", status: false });
    }
};

// Admin job created

export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId });
        if (!jobs) {
            return res.status(404).json({ message: "No jobs found", status: false });
        }
        return res.status(200).json({ jobs, status:true});
    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error", status: false });
    }
};
