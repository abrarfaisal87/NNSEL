import projects from "../db/projection.js";

export const getProjects = async (req, res) => {
  try {
    res.status(200).json(projects);
  } catch (error) {
    console.log("error in getProject", error.message);
    res.status(500).json({ msg: "error in internal server" });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = projects.find(p=>p.id===parseInt(req.params.id));
    if(project){
        res.json(project);
    }
    else {
        res.status(404).json({message:"no project found"})
    }
  } catch (error) {
    console.log("error in getProject", error.message);
    res.status(500).json({ msg: "error in internal server" });
  }
};
