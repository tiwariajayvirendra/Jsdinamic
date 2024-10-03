
function Employees(Name, Age , Salary, FName, MName,Otherde ,BName  ){
    this.name=Name;
    this.age=Age;
    this.salary= Salary;
    this.fname=FName;
    this.mname=MName;
    this.otherde=Otherde;
    this.bname=BName;
    

}


let emp1=new Employees("Ajay",28,2500000,["Virendra", "Ramji","Tiwari"],
    function(){console.log("Manju");
},

{
    ismarried:true,
    hometown:"Gorakhpur"
},

"Deepu Tiwari");

let emp2=new Employees("Nischal",20, 2500000,["Ramu", "Pandey"], function(){console.log("Susma","Pandey");
},

{
    ismarried:false,
    hometown:"Gorakhpur"
},

"Anamika");


console.log(emp1,"------------------SECOND--------------------- ",emp2);
// console.log(emp2);
""