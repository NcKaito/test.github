console.log('students',students);

const list = document.querySelector('.list');
console.log(list);



  
for(let i = 0; i < students.length; i++){
  let student = students[i]

  
  const li = document.createElement('li');
  const id = document.createElement ("span");
  const Name = document.createElement("span");
  const Date = document.createElement("date");
  const picture = document.createElement("img");

  li.innerHTML;
  id.innerHTML =  students[i].id;
  Name.innerHTML = students[i].name;
  Date.innerHTML =  students[i].createdAt;
  picture.src = students[i].avatar;

  li.appendChild(id);
  li.appendChild(Name);
  li.appendChild(Date);
  li.appendChild(picture);
  list.appendChild(li);


  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "demo_get.asp", true);
    xhttp.send();
  }

  console.log(li)
  console.log(student.id);
  console.log(student.name);
  console.log(student.createdAt);
  }
  


