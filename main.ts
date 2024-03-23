import inquirer from "inquirer";

class student {
    Name:string
    constructor(n:string){
        this.Name=n;
    }
}


class Person {
    students:student[] = [];

    addstudent(obj: student){
        this.students.push(obj);
    }
}

const persons = new Person();

const programstart = async(persons:Person) =>{
    let exit = false
    do{
        console.log("Welcome Teacher");

    const ans = await inquirer.prompt({
        type:"list",
        message:"can we help you...",
        name:"select",
        choices:["Self", "Student","Exit"],
    });
    if(ans.select == "Exit"){
        exit = true
    }
   

    if(ans.select == "Self"){
        console.log("Hello I Am Talking With Me")
        console.log("I Am Fine Thank You, My Name Is Haider Ali")
    }
    if(ans.select == "student"){
        const ans = await inquirer.prompt({
            type:"input",
            message:"with which student you want to talk",
            name: "student",
        });
       

        const student1 = persons.students.find((val) => val.Name == ans.student);

        if (!student) {
              const name = new student(ans.student);
            // student(ans.student);
            persons.addstudent(name);

            console.log(`Hello I Am ${name}, I Am Fine Thankyou`);
            console.log(persons.students);
        }
        if (student){
            console.log(`Hello I Am ${student.name}, How Are You Teacher?.`);
            console.log(persons.students);
        }

    }
    }while(!exit)
};

programstart(persons)


