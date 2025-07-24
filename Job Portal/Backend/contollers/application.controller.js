

import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({ message: "Invalid job id", success: false});
        }
        // Check if the user already has applied for this job.
        const existingApplication = await Application.findOne({ 
            applicant: userId, 
            job: jobId, 
        });
        if (existingApplication) {
            return res
            .status(400)
            .json({ 
                message: "You have already applied for this job", 
                success: false,
            });
        }
        // check if the job exists or not.
        const job = await Job.findById(jobId);
        if (!job) {
            return res
            .status(404)
            .json({ message: "Job not found", success: false });
        }
        // Create a new application.
        const newApplication = await Application.create({
            applicant: userId,
            job: jobId,
        });
        job.applications.push(newApplication._id);
        await job.save();

        return res
        .status(201)
        .json({ message: "Application submitted", success: true, });
    } catch (error) { 
        console.error(error);
        res.status(500).json({ message: "Server Error", success: false, });     
    }
};

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId })
        .sort({ createdAt: -1 })
        .populate({ 
            path: "job", 
            options: { sort:{ createdAt:-1}},
            populate: { path: "company" }, options: { sort:{ createdAt:-1}},    
         });
         if(!application) {
            return res
            .status(404)
            .json({ message: "No applications found", success: false });
        }


        return res.status(200).json({ application, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", success: false, });     
    }
};


export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({ 
            path: "applications", 
            options: { sort: {created: -1 } },
            populate:{ path: "applicant", options: { sort: { created: -1} } },
    });
    if (!job) {
            return res.status(404).json({ message: "Job not found", success: false });
        }

        return res.status(200).json({ job, success: true });

}catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", success: false });
}
};

export const updateStatus = async (req, res) => {
    try {
        const applicationId = req.params.id;
        const { status } = req.body;
        if(!status) {
            return res
            .status(400)
            .json({ message: "Invalid status", success: false });
        }

        // find the application by applicant id.
        const application = await Application.findById({_id : applicationId });
        if(!application) {
            return res
           .status(404)
           .json({ message: "Application not found", success: false });
        }

        // update the status of the application.
        application.status = status.toLowerCase();
        await application.save();

        return res
        .status(200)
        .json({ message: "Application status updated", success: true });
}catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", success: false });

}}