function employee(emId,fullname,Department,level,image,salary){
    this.employeeId=emId;
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
    this.salary=ranSal - (ranSal * 0.075);
    return taxSal;

}

employee.prototype.render = function() {
    let employeeElement = document.createElement('div');
    employeeElement.classList.add('employee');
    employeeElement.innerHTML = `Employee name is: ${this.fullName} and the salary is: ${this.salary}`;
    document.body.appendChild(employeeElement);
 }
  

let ghazi=new employee(1000,"Ghazi Samer","Administration","Senior","/home/amer/HR-management-system/assets/male.jpg",1500);
let lina= new employee(1001,"lina ali","Finance","Senior","/home/amer/HR-management-system/assets/female.jpg",1500);
let tamara= new employee(1002,"Tamara Ayoub","Marketing","Senior","/home/amer/HR-management-system/assets/female.jpg",1500);
let safi= new employee(1003,"Safi Walid","Administration","Mid-Senior","/home/amer/HR-management-system/assets/male.jpg",1000);
let omar= new employee(1004,"Omar Zaid","Development","Senior","/home/amer/HR-management-system/assets/male.jpg",1500);
let rana= new employee(1005,"Rana Saleh","Development","Junior","/home/amer/HR-management-system/assets/female.jpg",500);
let hadi= new employee(1006,"Hadi Ahmad","Finance","Mid-Senior","/home/amer/HR-management-system/assets/male.jpg",1000);
ghazi.calc();
lina.calc();
tamara.calc();
safi.calc();
omar.calc();
rana.calc();
hadi.calc();

ghazi.render();
lina.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();