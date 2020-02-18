function start(){
  document.getElementById("submit").addEventListener("click",snow);
}



function snow(){
  let n=document.getElementById("number").value;


  for ( let i=0; i<n; i++){
    let flake=document.createElement("div");
    flake.setAttribute("class","dot");
    document.getElementById("blank").appendChild(flake);

    // flake.setAttribute("class","dot");
  }
}
