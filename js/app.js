'use strict';
let employeeArr = [];

function Employee(fullname, department, level, image) {
    this.employeeId = null;
    this.fullName = fullname;
    this.department = department;
    this.level = level;
    this.image = image;
}

Employee.prototype.calc = function () {
    let min;
    let max;
    if (this.level === "Senior") {
        min = 1500;
        max = 2000;
    } else if (this.level === "Mid-Senior") {
        min = 1000;
        max = 1500;
    } else if (this.level === "Junior") {
        min = 500;
        max = 1000;
    }
    let ranSal = Math.floor(Math.random() * (max - min)) + min;
    let taxSal = ranSal - ranSal * 0.075;
    this.salary = taxSal;
    return taxSal;
};

Employee.prototype.generateId = function () {
    let id = null;
    while (!id) {
        let candidateId = Math.floor(Math.random() * 9000) + 1000;
        if (!employeeArr.find(emp => emp.employeeId === candidateId)) {
            id = candidateId;
        }
    }
    this.employeeId = id;
};

function render() {
    const container = document.getElementById("employeecard");
    console.log(container);
    container.innerHTML = "";

    for (let i = 0; i < employeeArr.length; i++) {
        const divEl = document.createElement("div");
        const imgEl = document.createElement("img");
        imgEl.src = employeeArr[i].image;
        divEl.appendChild(imgEl);

        const nameEl = document.createElement("p");
        nameEl.textContent = `Name: ${employeeArr[i].fullName} - ID: ${employeeArr[i].employeeId}`;
        divEl.appendChild(nameEl);

        const departmentEl = document.createElement("p");
        departmentEl.textContent = `Department: ${employeeArr[i].department} - Level: ${employeeArr[i].level}`;
        divEl.appendChild(departmentEl);

        const salaryEl = document.createElement("p");
        salaryEl.textContent = `Salary: ${employeeArr[i].salary}`;
        divEl.appendChild(salaryEl);

        container.appendChild(divEl);
    }
}

function addNewEmployee(event) {
    event.preventDefault();

    const fullname = event.target.fullname.value;
    const selectedDepartment = document.getElementById("department").value;
    const selectedLevel = document.getElementById("level").value;
    const image = event.target.img.value;

    const newEmployee = new Employee(fullname, selectedDepartment, selectedLevel, image);
    newEmployee.calc();
    newEmployee.generateId();
    employeeArr.push(newEmployee);

    localStorage.setItem("employees", JSON.stringify(employeeArr));
    render();
}

function check() {
    let storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
        employeeArr = JSON.parse(storedEmployees);
    }
    render();
}

const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener("submit", addNewEmployee);

check();