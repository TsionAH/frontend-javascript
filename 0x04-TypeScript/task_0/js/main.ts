interface Student {
    firstName: string;
    lastName: string;
    age : number;
    location : string;
}
const student1: Student = {
    firstName: "abebe",
    lastName : "kebede",
    age : 20,
    location: "addis "
}; 
const student2 : Student = {
    firstName : "ayele",
    lastName : "matewos",
    age : 30,
    location : "hossana"
}
const studentsList : Student[] = [student1,student2];

// 4. Create a table and append it to the body
const table = document.createElement("table");
table.border = "1";

// Optional: Add table headers
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

// 5. Loop through the studentsList and create rows
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

// 6. Append the table to the body
document.body.appendChild(table);

