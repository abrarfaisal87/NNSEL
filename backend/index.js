import express from 'express';
import projectRoutes from './src/routes/projects.route.js'
import dashboardRoutes from './src/routes/dashboard.route.js'

const app = express();
const PORT = 3000;
app.use(express.json());


//routes
app.use("/projects",projectRoutes)
app.use("/dashboard",dashboardRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});