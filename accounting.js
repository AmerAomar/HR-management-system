let employeeData = JSON.parse(localStorage.getItem('employees'));

let departmentInfo = {};

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

// Create table footer
const footerRow = document.createElement('tr');
footerRow.innerHTML = `
	<td><strong>Total</strong></td>
	<td><strong>${totalEmployees}</strong></td>
	<td><strong>${totalSalary.toFixed(2)}</strong></td>
	<td><strong>${avgSalary.toFixed(2)}</strong></td>
`;
departmentTable.appendChild(footerRow);
