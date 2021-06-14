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
    let td = tasks[i].td;
    let pw = tasks[i].pw;
    //  console.log(pw);
    //  console.log(col)
    if (col == filter) {
      console.log(col)
      let parent = document.createElement("div");
      //console.log(parent)   
      parent.setAttribute("class", "container1")
      //  parent.setAttribute("id","bigB")

      let para = document.createElement("div");


      para.setAttribute("id", "Div1");

      para.setAttribute("class", "card");

      para.innerHTML = td;

      let flag = document.createElement("div");
      flag.setAttribute("class", "ticket-color")





      flag.append(pw)
      parent.appendChild(flag)
      //para.append(pw);
      parent.appendChild(para);
      // para.style.background = col;
      flag.style.background = col
      document.body.appendChild(parent);

    }
  }

}
// function load()
//     {

//       let filter=document.getElementById("filter").value;

//      let f = getfilter();
//      console.log(f)
//        let tasks=JSON.parse(localStorage.getItem("tasks"));
//       console.log("this is done ");
//       for(let i=0;i<tasks.length;i++)
//       {  
//          let col=tasks[i].col
//          let pw=tasks[i].pw;
//         //  console.log(pw);
//         //  console.log(col)

//         let parent=document.createElement("div");
//         //console.log(parent)   
//         parent.setAttribute("class","container1")
//          let para=document.createElement("div");
//          para.setAttribute("id", "Div1");

//          para.setAttribute("class","card");
//          para.append(pw);
//          parent.appendChild(para)
//          para.style.background = col;
//         //  console.log(para)
//         //  console.log(parent)

//         document.body.appendChild(parent);      


//       }

//     }

//     load();




if (!localStorage.getItem("tasks"))
  localStorage.setItem("tasks", JSON.stringify([]));
// }
function additem() {

  let pw = document.getElementById("pw").value;
  let td = document.getElementById("td").value;
  if (pw == "") {
    alert("Fill Task Frist");
  }
  let filter = document.getElementById("filter").value;

  let bbtn = document.getElementById("#add");
  let body = document.querySelector("body");
  let parent = document.createElement("div");
  parent.setAttribute("class", "container");
  let para = document.createElement("div");
  let col = document.getElementById("color").value;
  console.log(col)
  if (pw != "") {


    para.setAttribute("id", "Div1");

    para.setAttribute("class", "card");
    //para.append(pw);

    para.innerHTML = td;

    let flag = document.createElement("div");
    flag.setAttribute("class", "ticket-color")


    let mez = document.createElement("div");
    mez.id = 'f';
    mez.innerHTML = "congratulation Ticket Added"


    flag.append(pw)
    parent.appendChild(flag)
    parent.appendChild(para)

    body.append(mez);
    //para.style.background = col;

    setTimeout(function () {
      mez.remove();
    }, 3000);
    flag.style.backgroundColor = col
    savedata(col, pw, td);


  }

}
function savedata(col, pw, td) {
  let ob = { col, pw, td };
  let taskArr = JSON.parse(localStorage.getItem('tasks'));
  taskArr.push(ob);
  localStorage.setItem("tasks", JSON.stringify(taskArr))
}




