// refer to the width and height of the project
let w = 2400;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lightblue")
;





//separate the rects into different x position
function getGroupPosition(d,i){
  // console.log(d);
  let x=(w/100*i);
  let y=h/2;
  return "translate("+x+","+y+")";
}

// scales area
let colorScale=d3.scaleLinear().domain([300,500,850]).range(["black","orange","yellow"]);
let yScale=d3.scaleLinear().domain([0,850]).range([0,h/2]);//returns a function
//meake the rects' height according to the reall life height of the towers
function getHeight(d,i){

  return yScale(d.height);

}

//position the rects to the bottom and grow up
function getYPosition(d,i){
  return -yScale(d.height);
}

function getName(d,i){
  return d.name;
}


function getColor(d,i){
  return colorScale(d.height);
}










function gotData(incomingData){
  console.log(incomingData);

  let datagroups =  viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class","datagroup")
      ;

// console.log(yScale(0));

    let towers = datagroups.append("rect")
      .attr("class","tower")
      .attr("x",0)
      .attr("y",getYPosition)
      .attr("width",20)
      .attr("height",getHeight)
      .attr("fill",getColor)
;

let lables = datagroups.append("text")
  .attr("class","name")
  .text(getName)
  .attr("x",5)
  .attr("y",-4)
  .attr("transform","rotate(90)")
  .style("font-family","sans-serif")

;

  datagroups.attr("transform",getGroupPosition)

}


d3.json("buildings.json").then(gotData);
