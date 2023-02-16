

const employeeData = JSON.parse(localStorage.getItem('employees'));


const departmentInfo = {};


employeeData.forEach(employee => {
	if (!departmentInfo[employee.department]) {
		departmentInfo[employee.department] = [];
	}
	departmentInfo[employee.department].push(employee);
});


const departmentTable = document.getElementById('department-table');
let totalEmployees = 0;
let totalSalary = 0;
for (const [department, employees] of Object.entries(departmentInfo)) {

	const numEmployees = employees.length;
	const totalDeptSalary = employees.reduce((acc, cur) => acc + cur.salary, 0);
	const avgDeptSalary = totalDeptSalary / numEmployees;


	const row = document.createElement('tr');
	row.innerHTML = `
				<td>${department}</td>
				<td>${numEmployees}</td>
				<td>${totalDeptSalary.toFixed(2)}</td>
				<td>${avgDeptSalary.toFixed(2)}</td>
			`;
	departmentTable.appendChild(row);


	totalEmployees += numEmployees;
	totalSalary += totalDeptSalary;
}


let avgSalary = totalSalary / totalEmployees;


