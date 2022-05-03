function myFunction() {
  var x;

  x = document.getElementById("myText").value;

  if (x=="students") {
  window.location.replace("https://seven203190709.github.io/jingzhe5/course.html")
  } else if (x=="parents"){
  window. location.replace("https://seven203190709.github.io/jingzhe5/index.html")
  
  }
  else if (x!="students"){
  alert("Please enter 'students' or 'parents'!")
  }
  else if (x!="parents"){
  alert("Please enter 'students' or 'parents'!")
  }
  }