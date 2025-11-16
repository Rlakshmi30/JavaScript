const student = {
    name: "Vivan Thakur",
    age: 20,
    cgpa: 7.98,
    isPassed: false
    // Here name,age cgpa and ispassed are keys

};
student["age"] = student["age"] + 2;
student["name"] = " Shingar singh";
console.log(student);
console.log(typeof student);
console.log(student["cgpa"]);
console.log(student.age);

/* we can call asingle key from console 
 by student[key]*/


