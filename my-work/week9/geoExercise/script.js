let w = 1200;
let h = 800;
let padding = 20;
let around= 50;

let viz = d3.select("#container").append("svg")
.style("width", w)
.style("height", h)
.style("background-color", "lavender")
;

function transformData(dataToClean){
  let newData=[];
  for (let i=0;i<dataToClean.length;i++){
    dataToClean[i].country=dataToClean[i].country.replace(/, /g,",").split(",");

    newData.push(dataToClean[i]);

  }
  return newData;
}



// places I have been to in china
d3.json("countries.geojson").then(function(geoData){
  d3.json("netflix.json").then(function(incomingData){

    let transformedData=transformData(incomingData);
    console.log(incomingData);

    let projection= d3.geoEqualEarth()
    .translate([w/2,h/2])
    .center([103.8,34.1])
    .fitExtent([[padding,padding],[w-padding,h- padding]],geoData)
    ;
    let pathMaker= d3.geoPath(projection);



    let countryArray=[];
    for (i=0;i<incomingData.length;i++){
      // console.log(incomingData[i].country);
      let countryElement= [].concat(incomingData[i].country);
      countryArray.push(countryElement);
    }
    console.log(countryArray);

    let countryAll=countryArray.flat();
    console.log(countryAll);

    let countryCounter= countryAll.reduce(function(acc,curr){
      if (typeof acc[curr]=='undefined'){
        acc[curr]=1;
      }else {
        acc[curr] += 1;
      }
       return acc;
    },{})
    console.log("counter",countryCounter);

    // let countryAll=[];
    // for (i=0;i<countryArray.length;i++){
    //   let arrayElement =[].concat(countryArray[i]);
    //   countryAll.push(arrayElement);
    // }
    // console.log(countryAll);


    // counter experiment
    // let countryCounter=[];
    // if(countryCounter[countryAll]==undefined){
    //   countryCounter[countryAll]=1;
    // }else{
    //   countryCounter[countryAll]++;
    // }
    //
    // console.log(countryCounter);





    let colorScale=d3.scaleLinear().domain([0,2610]).range(["white","purple"]);


    // this is for visualizing the map
    let netflixCountry=viz.selectAll(".countries").data(geoData.features).enter()
      .append("path")
      .attr("class", "countries")
      .attr("d", pathMaker)
      .attr("fill", function(d,i){
        // console.log(d);
// not working
        let correspondingData=incomingData.find(function(datapoint){
          // console.log(datapoint.country);
          if(countryCounter==d.properties.name){
            return true
          }else{
            return false
          }
        })
        if (correspondingData!=undefined){
          return colorScale(correspondingData)
        }else{
          return "gray";
        }
      })
      .attr("stroke", "black")
        // .attr("stroke-width", 8)
        ;


  })

})
