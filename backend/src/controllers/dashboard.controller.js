import projects from "../db/projection.js";

export const addProject = async (req, res) => {
  try {
    const newProject = {
      id: projects.lenght + 1,
      //pictures : req.body.pictures
      details: req.body.details,
      technology: req.body.technology,
    };
    projects.push(newProject);
    res.status(201).json({ msg: "project added successfully" });
  } catch (error) {
    console.log("error in add project controller");
    res.status(500).json("internal server error");
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = projects.find((p) => p.id === parseInt(req.params.id));
    if (project) {
      project.details = req.body.details || project.details;
      project.technology = req.body.technology || project.technology;
      res.json(project);
    } else {
      res.status(404).json({ msg: "project not found" });
    }
  } catch (error) {
    console.log("error in update project controller");
    res.status(500).json("internal server error");
  }
};

export const deleteProject = async (req, res) => {
  try {
    const projectIndex = projects.findIndex((p) => p.id === parseInt(req.params.id));
    if(projectIndex !== -1){
        projects.splice(projectIndex,1);
        res.status(201).json({msg:"project deleted successfully"})
    }
    else{
        res.status(404).json({msg:"project not found"});
    }
  } catch (error) {
    console.log("error in  delete project controller");
    res.status(500).json("internal server error");
  }
};
