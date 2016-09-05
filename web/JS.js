/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
    var students = [
        {"Name": "Flemming", "Email": "flemming@glemming.dk", "Phone": "123","Category": "Red","Group": "Gandalfs Gangstas"},
        {"Name": "Henning", "Email": "henning@glemming.dk", "Phone": "321","Category": "Yellow","Group": "Aragorn's Arachnids"},
        {"Name": "Lemming", "Email": "lemming@glemming.dk", "Phone": "132","Category": "Green","Group": "Sauron's Suckers"}
    ];
    var tableBody = document.getElementById("studentTable");

    var populateTable = function () {
        tableBody.innerHTML = "";
        for (var i = 0; i < students.length; i++) {
            var row = tableBody.insertRow(i);
            row.insertCell(0).innerHTML = students[i].Name;
            row.insertCell(1).innerHTML = students[i].Email;
            row.insertCell(2).innerHTML = students[i].Phone;
            row.insertCell(3).innerHTML = students[i].Category;
            row.insertCell(4).innerHTML = students[i].Group;
            var button = document.createElement("BUTTON");
            var t = document.createTextNode("Delete");       // Create a text node
            //button.value = "klik";
            //button.appendChild(t);   
            //row.insertCell(5). = button;
            var cell = row.insertCell(5);
            cell.appendChild(button);
            button.onclick = (function () {
                var inc = i;
                return function () {
                students.splice(inc, 1);
                populateTable();
            };
        } )();
    };
    };
    
    populateTable();
    var studentForm = document.getElementById("studentForm");
    studentForm.onsubmit = function (event) {
        event.preventDefault();
//    console.log("Name: " + studentForm.elements["Name"].value);
        student = {};
        student.Name = studentForm.elements["Name"].value;
        student.Email = studentForm.elements["Email"].value;
        student.Phone = studentForm.elements["Phone"].value;
        student.Category = studentForm.elements["Category"].value;
        student.Group = studentForm.elements["Group"].value;
        students.push(student);
        populateTable();
    };

};
