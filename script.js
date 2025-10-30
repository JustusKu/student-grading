let Students = parseInt(prompt("Number of students"));
let studentName = prompt("Student name");
let marks = parseFloat(prompt("Student marks(1-100)%"));

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

    for(let i = 0; i < student.length; i++ ) {
        
        console.log(`Name: ${student[0].name} Marks: ${student[0].marks}`)
    }
