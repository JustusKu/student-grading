// let Students = parseInt(prompt("Number of students"));
// let studentName = prompt("Student name");
// let marks = parseFloat(prompt("Student marks(1-100)%"));

// console.log("No. of Students:" + Students);
// console.log("Name:" + studentName);
// console.log("Marks:" + marks + "%");

let student = []
student.push({
    name: "John",
    marks: 82
},
{
    name: "Omar",
    marks: 48
},
{
    name: "Jessy",
    marks: 91 
},
{
    name: "Beth",
    marks: 71  
}
)
// console.log(student[1])

    for(let i = 0; i < student.length; i++ ) {
        
        console.log(`Name: ${student[i].name} Marks: ${student[i].marks}%`)
    }

    let sum = 0
    for(let i = 0; i < student.length; i++){ sum+= student[i].marks;}

    const average = sum/student.length;
    console.log(`Average Mark: ${average}%`)
    

