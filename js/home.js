
// let name = document.getElementById("name");
// let phone = document.getElementById("phone");
// let email = document.getElementById("email");
// let doctor = document.getElementById("doctor");
// let age = document.getElementById("age");
// let city = document.getElementById("city");
// let state = document.getElementById("state");






// function booking(){
// let name = document.getElementById("name").value;
// let phone = document.getElementById("phone").value;
// let email = document.getElementById("email").value;
// let doctor = document.getElementById("doctor").value;
// let age = document.getElementById("age").value;
// let city = document.getElementById("city").value;
// let state = document.getElementById("state").value;

// var count =0;
// var tbody = document.getElementById("tbody");


// let html= `
//             <tr>
//                 <td>${count++}</td>
//                 <td>${name}</td>
//                 <td>${email}</td>
//                 <td>${phone}</td>
//                 <td>${age}</td>
//                 <td>${city}</td>
//                 <td>${state}</td>
//                 <td>${doctor}</td>
//                 <td class="button-container">
//                     <button class="edit-button">Edit</button>
//                     <button class="view-button">View</button>
//                     <button class="delete-button">Delete</button>
//                 </td>
//             </tr>

        
// `
// document.getElementById("tbody").insertAdjacentElement('beforeend',html);


    // let dataEnter=enterData();
    // var readData= readLocalStorageData(dataEnter);
    // console.log(readData);
    // insert(readData);
    // console.log(dataEnter)
    // window.localStorage.setItem('name',name.value);
    // window.localStorage.setItem('phone',phone.value);
    // window.localStorage.setItem('email',email.value);
    // window.localStorage.setItem('date',date.value);
    // window.localStorage.setItem('time',time.value);
    // window.localStorage.setItem('area',area.value);
    // window.localStorage.setItem('city',city.value);

    // window.localStorage.setItem('state',state.value);



// console.log(name.value);
// console.log(phone.value)
// console.log(email.value);
// }

// function enterData(){
    
//     var name = document.getElementById("name").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;
//     var date = document.getElementById("date").value;
//     var time = document.getElementById("time").value;
//     var area = document.getElementById("area").value;
//     var city = document.getElementById("city").value;
//     var state = document.getElementById("state").value;
    
//     var arr= [name,phone,email,date,time,area,city,state]
    
//     return arr;
    
// }


// function readLocalStorageData(dataEnter){
//   var n=  window.localStorage.setItem('name',dataEnter[0]);
//   var p=  window.localStorage.setItem('phone',dataEnter[1]);
//   var e= window.localStorage.setItem('email',dataEnter[2]);
//   var d= window.localStorage.setItem('date',dataEnter[3]);
//   var t= window.localStorage.setItem('time',dataEnter[4]);
//   var a= window.localStorage.setItem('area',dataEnter[5]);
//   var c= window.localStorage.setItem('city',dataEnter[6]);
//   var s= window.localStorage.setItem('state',dataEnter[7]);

// //   get the data from localstorage

// var n1= window.localStorage.getItem("name",n);
// var p1= window.localStorage.getItem("phone",p);
// var e1= window.localStorage.getItem("email",e);
// var d1= window.localStorage.getItem("date",d);
// var t1= window.localStorage.getItem("time",t);
// var a1= window.localStorage.getItem("area",a);
// var c1= window.localStorage.getItem("city",c);
// var s1= window.localStorage.getItem("state",s);

// var arr = [n1,p1,e1,d1,t1,a1,c1,s1];
// return arr;

// }

// insert the data in table

// function insert(readData){
//    var row= table.insertRow();

// }

const dataForm = document.getElementById('dataForm');
        const dataTable = document.getElementById('dataTable');
        let count=0;

        dataForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const number = document.getElementById('number').value;
            const address = document.getElementById('address').value;
            const patients = document.getElementById('patients').value;
            const age = document.getElementById('age').value;
            const dob = document.getElementById('dob').value;
            const doctor = document.getElementById('doctor').value;
            // if(doctor==rakesh){
            //     alert("avilable");
            // }


            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${number}</td>
                <td>${patients}</td>
                <td>${address}</td>
                <td>${age}</td>
                <td>${dob}</td>
                <td>${doctor}</td>

                <td>
                    <button class="btn btn-primary" onclick="editRow(this)">Edit</button>
                    <button class="btn btn-danger" onclick="deleteRow(this)">Delete</button>
                </td>
            `;

            dataTable.appendChild(newRow);
            // let p=document.getElementById('p').value;
            // count++;

            dataForm.reset();
            window.localStorage.setItem('doctor_name',doctor);
            window.localStorage.setItem('patients_name',patients);


        });

        function editRow(button) {
           

            const row = button.parentElement.parentElement;
            currentRow = row;

            const cells = row.querySelectorAll('td');
            document.getElementById('name').value = cells[0].textContent;
            document.getElementById('email').value = cells[1].textContent;
            document.getElementById('number').value = cells[2].textContent;
            document.getElementById('address').value = cells[3].textContent;
            document.getElementById('patients').value = cells[4].textContent;
            document.getElementById('age').value = cells[5].textContent;
            document.getElementById('dob').value = cells[6].textContent;
            document.getElementById('doctor').value = cells[7].textContent;


           
            row.remove();
        }

        function deleteRow(button) {
            const row = button.parentElement.parentElement;
            row.remove();
        }