let w=1583.33;
let h=876.67;
let padding=20;

let worldviz = d3.select("#worldPage").append("svg")
.style("width",w)
.style("height",h)
;

let tvmviz = d3.select("#TVMoviePage").append("svg")
.style("width",w)
.style("height",h)
;

let yearviz = d3.select("#releasedYearPage").append("svg")
.style("width",w)
.style("height",h)
;

let rateviz = d3.select("#ratePage").append("svg")
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

function mapCatFunction(datapoint){
  let category=datapoint.listed_in;
  // console.log(category);
  for(i=0; i<category.length; i++){
    if(category[i]=="TV Action & Adventure"){
      category[i]=category[i].replace("TV Action & Adventure","Action & Adventure");
    }else if (category[i]=="TV Comedies"){
      category[i]=category[i].replace("TV Comedies","Comedies");
    }else if (category[i]=="TV Dramas"){
      category[i]=category[i].replace("TV Dramas","Dramas");
    }else if (category[i]=="TV Horror"){
      category[i]=category[i].replace("TV Horror","Horror");
    }else if (category[i]=="Horror Movies"){
      category[i]=category[i].replace("Horror Movies","Horror");
    }else if (category[i]=="TV Sci-Fi & Fantasy"){
      category[i]=category[i].replace("TV Sci-Fi & Fantasy","Sci-Fi & Fantasy");
    }else if (category[i]=="TV Thrillers"){
      category[i]=category[i].replace("TV Thrillers","Thrillers");
    }else if (category[i]=="Anime Features"){
      category[i]=category[i].replace("Anime Features","Anime");
    }else if (category[i]=="Anime Series"){
      category[i]=category[i].replace("Anime Series","Anime");
    }else if (category[i]=="Comedie"){
      category[i]=category[i].replace("Comedie","Comedies");
    }else if (category[i]=="Classic & Cult TV"){
      category[i]=category[i].replace("Classic & Cult TV","Classic");
    }else if (category[i]=="Classic Movies"){
      category[i]=category[i].replace("Classic Movies","Classic");
    }else if (category[i]=="Docuseries"){
      category[i]=category[i].replace("Docuseries","Documentaries");
    }else if (category[i]=="International Movies"){
      category[i]=category[i].replace("International Movies","International");
    }else if (category[i]=="International TV Shows"){
      category[i]=category[i].replace("International TV Shows","International");
    }else if (category[i]=="Romantic Movies"){
      category[i]=category[i].replace("Romantic Movies","Romantic");
    }else if (category[i]=="Romantic TV Shows"){
      category[i]=category[i].replace("Romantic TV Shows","Romantic");
    }else if (category[i]=="Stand-Up Comedy & Talk Shows"){
      category[i]=category[i].replace("Stand-Up Comedy & Talk Shows","Stand-Up Comedy");
    }else if (category[i]=="Teen TV Shows"){
      category[i]=category[i].replace("Teen TV Shows","TV Shows");
    }
  }
  return datapoint;
}



function categoryCorrect(datapoint){
  let categoryCorrected=datapoint.map(mapCatFunction)
  return categoryCorrected;
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

// function categoryColor(datapoint){
//   // console.log(color);
//   if (datapoint.listed_in=="Action & Adventure"){
//     return "hsl(0,100%,50%)";
//   }else if(datapoint.list_in=="Anime Features"){
//     return  "hsl(8,100%,50%)";
//   }else if(datapoint.list_in=="Anime Series"){
//     return  "hsl(16,100%,50%)";
//   }else if(datapoint.list_in=="British TV Shows"){
//     return  "hsl(24,100%,50%)";
//   }else if(datapoint.list_in=="Children & Family Movies"){
//     return  "hsl(32,100%,50%)";
//   }else if(datapoint.list_in=="Classic & Cult TV"){
//     return  "hsl(40,100%,50%)";
//   }else if(datapoint.list_in=="Classic Movies"){
//     return  "hsl(48,100%,50%)";
//   }else if(datapoint.list_in=="Comedies"){
//     return  "hsl(56,100%,50%)";
//   }else if(datapoint.list_in=="Crime TV Shows"){
//     return  "hsl(64,100%,50%)";
//   }else if(datapoint.list_in=="Cult Movies"){
//     return  "hsl(72,100%,50%)";
//   }else if(datapoint.list_in=="Documentaries"){
//     return  "hsl(80,100%,50%)";
//   }else if(datapoint.list_in=="Docuseries"){
//   return  "hsl(88,100%,50%)";
// }else if(datapoint.list_in=="Dramas"){
//   return  "hsl(96,100%,50%)";
// }else if(datapoint.list_in=="Faith & Spirituality"){
//   return  "hsl(104,100%,50%)";
// }else if(datapoint.list_in=="Horror Movies"){
//   return  "hsl(112,100%,50%)";
// }else if(datapoint.list_in=="Independent Movies"){
//   return  "hsl(120,100%,50%)";
// }else if(datapoint.list_in=="International Movies"){
//   return  "hsl(128,100%,50%)";
// }else if(datapoint.list_in=="International TV Shows"){
//   return  "hsl(136,100%,50%)";
// }else if(datapoint.list_in=="Kids' TV"){
//   return  "hsl(144,100%,50%)";
// }else if(datapoint.list_in=="Korean TV Shows"){
//   return  "hsl(152,100%,50%)";
// }else if(datapoint.listed_in=="LGBTQ Movies"){
//   return  "hsl(160,100%,50%)";
// }else if(datapoint.list_in=="Movies"){
//   return  "hsl(168,100%,50%)";
// }else if(datapoint.list_in=="Music & Musicals"){
//   return  "hsl(176,100%,50%)";
// }else if(datapoint.list_in=="Reality TV"){
//   return  "hsl(184,100%,50%)";
// }else if(datapoint.list_in=="Romantic Movies"){
//   return  "hsl(192,100%,50%)";
// }else if(datapoint.list_in=="Romantic TV Shows"){
//   return  "hsl(200,100%,50%)";
// }else if(datapoint.list_in=="Sci-Fi & Fantasy"){
//   return  "hsl(208,100%,50%)";
// }else if(datapoint.list_in=="Science & Nature TV"){
//   return  "hsl(216,100%,50%)";
// }else if(datapoint.list_in=="Spanish-Language TV Shows"){
//   return  "hsl(224,100%,50%)";
// }else if(datapoint.list_in=="Sports Movies"){
//   return  "hsl(232,100%,50%)";
// }else if(datapoint.list_in=="Stand-Up Comedy"){
//   return  "hsl(240,100%,50%)";
// }else if(datapoint.list_in=="Stand-Up Comedy & Talk Shows"){
//   return  "hsl(248,100%,50%)";
// }else if(datapoint.list_in=="TV Action & Adventure"){
//   return  "hsl(256,100%,50%)";
// }else if(datapoint.list_in=="TV Comedies"){
//   return  "hsl(264,100%,50%)";
// }else if(datapoint.list_in=="TV Dramas"){
//   return  "hsl(272,100%,50%)";
// }else if(datapoint.list_in=="TV Horror"){
//   return  "hsl(280,100%,50%)";
// }else if(datapoint.list_in=="TV Mysteries"){
//     return  "hsl(288,100%,50%)";
//   }else if(datapoint.list_in=="TV Sci-Fi & Fantasy"){
//     return  "hsl(296,100%,50%)";
//   }else if(datapoint.list_in=="TV Shows"){
//     return  "hsl(304,100%,50%)";
//   }else if(datapoint.list_in=="TV Thrillers"){
//     return  "hsl(312,100%,50%)";
//   }else if(datapoint.list_in=="Teen TV Shows"){
//     return  "hsl(320,100%,50%)";
//   }else if(datapoint.list_in=="Thrillers"){
//     return  "hsl(328,100%,50%)";
//   }else{
//     return "white";
//   }
// }


let xScale=d3.scaleTime().range([padding, w-padding]);
let yearTextElement=yearviz.append("text")
.text("")
.attr("x",w/2)
.attr("y",padding/2)
.attr("fill","red")
.style("z-index",7)
.attr("class","yearTitle")

let worldTextElement=worldviz.append("text")
.text("")
.attr("x",w/2)
.attr("y",padding/2)
.attr("class","worldFav")
.attr("fill","yellow")
;

let tvTextElement=tvmviz.append("text")
.text("")
.attr("x",w/2)
.attr("y",padding/2)
.attr("class","tvNumber")
.attr("fill","white")
.attr("font-size","30px")
;

let movieTextElement=tvmviz.append("text")
.text("")
.attr("x",w/2)
.attr("y",padding/2)
.attr("class","movieNumber")
.attr("fill","red")
.attr("font-size","30px")
;


let yScale=d3.scaleLinear().domain([0,3500]).range([0,h/2])




// function genreFilter(datapoint){
//   if ()
// }


function filterTV(datapoint){
  if(datapoint.type="TV Show"){
    return true;
  }else if(datapoint.type="Movie"){
    return false;
  }

}


    yTVScale=d3.scaleLinear().domain([0,2000]).range([0,h/2])

    yMScale=d3.scaleLinear().domain([0,2000]).range([0,h/2])









d3.json("data/countries.geojson").then(function(geoData){
  d3.json("data/netflix.json").then(function(incomingData){

    let transformedData=transformData(incomingData);
    let timeCorrectedData=timeCorrectData(transformedData);
    let categoryCorrectedData=categoryCorrect(timeCorrectedData);
    console.log(categoryCorrectedData);


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

    let tvArray=[];

    let onlyTV=incomingData.filter(function(d,i){
      if (d.type=="TV Show"){
        return true;
      }else{
        return false;
      }
    })
    console.log(onlyTV);
    for(i=0;i<onlyTV.length;i++){
      let tvElement=[].concat(onlyTV[i].listed_in);
      // console.log(tvElement);
      tvArray.push(tvElement);
    }

    let tvAll=tvArray.flat();

    let tvCounter=tvAll.reduce(function(acc,curr){
      if (typeof acc[curr]=='undefined'){
        acc[curr]=1;
      }else {
        acc[curr] += 1;
      }
      return acc;
    },{});
    console.log("tv",tvCounter);




    let movieArray=[];

    let onlyMovie=incomingData.filter(function(d,i){
      if (d.type=="Movie"){
        return true;
      }else{
        return false;
      }
    })
    console.log(onlyMovie);
    for(i=0;i<onlyMovie.length;i++){
      let movieElement=[].concat(onlyMovie[i].listed_in);
      // console.log(tvElement);
      movieArray.push(movieElement);
    }

    let movieAll=movieArray.flat();

    let movieCounter=movieAll.reduce(function(acc,curr){
      if (typeof acc[curr]=='undefined'){
        acc[curr]=1;
      }else {
        acc[curr] += 1;
      }
      return acc;
    },{});
    console.log("movie",movieCounter);

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
    .attr("stroke", "#333");

    netflixCountry
    .on("mouseover",function(d,i){
      let mouseInWorld=d3.mouse(worldviz.node())
      // console.log(mouseInWorld);
      worldTextElement
      .transition()
      .text("the most category")
      .attr("x",mouseInWorld[0])
      .attr("y",mouseInWorld[1])
      d3.select(this).select("path")
      .transition()
      ///////how to make corresponding shape bigger?
    })

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
    .text("Comparison between Netflix TV shows and movies in categories.")
    .style("font-family","'Montserrat', sans-serif")
    .attr("x",20)
    .attr("y",840)
    .attr("fill","red")
    .style("font-size","20px")
    ;
    //

    tvmviz.append("text")
    .text("TV Show")
    .style("font-family","'Bebas Neue', cursive")
    .attr("x",20)
    .attr("y",100)
    .attr("fill","red")
    .style("font-size","40px")
    ;

    tvmviz.append("text")
    .text("Movie")
    .style("font-family","'Bebas Neue', cursive")
    .attr("x",1450)
    .attr("y",820)
    .attr("fill","white")
    .style("font-size","40px")
    ;




    function getTVYPosition(d){
      return -yTVScale(d.number);
    }

    function getTVGroupPosition(d,i){
      let x=(w/30*i)+20;
      let y=h/2;
      return "translate("+(x+padding)+","+y+")";
    }

    function getTVHeight(d){
      return yTVScale(d.number);
    }

    d3.json("data/tvCat.json").then(function(tvData){
      console.log(tvData);
      let tvdatagroups=tvmviz.selectAll(".tvdatagroup").data(tvData).enter()
        .append("g")
          .attr("class","tvdatagroup")
          .on("mouseover",function(d,i){
            console.log(d3.mouse(tvmviz.node()));
            let mouseInTV=d3.mouse(tvmviz.node())
            tvTextElement
            .transition()
            .text(d.number)
            .attr("x",150)
            .attr("y",95)
            d3.select(this).select("rect")
            .transition()
            .attr("width",30)
            .attr("x",-5)
            .attr("fill","yellow")

          })
          .on("mouseout",function(d,i){
            // textElement.text("")
            d3.select(this).select("rect")
            .transition()
            .attr("width",20)
            .attr("x",0)
            .attr("fill","red")
          })
          ;


      let tvs=tvdatagroups.append("rect")
        .attr("class","tvs")
        .attr("x",0)
        .attr("y",getTVYPosition)
        .attr("width",20)
        .attr("height",getTVHeight)
        .attr("fill","red")
        ;

        let lables=tvdatagroups.append("text")
          .attr("class","tvName")
          .text(function(d){
            return d.category;
          })
          .attr("x",-80)
          .attr("y",34)
          .attr("transform","rotate(270)")
          .style("font-family","'Montserrat', sans-serif")
          .attr("fill","yellow")

        tvdatagroups.attr("transform",getTVGroupPosition)

    })


    function getMovieYPosition(d){
      return 0
    }

    function getMovieHeight(d){
      return yMScale(d.number)
    }

    function getMovieGroupPosition(d,i){
      let x=(w/30*i)+20;
      let y=h/2;
      return "translate("+(x+padding)+","+y+")";
    }

    d3.json("data/movieCat.json").then(function(movieData){
      let moviedatagroups=tvmviz.selectAll(".moviedatagroup").data(movieData).enter()
        .append("g")
          .attr("class","moviedatagroup")
          .on("mouseover",function(d,i){
            console.log(d3.mouse(tvmviz.node()));
            let mouseInTV=d3.mouse(tvmviz.node())
            movieTextElement
            .transition()
            .text(d.number)
            .attr("x",1370)
            .attr("y",820)
            d3.select(this).select("rect")
            .transition()
            .attr("width",30)
            .attr("x",-5)
            .attr("fill","yellow")

          })
          .on("mouseout",function(d,i){
            // textElement.text("")
            d3.select(this).select("rect")
            .transition()
            .attr("width",20)
            .attr("x",0)
            .attr("fill","white")
          })
          ;

      let movies=moviedatagroups.append("rect")
      .attr("class","movies")
      .attr("x",0)
      .attr("y",getMovieYPosition)
      .attr("width",20)
      .attr("height",getMovieHeight)
      .attr("fill","white")
      ;

      moviedatagroups.attr("transform",getMovieGroupPosition)

    })

    //
    //
    // let tvCat=tvdatagroups.append("rect")
    // .attr("class","tvmCat")
    // .attr("x",0)
    // .attr("y",getTVYPosition)
    // .attr("width",20)
    // .attr("height",getTVHeight)
    // .attr("fill","white")
    //
    // tvdatagroups.attr("transform",getTVGroupPosition)






    ////////////////////////////////////////////////////////////////////////////////




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
    let timeScale= d3.scaleTime().domain([1925,2020]).range([200,w-padding]);

    let yearGraphGroup=yearviz.append("g").attr("class","graphgroup");








    d3.selectAll(".checkbox").on("change",updateGraph);
    // currentSelection();


    function currentSelection(){
      let selection=[];

      d3.selectAll(".checkbox").each(function(d){
          checkboxSelected=d3.select(this);
          // console.log(checkboxSelected);
          if(checkboxSelected.property("checked")){
            // console.log("hhhhh");
            selection.push(checkboxSelected.property("name"))
            // console.log(selection);
          }
        })
      // [ "Adventure Movie", "Drama" ]
      return selection;
    }

    function filterCurrentSelection(datapoint, currentSel){
      // console.log(currentSel);
      for(let i=0;i< datapoint.listed_in.length;i++){

        console.log("currentSel", currentSel);
        console.log("datapoint.listed_in[i]", datapoint.listed_in[i]);

        if (currentSel.includes(datapoint.listed_in[i])==true){
          return true
        }else{
          return false
        }




      }


    }


    function assignKeys(d,i){
      return d.show_id;
    }
    ///////////////////////////////////////
////they are calling each other endlessly//////
  //////////////////////////////////////////
    function updateGraph(){
      let currentSel = currentSelection();
      console.log(currentSel);
      //
      // allNames=incomingData.map(function(d){
      //   return d.show_id;
      // })

      let yearDataGroups= yearGraphGroup.selectAll(".datagroup")
        .data(incomingData.filter(function(d, i){
          console.log(d);
          return filterCurrentSelection(d, currentSel)
        }),assignKeys);

        let enteringElements=yearDataGroups.enter();
        let exitingElements=yearDataGroups.exit();



        let enteringElementGroups=enteringElements.append("g")
          .attr("class","datagroup")
      ;

        enteringElementGroups.select("circle")
        .attr("r",2)
        .transition()
        .duration(500)
        .delay(500)
        .on("mouseover",function(d,i){
          console.log(d3.event);
          console.log(d3.mouse(yearviz.node()));
          let mouseInYear=d3.mouse(yearviz.node())
          yearTextElement
          .transition()
          .text(d.listed_in+" --- "+d.title)
          .attr("x",100)
          .attr("y",mouseInYear[1])
          // datagroups.attr("opacity",0.1)
          d3.select(this).select("circle")
          .transition()
          .attr("r",20)

    })

    .on("mouseout",function(d,i){
      // textElement.text("")
      d3.select(this).select("circle")
      .transition()
      .attr("r",2)
    })
    // .append("circle")
    .attr("class","yearDatapoint")
    .attr("cx",function(d){
      return xScale(d.release_year);
    })
    .attr("cy",function(d){
      return h/2;
    })
    .attr("r",2)
    .attr("fill","white")

    ;



      //
      //



      let yearCircles=enteringElementGroups.append("circle")
      .attr("class","yearDatapoint")
      .attr("cx",function(d){
        return xScale(d.release_year);
      })
      .attr("cy",function(d){
        return h/2;
      })
      .attr("r",2)
      .attr("fill","white")

      ;


    incomingData=incomingData.map(function(datapoint){
      datapoint.x= xScale(datapoint.release_year);
      datapoint.y= h/2;
      return datapoint;
    })

    // update the location using simulation
    let simulation=d3.forceSimulation(incomingData.filter(function(d, i){
      console.log(d);
      return filterCurrentSelection(d, currentSel)
    }))
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

    //
    exitingElements.select("circle")
    .transition()
    .duration(500)
    .attr("fill","red")
    .attr("r",0)
    // .transition()
    // .delay(500)
    .remove();

}


    ////////////////////////////////////////////////////////////////////////////////


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


    // console.log(incomingData.rating);


    let rateArray=[];
    for(i=0;i<incomingData.length;i++){
      let rateElement=[].concat(incomingData[i].rating);
      rateArray.push(rateElement);
    }

    let rateAll=rateArray.flat();

    let rateCounter=rateAll.reduce(function(acc,curr){
      if (typeof acc[curr]=='undefined'){
        acc[curr]=1;
      }else {
        acc[curr] += 1;
      }
      return acc;
    },{});

  console.log("rate",rateCounter);


    let gArray=[];
    let onlyG=incomingData.filter(function(d,i){
      if (d.rating=="G"){
        return true;
      }else{
        return false;
      }
    })
    console.log(onlyG);
    for(i=0;i<onlyG.length;i++){
      let gElement=[].concat(onlyG[i].listed_in);
      gArray.push(gElement);
    }

    let gAll=gArray.flat();

    let gCounter=gAll.reduce(function(acc,curr){
      if (typeof acc[curr]=='undefined'){
        acc[curr]=1;
      }else {
        acc[curr] += 1;
      }
      return acc;
    },{});

    console.log("G",gCounter);

    let rateRec=rateviz.append("rect")
    .attr("class","rateRec")
    .attr("width",w-padding*2)
    .attr("height",200)
    .attr("x",padding)
    .attr("y",(h-padding*2)/2)
    .attr("fill","white")
    ;

    let smallRateRec=rateRec.append("rect")
    .attr("class","smallRateRec")
    .attr("height",200)
    .attr("width",function(d,i){
      console.log(d);
      // let rateName=d;
      // if(rateName==""){
      //   rateName="Unrated";
      // }
      // let numRate=rateCounter.rateName;

    })



  })
})
