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

  function categoryColor(datapoint){
    // console.log(color);
    if (datapoint.listed_in=="Action & Adventure"){
      return "hsl(0,100%,50%)";
    }else if(datapoint.list_in=="Anime Features"){
      return  "hsl(8,100%,50%)";
    }else if(datapoint.list_in=="Anime Series"){
      return  "hsl(16,100%,50%)";
    }else if(datapoint.list_in=="British TV Shows"){
      return  "hsl(24,100%,50%)";
    }else if(datapoint.list_in=="Children & Family Movies"){
      return  "hsl(32,100%,50%)";
    }else if(datapoint.list_in=="Classic & Cult TV"){
      return  "hsl(40,100%,50%)";
    }else if(datapoint.list_in=="Classic Movies"){
      return  "hsl(48,100%,50%)";
    }else if(datapoint.list_in=="Comedies"){
      return  "hsl(56,100%,50%)";
    }else if(datapoint.list_in=="Crime TV Shows"){
      return  "hsl(64,100%,50%)";
    }else if(datapoint.list_in=="Cult Movies"){
      return  "hsl(72,100%,50%)";
    }else if(datapoint.list_in=="Documentaries"){
      return  "hsl(80,100%,50%)";
    }else if(datapoint.list_in=="Docuseries"){
      return  "hsl(88,100%,50%)";
    }else if(datapoint.list_in=="Dramas"){
      return  "hsl(96,100%,50%)";
    }else if(datapoint.list_in=="Faith & Spirituality"){
      return  "hsl(104,100%,50%)";
    }else if(datapoint.list_in=="Horror Movies"){
      return  "hsl(112,100%,50%)";
    }else if(datapoint.list_in=="Independent Movies"){
      return  "hsl(120,100%,50%)";
    }else if(datapoint.list_in=="International Movies"){
      return  "hsl(128,100%,50%)";
    }else if(datapoint.list_in=="International TV Shows"){
      return  "hsl(136,100%,50%)";
    }else if(datapoint.list_in=="Kids' TV"){
      return  "hsl(144,100%,50%)";
    }else if(datapoint.list_in=="Korean TV Shows"){
      return  "hsl(152,100%,50%)";
    }else if(datapoint.list_in=="LGBTQ Movies"){
      return  "hsl(160,100%,50%)";
    }else if(datapoint.list_in=="Movies"){
      return  "hsl(168,100%,50%)";
    }else if(datapoint.list_in=="Music & Musicals"){
      return  "hsl(176,100%,50%)";
    }else if(datapoint.list_in=="Reality TV"){
      return  "hsl(184,100%,50%)";
    }else if(datapoint.list_in=="Romantic Movies"){
      return  "hsl(192,100%,50%)";
    }else if(datapoint.list_in=="Romantic TV Shows"){
      return  "hsl(200,100%,50%)";
    }else if(datapoint.list_in=="Sci-Fi & Fantasy"){
      return  "hsl(208,100%,50%)";
    }else if(datapoint.list_in=="Science & Nature TV"){
      return  "hsl(216,100%,50%)";
    }else if(datapoint.list_in=="Spanish-Language TV Shows"){
      return  "hsl(224,100%,50%)";
    }else if(datapoint.list_in=="Sports Movies"){
      return  "hsl(232,100%,50%)";
    }else if(datapoint.list_in=="Stand-Up Comedy"){
      return  "hsl(240,100%,50%)";
    }else if(datapoint.list_in=="Stand-Up Comedy & Talk Shows"){
      return  "hsl(248,100%,50%)";
    }else if(datapoint.list_in=="TV Action & Adventure"){
      return  "hsl(256,100%,50%)";
    }else if(datapoint.list_in=="TV Comedies"){
      return  "hsl(264,100%,50%)";
    }else if(datapoint.list_in=="TV Dramas"){
      return  "hsl(272,100%,50%)";
    }else if(datapoint.list_in=="TV Horror"){
      return  "hsl(280,100%,50%)";
    }else if(datapoint.list_in=="TV Mysteries"){
      return  "hsl(288,100%,50%)";
    }else if(datapoint.list_in=="TV Sci-Fi & Fantasy"){
      return  "hsl(296,100%,50%)";
    }else if(datapoint.list_in=="TV Shows"){
      return  "hsl(304,100%,50%)";
    }else if(datapoint.list_in=="TV Thrillers"){
      return  "hsl(312,100%,50%)";
    }else if(datapoint.list_in=="Teen TV Shows"){
      return  "hsl(320,100%,50%)";
    }else if(datapoint.list_in=="Thrillers"){
      return  "hsl(328,100%,50%)";
    }else{
      return "white";
    }
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
    // console.log(categoryCounter.length);



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
    .attr("fill","red")
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
      .attr("fill","red")
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
    .attr("fill","red")
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


    let paddingYear=100;
    let timeScale= d3.scaleTime().domain([1925,2020]).range([padding,w-padding]);

    let yearGraphGroup=yearviz.append("g").attr("class","graphgroup");

    let yearDataGroups= yearGraphGroup.selectAll(".datagroup").data(timeCorrectedData).enter()
      .append("g")
        .attr("class","datagroup")
        ;

    let yearCircles=yearDataGroups.append("circle")
      .attr("class","yearDatapoint")
      .attr("cx",function(d){
        return xScale(d.release_year);
      })
      .attr("cy",function(d){
        return h/2;
      })
      .attr("r",2)
      .attr("fill",categoryColor)
      ;

    incomingData=incomingData.map(function(datapoint){
      datapoint.x= xScale(datapoint.release_year);
      datapoint.y= h/2;
      return datapoint;
    })

    // update the location using simulation
  let simulation=d3.forceSimulation(incomingData)
    .force("forceX", function(d,i){
      return d3.forceX(xScale(d.release_year));
    })
    .force("forceY", d3.forceY(h/2))
    .force("collide",d3.forceCollide().radius(5))
    .on("tick",simulationRan)
  ;

  function simulationRan(){
      // console.log(incomingData[0].x);
      yearviz.selectAll(".yearDatapoint")
        .attr("cx", function(d){
          return d.x;
        })
        .attr("cy", function(d){
          return d.y;
        })
  }




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
    .attr("fill","red")
    .style("font-size","20px")
    ;





  })
})
