
function pw() {
    let exampleInputPassword1 = document.querySelector("#exampleInputPassword1");
    let exampleInputEmail = document.querySelector("#exampleInputEmail").value;


    //let exampleInputEmail=document.querySelector("#1exampleInputEmail");
    let from = document.querySelector("#login");


    if (exampleInputEmail == "" && exampleInputPassword1.value == "")
        alert("Enter email");
    else if (exampleInputPassword1.value == 123) {


        from.action = "add.html";
    }

    else {
        alert("Please Enter Right Password");
    }
    if (exampleInputEmail != "" && exampleInputPassword1.value != "")
        document.cookie = "username=" + exampleInputEmail;

}




function logout() {
    document.cookie = "username=Martin Roy;max-age=0";
    let logout = document.getElementById("logout");
    window.location = "index.html";
}