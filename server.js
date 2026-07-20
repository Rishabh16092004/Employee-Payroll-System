const express = require("express");
const fileHandler = require("./modules/fileHandler");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


// HOME PAGE
app.get("/", async (req, res) => {
    const employees = await fileHandler.readEmployees();
    res.render("index", { employees });
});


// ADD PAGE OPEN
app.get("/add", (req, res) => {
    res.render("add");
});


// ADD EMPLOYEE
app.post("/add", async (req, res) => {

    const employees = await fileHandler.readEmployees();

    const newEmployee = {
        id: Date.now(),
        name: req.body.name,
        gender: req.body.gender,
        department: req.body.department,
        salary: req.body.salary,
        startDate: req.body.startDate,
        profileImage: req.body.profileImage
    };

    employees.push(newEmployee);

    await fileHandler.writeEmployees(employees);

    res.redirect("/");
});

// EDIT ACTION
app.get("/edit/:id", async (req, res) => {

    const id = Number(req.params.id);
    const employees = await fileHandler.readEmployees();

    const employee = employees.find(emp => emp.id === id);

    res.render("edit", { employee });
});
app.post("/edit/:id", async (req, res) => {

    const id = Number(req.params.id);
    const employees = await fileHandler.readEmployees();

    const index = employees.findIndex(emp => emp.id === id);

    employees[index] = {
        id,
        ...req.body
    };

    await fileHandler.writeEmployees(employees);

    res.redirect("/");
});


// DELETE ACTION
app.get("/delete/:id", async (req, res) => {

    const id = Number(req.params.id);
    let employees = await fileHandler.readEmployees();

    employees = employees.filter(emp => emp.id !== id);

    await fileHandler.writeEmployees(employees);

    res.redirect("/");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
});
