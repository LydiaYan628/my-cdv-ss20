let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;

// filter out the data from USA and china
function filterFunction(datapoint){
  if (datapoint.Code=="USA"||datapoint.Code=="CHN"){
    return true;

  }else{
    return false;
  }
}

// give positions to dots
function getTranslate(d,i){
let x= Math.random()*w;
let y= Math.random()*h;
  return "translate("+x+","+y+")";
}

// give the country name lable
function getCountryCode(d,i){
  return d.Code;
}
// lable the year
function getYear(d,i){
  return d.Year;
}




function gotData(incomingData){
  // all the data:
  console.log(incomingData);

  let filterData=incomingData.filter(filterFunction);
  console.log(filterData);

  let dataGroups=viz.selectAll(".datagroup").data(filterData).enter()
    .append("g")
      .attr("class","datagroup")
      ;

let circles=dataGroups.append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",5)
let countryLables=dataGroups.append("text")
      .attr("x",7)
      .attr("y",9)
      .text(getCountryCode)
let yearLables=dataGroups.append("text")
            .attr("x",7)
            .attr("y",23)
            .text(getYear)


dataGroups.attr("transform",getTranslate);

}

d3.csv("new-cases-of-hiv-infection.csv").then(gotData);
