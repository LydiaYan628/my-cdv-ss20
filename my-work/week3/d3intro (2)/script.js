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


function gotData(incomingData){
  console.log("the incoming data is:",incomingData);
// Chinese
  viz.selectAll(".chinese").data(incomingData).enter()
    .append("circle")
      .attr("cx",randomX)
      .attr("cy",randomY)
      .attr("r",20)
      .attr("fill","white")
      .attr("class","chinese")
  ;
// Halal
  viz.selectAll(".halal").data(incomingData).enter()
    .append("circle")
      .attr("cx",randomX)
      .attr("cy",randomY)
      .attr("r",20)
      .attr("fill","red")
      .attr("class","halal")
  ;


}


d3.json("data.json").then(gotData);
