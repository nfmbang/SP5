
function createTable(){
    document.getElementById("content").innerHTML = "";
    fetch("http://localhost:3333/api/users").then(
        function(response) {
          if (response.status !== 200) {
            document.getElementById("opg2p").innerHTML = 'Looks like there was a problem. Status Code: ' +
              response.status;
            return;
          }
    
        response.json().then(function(data) {    
                    
            var table = document.createElement("table");
            table.border = "1";

            var keys = Object.keys(data[0]);

            var row = table.insertRow(-1);
            for (var i = 0; i < keys.length; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = keys[i];
                row.appendChild(headerCell);
            }

            for (var n of data) {
                row = table.insertRow();
                row.insertCell(0).innerHTML = n.id;
                row.insertCell(1).innerHTML = n.name; 
                row.insertCell(2).innerHTML = n.age;
                row.insertCell(3).innerHTML = n.gender;
                row.insertCell(4).innerHTML = n.email;
                }

            var tbd = document.getElementById("content");
            tbd.innerHTML = "";
            tbd.appendChild(table);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function getUser(){
    
    var id = document.getElementById("userId").value;
    fetch("http://localhost:3333/api/users/"+id).then(
        function(response) {
            if (response.status !== 200) {
              document.getElementById("opg2p").innerHTML = 'Looks like there was a problem. Status Code: ' +
                response.status;
              return;
            }
      
          response.json().then(function(data) {    
             var box = document.createElement("p");
             var str = "id     :" + data.id+"<br>";
             str += "Name   :" + data.name+"<br>";
             str += "Age    :" + data.age+"<br>";
             str += "Gender :" + data.gender+"<br>";
             str += "Email  :" + data.email+"<br>";
             box.innerHTML  = str;

            var content = document.getElementById("content");
            content.innerHTML = "";
            content.appendChild(box);
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
}

function addUser(){
    // var obj = new Object();

    // obj.name = document.getElementById("name").value;
    // obj.age = document.getElementById("age").value,
    // obj.gender = document.getElementById("gender").value,
    // obj.email = document.getElementById("email").value;

    // var userJson = JSON.stringify(obj);

    document.getElementById("addUserForm").submit;


}

document.getElementById("tableButton").addEventListener("click",createTable);
document.getElementById("idButton").addEventListener("click",getUser);
document.getElementById("createButton").addEventListener("click",addUser);