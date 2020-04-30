let w=1583.33;
let h=876.67;
let padding=20;

let worldviz = d3.select("#worldPage").append("svg")
  .style("width",w)
  .style("height",h)
  ;


let timeParseFunction=d3.timeParse("%Y");

function mapFunction(datapoint){
  datapoint.release_year=timeParseFunction(datapoint.release_year);
  return datapoint;
}

function timeCorrectData(datapoint){
  let timeCorrected=datapoint.map(mapFunction);
  return timeCorrected;
}


  function transformData(dataToClean){
    // console.log(dataToClean);

    let newData=[];
    for (let i=0;i<dataToClean.length;i++){
      dataToClean[i].country=dataToClean[i].country.replace(/, /g,",").split(",");
      dataToClean[i].listed_in=dataToClean[i].listed_in.replace(/, /g,",").split(",");


      newData.push(dataToClean[i]);

    }
    return newData;
  }

let xScale=d3.scaleTime().range([padding, w-padding]);


d3.json("data/countries.geojson").then(function(geoData){
  d3.json("data/netflix.json").then(function(incomingData){

    let transformedData=transformData(incomingData);
    let timeCorrectedData=timeCorrectData(transformedData);
    console.log(incomingData);


// world map visualization
    let projection= d3.geoEqualEarth()
    .translate([w/2,h/2])
    .center([103.8,34.1])
    .fitExtent([[padding,padding],[w-padding,h- padding]],geoData)
    ;
    let pathMaker= d3.geoPath(projection);

// deal with country
    let countryArray=[];
    for (i=0;i<incomingData.length;i++){
      // console.log(incomingData[i].country);
      let countryElement= [].concat(incomingData[i].country);
      countryArray.push(countryElement);
    }


    let countryAll=countryArray.flat();


    let countryCounter= countryAll.reduce(function(acc,curr){
      if (typeof acc[curr]=='undefined'){
        acc[curr]=1;
      }else {
        acc[curr] += 1;
      }
      return acc;
    },{})
    console.log("counter",countryCounter);

// deal with category
    let categoryArray=[];
    for(i=0;i<incomingData.length;i++){
      let categoryElement=[].concat(incomingData[i].listed_in);
      categoryArray.push(categoryElement);
    }

    let categoryAll=categoryArray.flat();

    let categoryCounter=categoryAll.reduce(function(acc,curr){
      if (typeof acc[curr]=='undefined'){
        acc[curr]=1;
      }else {
        acc[curr] += 1;
      }
      return acc;
    },{});
    console.log("category",categoryCounter);



    let colorScale=d3.scaleLinear().domain([0,80,2610]).range(["white","red","darkred"]);

    let netflixCountry=worldviz.selectAll(".countries").data(geoData.features).enter()
    .append("path")
    .attr("class", "countries")
    .attr("d", pathMaker)
    .attr("fill", function(d,i){
      let currentCountry=d.properties.name;
      if (currentCountry=="Republic of Serbia"){
        currentCountry="Serbia"
      }else if (currentCountry=="United States of America"){
        currentCountry="United States"
      }
      let numValue=countryCounter[currentCountry];
      if(currentCountry!=undefined){
        return colorScale(numValue)
      }else{
        return "black";
      }
    })
    .attr("stroke", "#333")
    // .attr("stroke-width", 8)
    ;

// title
  worldviz.append("text")
    .text("WORLD's favorite category")
    .style("font-family","'Bebas Neue', cursive")
    .attr("x",20)
    .attr("y",820)
    .attr("fill","white")
    .style("font-size","50px")
;
  worldviz.append("text")
    .text("This is the map of each production country's favorite show category.")
    .style("font-family","'Montserrat', sans-serif")
    .attr("x",20)
    .attr("y",840)
    .attr("fill","white")
    .style("font-size","20px")
    ;



















///////////////////////////////////////////////////////////////////////////////
let tvmviz = d3.select("#TVMoviePage").append("svg")
  .style("width",w)
  .style("height",h)
  ;

  // title
    tvmviz.append("text")
      .text("TV show or Movie?")
      .style("font-family","'Bebas Neue', cursive")
      .attr("x",20)
      .attr("y",820)
      .attr("fill","white")
      .style("font-size","50px")
  ;
    tvmviz.append("text")
      .text("Comparison between Netflix TV shows and movies with differnt coategories.")
      .style("font-family","'Montserrat', sans-serif")
      .attr("x",20)
      .attr("y",840)
      .attr("fill","white")
      .style("font-size","20px")
      ;


////////////////////////////////////////////////////////////////////////////////
let yearviz = d3.select("#releasedYearPage").append("svg")
    .style("width",w)
    .style("height",h)
    ;

// title
  yearviz.append("text")
    .text("Released year")
    .style("font-family","'Bebas Neue', cursive")
    .attr("x",20)
    .attr("y",820)
    .attr("fill","white")
    .style("font-size","50px")
;
  yearviz.append("text")
    .text("Show categories released in each year from 1925-2020")
    .style("font-family","'Montserrat', sans-serif")
    .attr("x",20)
    .attr("y",840)
    .attr("fill","white")
    .style("font-size","20px")
    ;


    let extent = d3.extent(incomingData, function(d){
    return d.release_year;
    })
    console.log(extent);
    // amend domain to scale
    xScale.domain(extent);
    // group to hold axis
    let xAxisGroup = yearviz.append("g")
    .attr("class","xAxisGroup")
    .attr("stroke","white")
    .attr("transform","translate(0,60)")
    ;

    // ask d3 to get an axis ready
    let xAxis = d3.axisBottom(xScale);
    // xAxis.selectAll("path").attr("stroke","white");
    // build the axis into our group
    xAxisGroup.call(xAxis);






////////////////////////////////////////////////////////////////////////////////
let rateviz = d3.select("#ratePage").append("svg")
  .style("width",w)
  .style("height",h)
;

// title
  rateviz.append("text")
    .text("Age rate")
    .style("font-family","'Bebas Neue', cursive")
    .attr("x",20)
    .attr("y",820)
    .attr("fill","white")
    .style("font-size","50px")
;
  rateviz.append("text")
    .text("The proportion of each age rate compares to overall Netflix shows and the most popular category of each show.")
    .style("font-family","'Montserrat', sans-serif")
    .attr("x",20)
    .attr("y",840)
    .attr("fill","white")
    .style("font-size","20px")
    ;





  })
})
