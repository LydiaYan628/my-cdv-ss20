let viz =d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
    .attr("width", 600)
    .attr("height",400)
    .style("background-color","lavender")
;
 
function randomX(){
  return Math.random()*600;
}

function randomY(){
  return Math.random()*400;
}

function randomGroupPosition(){
  let x=Math.random()*600;
  let y=Math.random()*400;
  return "transform","translate("+x+","+y+")";
}

function gotData(incomingData){
  console.log("the incoming data is:",incomingData);

// part 1 CLASS
// // Chinese
//   viz.selectAll(".chinese").data(incomingData).enter()
//     .append("circle")
//       .attr("cx",randomX)
//       .attr("cy",randomY)
//       .attr("r",20)
//       .attr("fill","white")
//       .attr("class","chinese")
//   ;
// // Halal
//   viz.selectAll(".halal").data(incomingData).enter()
//     .append("circle")
//       .attr("cx",randomX)
//       .attr("cy",randomY)
//       .attr("r",20)
//       .attr("fill","red")
//       .attr("class","halal")
//   ;

// part 2 GROUP
// viz.selectAll(".food").data(incomingData).enter()
//   .append("rect")
//     .attr("x",randomX)
//     .attr("y",randomY)
//     .attr("width",20)
//     .attr("height",20)
//     .attr("class","food")
// ;
//
// viz.selectAll(".foodtext").data(incomingData).enter()
//   .append("text")
//     .attr("x",randomX)
//     .attr("y",randomY)
//     .text("food")
//     .attr("fill","red")
//     .attr("class","foodtext")
//
// ;


let datagroups =viz.selectAll(".datagroup").data(incomingData).enter()
  .append("g")//GROUP
    .attr("class","datagroup")
    .attr("transform",randomGroupPosition)


;

datagroups.append("circle")
  .attr("cx",0)
  .attr("cy",0)
  .attr("r",21)
;

datagroups.append("text")
  .attr("x",-15)
  .attr("y",40)
  .text("hello")
;

// datagroups.attr("transform","translate(100,200)")


console.log(datagroups);

}


d3.json("data.json").then(gotData);
