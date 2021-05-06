function myFunction() {
    var x = document.getElementById("myLinks");
    console.log(x);
    if (x.style.height === "0px") {
      x.style.height = "100px";
      x.style.display="inline-block";
    } else {
      x.style.height = "0px";
      x.style.display="none";
    } 
  }