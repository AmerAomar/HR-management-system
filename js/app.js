function employee(fullname,Department,level,image,salary,employeeId){
    this.employeeId=0000;
    this.fullName=fullname;
    this.department=Department;
    this.level=level;
    this.image=image;
    this.salary=salary;
    
}



employee.prototype.calc=function(){
    let min;
    let max;
    if(this.level==="Senior")
    {
        min=1500;
        max=2000;
    }
    else if(this.level==="Mid-Senior")
    {
        min=1000;
        max=1500;
    }
    else if(this.level==="Junior")
    {
        min=500;
        max=1000
    }
    let ranSal;
    ranSal= Math.floor(Math.random() * (max - min )) + min;
    let taxSal;
    taxSal=ranSal - (ranSal * 0.075);
    this.salary=taxSal
    return taxSal;

}

employee.prototype.render = function() {
    const container = document.getElementById("employeecard");
    const divEl = document.createElement("div");
    container.appendChild(divEl);

    const imgEl = document.createElement("img");
    imgEl.src = this.image;
    
    divEl.appendChild(imgEl);

    const nameEl = document.createElement("p");
    nameEl.textContent = `Name: ${this.fullName} - ID: ${this.employeeId}`;
    divEl.appendChild(nameEl);

    const departmentEl = document.createElement("p");
    departmentEl.textContent = `Department: ${this.department} - Level: ${this.level}`;
    divEl.appendChild(departmentEl);

    const salaryEl = document.createElement("p");
    salaryEl.textContent = `Salary: ${this.salary}`;
    divEl.appendChild(salaryEl);
  };
    
/*let ghazi=new employee(1000,"Ghazi Samer","Administration","Senior","/home/amer/HR-management-system/assets/male.jpg",1500);
let lina= new employee(1001,"lina ali","Finance","Senior","/home/amer/HR-management-system/assets/female.jpg",1500);
let tamara= new employee(1002,"Tamara Ayoub","Marketing","Senior","/home/amer/HR-management-system/assets/female.jpg",1500);
let safi= new employee(1003,"Safi Walid","Administration","Mid-Senior","/home/amer/HR-management-system/assets/male.jpg",1000);
let omar= new employee(1004,"Omar Zaid","Development","Senior","/home/amer/HR-management-system/assets/male.jpg",1500);
let rana= new employee(1005,"Rana Saleh","Development","Junior","/home/amer/HR-management-system/assets/female.jpg",500);
let hadi= new employee(1006,"Hadi Ahmad","Finance","Mid-Senior","/home/amer/HR-management-system/assets/male.jpg",1000);
*/
/*ghazi.calc();
lina.calc();
tamara.calc();
safi.calc();
omar.calc();
rana.calc();
hadi.calc();
*/
/*
ghazi.render();
lina.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();
*/
/*********new**********/
let container = new Set();
let arr=[]; // create a container(array) to containe the rendom numbers
employee.prototype.generatId = function() {
    let min =1000;
    let max=9999;
    let ranId;
    ranId=Math.floor(Math.random() * (max - min )) + min;
    if(arr.includes(ranId))
    {
        ranId=Math.floor(Math.random() * (max - min )) + min;
    }
    else{
        this.employeeId=ranId
    }
    arr.push(ranId);
    return ranId;
  }





let employeeForm=document.getElementById("employeeForm");

employeeForm.addEventListener('submit',addNewEmployee)

function addNewEmployee(event){
    event.preventDefault();
    
    let fullname=event.target.fullname.value; // in this object(event) in the target(form) you have an input with the name (specific name) pls give me the value 
    //console.log(fullname);

    let department=document.getElementById("department");
    let selectedDepartment=department.value; 
    //console.log(selectedDepartment)
    let level=document.getElementById("level");
    let selectedLevel=level.value;
    //console.log(selectedLevel);
    let image=event.target.img.value;
   // console.log(image)


   let newEmployee = new employee(fullname, selectedDepartment, selectedLevel, image);
   newEmployee.calc();
   newEmployee.generatId();
   newEmployee.render();
   
}