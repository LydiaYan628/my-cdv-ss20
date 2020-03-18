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


// give the country name lable
function getCountryCode(d,i){
  return d.Code;
}
// lable the year
// function getYear(d,i){
//   return d.Year.getFullYear();
// }


function mapFunction(datapoint){
    let yearToDateConverter=d3.timeParse("%Y");
  datapoint.Year= yearToDateConverter(datapoint.Year);
  datapoint['Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)']=parseFloat(datapoint['Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)']);
  return datapoint;
}

function findTime(datapoint){
  return datapoint.Year;
}

function getColor(datapoint){
  if (datapoint.Code=="USA"){
    return "blue";
  }else if (datapoint.Code=="CHN"){
    return "red";
  }
}












function gotData(incomingData){
  // all the data:
  // console.log(incomingData);

  let filterData=incomingData.filter(filterFunction);
  // console.log(filterData);





// x scale

  // let test= yearToDateConverter("2019");
  let filteredAndTimeData=filterData.map(mapFunction);
console.log("filteredAndTimeData",filteredAndTimeData);



// min find the minimum in an array
let minTime= d3.min(filteredAndTimeData,findTime);
console.log(minTime);
let maxTime= d3.max(filteredAndTimeData,findTime);
console.log(maxTime);

// extent() function the same, min and max at the same time

let xPadding= 50;


let xScale=d3.scaleTime().domain([minTime,maxTime]).range([xPadding,w-xPadding*2]);

// x axies
let xAxisGroup =viz.append("g")
  .attr("class","xAxis")
  ;

  let xAxis= d3.axisBottom(xScale);
  xAxisGroup.call(xAxis);

  let xAxisYPos= h-30;
  xAxisGroup.attr("transform","translate(0,"+xAxisYPos+")");






//  Y scale
let valueKey='Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)';
console.log(filteredAndTimeData[0][valueKey]);

function getCaseCount(datapoint){
  return datapoint[valueKey];
}


let hivCaseExtent=d3.extent(filteredAndTimeData,getCaseCount)
console.log("hivCaseExtent",hivCaseExtent);

let yPadding=50;
let yScale= d3.scaleLinear().domain(hivCaseExtent).range([h-yPadding,50])

// y axis
let yAxisGroup=viz.append("g").attr("class","yAxis");
let yAxis= d3.axisLeft(yScale);
yAxisGroup.call(yAxis);
// let yAxisYPos=50;
yAxisGroup.attr("transform","translate("+50+",0)");



// give positions to dots
function getTranslate(d,i){
let x= xScale(d.Year);
let y= yScale(d[valueKey]);
  return "translate("+x+","+y+")";
}



let vizGroup= viz.append("g").attr("class","vizGroup");

  let dataGroups=vizGroup.selectAll(".datagroup").data(filterData).enter()
    .append("g")
      .attr("class","datagroup")
      ;

let circles=dataGroups.append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",5)
    .attr("fill",getColor);


// let countryLables=dataGroups.append("text")
//       .attr("x",7)
//       .attr("y",9)
      // .text(getCountryCode)

// let yearLables=dataGroups.append("text")
//             .attr("x",7)
//             .attr("y",23)
//             .text(getYear)



let shape='<polygon points="61.93 108.58 54.08 196.51 165.57 218.49 297.64 253.04 200.11 168.25 335.16 180.81 335.16 135.27 272.35 108.58 229.95 33.2 176.56 97.58 61.93 108.58" style="fill: #231f20"/><polygon points="205.63 33.2 167.45 80.25 71.6 88.82 48.22 88.82 41.2 160.52 9.25 43.62 127.7 16.35 205.63 33.2" style="fill: #231f20"/><polygon points="259.4 59.21 282 94.28 323.3 111.42 329.54 24.14 238.36 33.2 259.4 59.21" style="fill: #231f20"/><path d="M62.24,244.68s330.15,49.94,205-56.11S36.78,14.1,178.89,71.68,360.71,38.17,360.71,38.17" style="fill: none;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 13px"/>';

let customShape= dataGroups.append("g").attr("class","customShape").html(shape);

customShape.attr("transform","scale(0.1)");

customShape.select("path").attr("stroke",getColor);







dataGroups.attr("transform",getTranslate);

}

d3.csv("new-cases-of-hiv-infection.csv").then(gotData);
