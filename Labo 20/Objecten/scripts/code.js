const setup = () => {
    let student = {};
    student.firstname = "John";
    student.lastName = "Doe";
    student.age = new Date(2000, 1, 1);
    student.eyeColor = "Blue";


    console.log(student.firstname)


    let student1 = {
        firstname: "John",
        lastName: "Doe",
        age: new Date(2000, 1, 0, 10, 30),
        eyeColor: "Blue"
    };

    console.log(student1.firstname);

    console.log(JSON.stringify(student1));

    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address: {
            zipCode: 8500,
            city: "Kortrijk"
        }
    };
    let tekst = JSON.stringify(student);
    console.log(tekst);

    tekst = JSON.stringify(student2);
    console.log(tekst);

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
// omzetten script-object naar een JSON-object
    tekst = JSON.stringify(students);

    console.log(tekst);
// omzetten JSON-object naar script-object
    tekstJS = JSON.parse(tekst);
    console.log("JsonParse " + tekstJS[0].firstName);


    tekst = JSON.stringify(students[1]);
    console.log(tekst);
}
window.addEventListener("load", setup);