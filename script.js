function formdata() {
  let fname = document.getElementById("first-name").value;
  let lname = document.getElementById("last-name").value;
  let mail = document.getElementById("email").value;
  let add = document.getElementById("address").value;
  let pin = document.getElementById("pincode").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let comments = document.getElementById("comments").value;
  let gender = document.querySelector('[name ="gender"]:checked').value;
  let food = [];
  let choice = document.querySelectorAll('input[name="food"]:checked');
  for (let i = 0; i < choice.length; i++) {
    food.push(choice[i].value);
  }

  var table = document.getElementById("table");
  var row1 = table.insertRow();
  row1.insertCell(0).innerHTML = "Name";
  row1.insertCell(1).innerHTML = `${fname + " " + lname}`;
  var row2 = table.insertRow();
  row2.insertCell(0).innerHTML = "Address";
  row2.insertCell(1).innerHTML = add;
  var row3 = table.insertRow();
  row3.insertCell(0).innerHTML = "E-Mail";
  row3.insertCell(1).innerHTML = mail;
  var row4 = table.insertRow();
  row4.insertCell(0).innerHTML = "Pincode";
  row4.insertCell(1).innerHTML = pin;
  var row5 = table.insertRow();
  row5.insertCell(0).innerHTML = "Gender";
  row5.insertCell(1).innerHTML = gender;
  var row6 = table.insertRow();
  row6.insertCell(0).innerHTML = "Choice of Food ";
  row6.insertCell(1).innerHTML = food;
  var row7 = table.insertRow();
  row7.insertCell(0).innerHTML = " State";
  row7.insertCell(1).innerHTML = state;
  var row8 = table.insertRow();
  row8.insertCell(0).innerHTML = "Country";
  row8.insertCell(1).innerHTML = country;
  var row9 = table.insertRow();
  row9.insertCell(0).innerHTML = "Additional Comments";
  row9.insertCell(1).innerHTML = comments;
}



//function that limit the number of checkboxes to 2 
function limitchecks() {
  var count = 0;
  let check = document.querySelectorAll('input[name="food"]');
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      count = count + 1;
    }
    if (count > 2) {
      check[i].checked = false;
      alert("Please select only two options");
      return false;
    }
  }
}
