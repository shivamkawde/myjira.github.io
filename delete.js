function getfilter() {

  let dele = document.querySelectorAll(".container1")
  for (let i = 0; i < dele.length; i++) {
    dele[i].remove();
  }
  let filter = document.getElementById("filter").value;
  console.log(filter)
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log("this is done ");
  for (let i = 0; i < tasks.length; i++) {
    let col = tasks[i].col

    let pw = tasks[i].pw;
    let td = tasks[i].td;

    if (col == filter) {
      console.log(col)
      let parent = document.createElement("div");
      //console.log(parent)   
      parent.setAttribute("class", "container1")
      parent.setAttribute("id", i)

      let para = document.createElement("div");
      para.setAttribute("id", "Div1");

      para.setAttribute("class", "card");

      para.innerHTML = td;
      let dar = document.createElement("p");
      dar.setAttribute("class", "dar");
      dar.innerHTML = " Double Click For Delete ";
      parent.appendChild(dar);

      let flag = document.createElement("div");
      flag.setAttribute("class", "ticket-color")





      flag.append(pw)
      parent.appendChild(flag)

      //para.append(pw);
      parent.appendChild(para)
      // para.style.background = col;

      parent.addEventListener('dblclick', function (e) {
        parent.remove();
        console.log(i);
        console.log(tasks)
        tasks.splice(i, 1);
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));

      })

      flag.style.background = col

      document.body.appendChild(parent);

    }
  }

}




function load() {

  let filter = document.getElementById("filter").value;

  getfilter();
  //console.log(f)
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log("this is done ");
  for (let i = 0; i < tasks.length; i++) {
    let col = tasks[i].col
    let pw = tasks[i].pw;
    let td = tasks[i].td
    //  console.log(pw);
    //  console.log(col)

    let parent = document.createElement("div");
    //console.log(parent)   
    parent.setAttribute("class", "container1")
    let para = document.createElement("div");
    para.setAttribute("id", "Div1");

    para.setAttribute("class", "card");

    para.innerHTML = "Description->" + td;

    let dar = document.createElement("p");
    dar.setAttribute("class", "dar");
    dar.innerHTML = " Double Click For Delete ";
    parent.appendChild(dar);

    let flag = document.createElement("div");
    flag.innerHTML = "Id ->"
    flag.setAttribute("class", "ticket-color")


    parent.addEventListener('dblclick', function (e) {
      parent.remove();
      console.log(i);
      console.log(tasks)
      tasks.splice(i, 1);
      console.log(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));

    })





    flag.append(pw)
    parent.appendChild(flag)

    //para.append(pw);
    parent.appendChild(para)
    // para.style.background = col;
    flag.style.background = col;
    document.body.appendChild(parent);


  }


}


//  
load();
// chek();

