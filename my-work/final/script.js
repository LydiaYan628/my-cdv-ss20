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

//function categoryColor(datapoint){
//   console.log(datapoint);
//   if (datapoint.mostListed=="Action & Adventure"){
//     return "hsl(0,100%,50%)";
//   }else if(datapoint.mostListed=="Anime Features"){
//     return  "hsl(8,100%,50%)";
//   }else if(datapoint.mostListed=="Anime Series"){
//     return  "hsl(16,100%,50%)";
//   }else if(datapoint.mostListed=="British TV Shows"){
//     return  "hsl(24,100%,50%)";
//   }else if(datapoint.mostListed=="Children & Family Movies"){
//     return  "hsl(32,100%,50%)";
//   }else if(datapoint.mostListed=="Classic & Cult TV"){
//     return  "hsl(40,100%,50%)";
//   }else if(datapoint.mostListed=="Classic Movies"){
//     return  "hsl(48,100%,50%)";
//   }else if(datapoint.mostListed=="Comedies"){
//     return  "hsl(56,100%,50%)";
//   }else if(datapoint.mostListed=="Crime TV Shows"){
//     return  "hsl(64,100%,50%)";
//   }else if(datapoint.mostListed=="Cult Movies"){
//     return  "hsl(72,100%,50%)";
//   }else if(datapoint.mostListed=="Documentaries"){
//     return  "hsl(80,100%,50%)";
//   }else if(datapoint.mostListed=="Docuseries"){
//   return  "hsl(88,100%,50%)";
// }else if(datapoint.mostListed=="Dramas"){
//   return  "hsl(96,100%,50%)";
// }else if(datapoint.mostListed=="Faith & Spirituality"){
//   return  "hsl(104,100%,50%)";
// }else if(datapoint.mostListed=="Horror Movies"){
//   return  "hsl(112,100%,50%)";
// }else if(datapoint.mostListed=="Independent Movies"){
//   return  "hsl(120,100%,50%)";
// }else if(datapoint.mostListed=="International Movies"){
//   return  "hsl(128,100%,50%)";
// }else if(datapoint.mostListed=="International TV Shows"){
//   return  "hsl(136,100%,50%)";
// }else if(datapoint.mostListed=="Kids' TV"){
//   return  "hsl(144,100%,50%)";
// }else if(datapoint.mostListed=="Korean TV Shows"){
//   return  "hsl(152,100%,50%)";
// }else if(datapoint.limostLteded=="LGBTQ Movies"){
//   return  "hsl(160,100%,50%)";
// }else if(datapoint.mostListed=="Movies"){
//   return  "hsl(168,100%,50%)";
// }else if(datapoint.mostListed=="Music & Musicals"){
//   return  "hsl(176,100%,50%)";
// }else if(datapoint.mostListed=="Reality TV"){
//   return  "hsl(184,100%,50%)";
// }else if(datapoint.mostListed=="Romantic Movies"){
//   return  "hsl(192,100%,50%)";
// }else if(datapoint.mostListed=="Romantic TV Shows"){
//   return  "hsl(200,100%,50%)";
// }else if(datapoint.mostListed=="Sci-Fi & Fantasy"){
//   return  "hsl(208,100%,50%)";
// }else if(datapoint.mostListed=="Science & Nature TV"){
//   return  "hsl(216,100%,50%)";
// }else if(datapoint.mostListed=="Spanish-Language TV Shows"){
//   return  "hsl(224,100%,50%)";
// }else if(datapoint.mostListed=="Sports Movies"){
//   return  "hsl(232,100%,50%)";
// }else if(datapoint.mostListed=="Stand-Up Comedy"){
//   return  "hsl(240,100%,50%)";
// }else if(datapoint.mostListed=="Stand-Up Comedy & Talk Shows"){
//   return  "hsl(248,100%,50%)";
// }else if(datapoint.mostListed=="TV Action & Adventure"){
//   return  "hsl(256,100%,50%)";
// }else if(datapoint.mostListed=="TV Comedies"){
//   return  "hsl(264,100%,50%)";
// }else if(datapoint.mostListed=="TV Dramas"){
//   return  "hsl(272,100%,50%)";
// }else if(datapoint.mostListed=="TV Horror"){
//   return  "hsl(280,100%,50%)";
// }else if(datapoint.mostListed=="TV Mysteries"){
//     return  "hsl(288,100%,50%)";
//   }else if(datapoint.mostListed=="TV Sci-Fi & Fantasy"){
//     return  "hsl(296,100%,50%)";
//   }else if(datapoint.mostListed=="TV Shows"){
//     return  "hsl(304,100%,50%)";
//   }else if(datapoint.mostListed=="TV Thrillers"){
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
.style("font-family","'Bebas Neue', cursive")
// .style("font-size",18)

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

let rateTextElement=rateviz.append("text")
.text("")
.attr("x",w/2)
.attr("y",padding/2)
.attr("class","rateName")
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
    // console.log(categoryCorrectedData);


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
    // console.log("category",categoryCounter);
    // console.log(categoryCounter.length);

    let madness= categoryCorrectedData.reduce(function(acc,datapoint){
      datapoint.country.forEach(country=>{
        if(acc.hasOwnProperty(country)==false){
          acc[country]={}
          acc[country].tally={}
        }
        datapoint.listed_in.forEach(cat=>{
          if(acc[country].tally.hasOwnProperty(cat)==false){
            acc[country].tally[cat]=1;

          }else{
            acc[country].tally[cat]+=1;
          }
        })
      })
      return acc
    },{})
    console.log(madness);

    // let maxCat=madness.max()

for(country in madness){
  let e=Object.entries(madness[country].tally);
  e.sort(function(a,b){
    return b[1]-a[1];
  })
  // console.log(e);
  madness[country]={
    name: e[0][0],
    value:e[0][1]
  }
  // console.log(madness[country]);
}



    let tvArray=[];

    let onlyTV=incomingData.filter(function(d,i){
      if (d.type=="TV Show"){
        return true;
      }else{
        return false;
      }
    })
    // console.log(onlyTV);
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
    // console.log("tv",tvCounter);




    let movieArray=[];

    let onlyMovie=incomingData.filter(function(d,i){
      if (d.type=="Movie"){
        return true;
      }else{
        return false;
      }
    })
    // console.log(onlyMovie);
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
    // console.log("movie",movieCounter);







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
            .on("mousemove",function(d){
              d3.select(this).attr("fill","grey").attr("stroke-width",2);
                tooltip.classed("hidden", false)
                       .style("top", (d3.event.pageY) + "px")
                       .style("left", (d3.event.pageX + 10) + "px")
                       .html(d.properties.name+": "+madness[d.properties.name]["name"])
                       // .text("hi")
            })
            .on("mouseout",function(d,i){
                d3.select(this).attr("fill",function(d,i){
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
                }).attr("stroke-width",1);
                tooltip.classed("hidden", true);
            });

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

    var tooltip = d3.select("div.tooltip");
    var tooltip1 = d3.select("div.tooltip1");
    var tooltip2 = d3.select("div.tooltip2");

    d3.queue()
  .defer(d3.json, "data/countries.geojson")
  // .defer(d3.csv, "world-country-names.csv")
  .await(ready);


function ready(error, world, names) {
  if (error) throw error;
  var countries1 = topojson.feature(world, world.objects.countries).features;
    countries = countries1.filter(function(d) {
    return names.some(function(n) {
      if (d.id == n.id) {
        return d.properties.name = n.name;
      }
    })});
  }


  // for the selection
//   d3.selectAll(".checkboxworld").on("change",updateWorld);
//
//   function worldSelection(){
//     let worldselection=[]
//   d3.selectAll(".checkboxworld").each(function(d){
//       checkboxSelected=d3.select(this);
//       // console.log(checkboxSelected);
//       if(checkboxSelected.property("checked")){
//         // console.log("hhhhh");
//         selection.push(checkboxSelected.property("name"))
//         // console.log(selection);
//       }
//     })
//   // [ "Adventure Movie", "Drama" ]
//   return worldselection;
// }
//
// function filterCurrentSelection(datapoint, currentSel){
//   // console.log(currentSel);
//   for(let i=0;i< datapoint.listed_in.length;i++){
//     if (currentSel.includes(datapoint.listed_in[i])==true){
//       return true
//     }else if(i==datapoint.listed_in.length){
//       return false
//     }
//   }
// }
//
// function assignKeysForWorld(d,i){
//   return d.show_id;
// }












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
      // console.log(tvData);
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
          .style("font-family","'Bebas Neue', cursive")
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
    let timeScale= d3.scaleTime().domain([1925,2020]).range([padding,w-padding]);

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
        if (currentSel.includes(datapoint.listed_in[i])==true){
          return true
        }else if(i==datapoint.listed_in.length){
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
      // console.log(currentSel);


      let yearDataGroups= yearGraphGroup.selectAll(".datagroup")
        .data(incomingData.filter(function(d, i){
          // console.log(d);
          return filterCurrentSelection(d, currentSel)
        }),assignKeys);

        let enteringElements=yearDataGroups.enter();
        let exitingElements=yearDataGroups.exit();



        let enteringElementGroups=enteringElements.append("g")
          .attr("class","datagroup")
          .attr("transform",function(d){
            let x=xScale(d.release_year);
            let y=h/2;
            return "translate("+x+","+y+")"
          })
            // .text(d.listed_in+" --- "+d.title)

          enteringElementGroups
          .on("mouseover",function(d,i){
            tooltip2.classed("hidden", false)
                   .style("top", (d3.event.pageY) + "px")
                   .style("left", (d3.event.pageX -10) + "px")
                   .html(d.listed_in+" --- "+d.title)
            // let mouseInYear=d3.mouse(yearviz.node())
            // yearTextElement
            // .transition()
            // .text(d.listed_in+" --- "+d.title)
            //
            // .attr("x",200)
            // .attr("y",mouseInYear[1])

            // datagroups.attr("opacity",0.1)
            d3.select(this).select("circle")
            .transition()
            .attr("r",15)
            .attr("fill","red")
          })
          .on("mouseout",function(d,i){
            // textElement.text("")
            tooltip2.classed("hidden", true);
            d3.select(this).select("circle")
            .transition()
            .attr("r",4)
            .attr("fill","white")
          })
      ;




      let yearCircles=enteringElementGroups.append("circle")
      .attr("class","yearDatapoint")
      .attr("r",4)
      .attr("fill","white")
      ;


    incomingData=incomingData.map(function(datapoint){
      datapoint.x= xScale(datapoint.release_year);
      datapoint.y= h/2;
      return datapoint;
    })

    // update the location using simulation
    let simulation=d3.forceSimulation(incomingData.filter(function(d, i){
      // console.log(d);
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
      enteringElementGroups
        .attr("transform",function(d){
          let x=xScale(d.release_year);
          let y=h/2
          return "translate("+d.x+","+d.y+")"
        })
    }

    //
    exitingElements.select("circle")
    .transition()
    .duration(1000)
    .attr("fill","red")
    .attr("r",0)
    ;

    exitingElements
    .transition()
    .delay(1000)
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



    let urArray=[];
    let onlyur=incomingData.filter(function(d,i){
      if (d.rating=="TV-Y7-FV"){
        return true;
      }else{
        return false;
      }
    })
    // console.log(onlyur);
    for(i=0;i<onlyur.length;i++){
      let urElement=[].concat(onlyur[i].listed_in);
      urArray.push(urElement);
    }

    let urAll=urArray.flat();

    let urCounter=urAll.reduce(function(acc,curr){
      if (typeof acc[curr]=='undefined'){
        acc[curr]=1;
      }else {
        acc[curr] += 1;
      }
      return acc;
    },{});

    console.log("ur",urCounter);



    // d3.json("data/rateData.json").then(function(rateData){
    //   let rateRec=rateviz.append("rect")
    //   .attr("class","rateRec")
    //   .attr("width",w-padding*2)
    //   .attr("height",200)
    //   .attr("x",padding)
    //   .attr("y",(h-padding*2)/2)
    //   .attr("fill","white")
    //   ;
    //
    //   let eachRateGroup=rateRec.append("g")
    //     .attr("class","eachRateGroup")
    //
    //   let eachRateRec=eachRateGroup.append("rect")
    //     .attr("class","eachRateRec")
    //     .attr("height",200)
    //     .attr("width",function(d,i){
    //
    //       return (w-padding*2)*(d[i].mostNumber/d[i].total);
    //     })
    //     .attr("fill",function(d){
    //       return d.color;
    //     })
    //     .attr("x",function(d,i){
    //       for (m=0;m<d.length;m++){
    //         console.log("kkk");
    //       }
    //     })
    // })

    var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom,
    innerRadius = 80,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border


    function outStrech(d,i){
      // console.log(d);
      return d["data"]["mostNumber"]/d["data"]["total"]*400
    }




    d3.json("data/rateData.json").then(function(rateData){
      let ratepie= d3.pie()
      .value(function(d){
        return d.total;
      })
    console.log(ratepie(rateData));

      let graph=rateviz
        .append("g")


        // .attr("width", width + margin.left + margin.right)
        // .attr("height", height + margin.top + margin.bottom)
        // .attr("transform", "translate(" + width / 2 + "," + ( height/2+100 )+ ")"); // Add 100 on Y translation, cause upper bars are longer

      var rateX = d3.scaleLinear()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
                // This does nothing ?
      .domain( [0,6234] ); // The domain of the X axis is the list of states.

  // Y scale
  var rateY = d3.scaleRadial()
        .range([innerRadius, outerRadius])   // Domain will be define later.
        .domain([0, 2027]); // Domain of Y is from 0 to the max seen in the data




  let arcProjection=d3.arc()    // imagine your doing a part of a donut plot
  let arcMaker=arcProjection
    .innerRadius(innerRadius)
    .outerRadius(outStrech)
    .startAngle(function(d,i){
      return d.startAngle;
    })
    .endAngle(function(d) {
      return d.endAngle ; })
    .padAngle(0.01)
    .padRadius(innerRadius)

        // Add bars
  let rateGraph=graph.append("g")
    .selectAll("path")
    .data(ratepie(rateData))
    .enter()
    ;

    rateGraph.append("circle")
    .attr("r",400)
    .attr("fill","black")
    .attr("x",w/2)

    rateGraph.append("circle")
    .attr("r",80)
    .attr("fill","red")
    .attr("x",w/2)

    rateGraph
    .append("path")
      .attr("fill", function(d){
        // console.log(d["data"]["rate"]);
        return d["data"]["color"]
      })
      .attr("d",arcMaker )
      .attr("stroke","red")
      // .text(function(d){
      //   return d["data"]["rate"]
      // })
      .on("mouseover",function(d,i){
        tooltip1.classed("hidden", false)
               .style("top", (d3.event.pageY) + "px")
               .style("left", (d3.event.pageX + 10) + "px")
               .html(d["data"]["name"]+": "+d["data"]["mostListed"]+" ("+d["data"]["mostNumber"]+"/"+d["data"]["total"]+")")
        // console.log(d3.mouse(rateviz.node()));
        let mouseInRate=d3.mouse(rateviz.node())
        // rateTextElement
        // .transition()
        // // .text(d["data"]["name"]+": "+d["data"]["mostListed"])
        // .attr("x",1370)
        // .attr("y",820)
        d3.select(this)
        .transition()
        .duration(500)
        // .attr("width",30)
        // .attr("x",-5)
        .attr("fill","red")
        // console.log(this);

      })
      .on("mouseout",function(d,i){
        // textElement.text("")
        d3.select(this)
        .transition()
        // .select("path")
        // .attr("width",20)
        // .attr("x",0)
        .attr("fill", function(d){
          // console.log(d);
          return d["data"]["color"]
        })
        tooltip1.classed("hidden", true);
      })

      graph.attr("transform","translate("+w/2+","+420+")")

      rateGraph.append("text")
      .text(function(d){
        console.log(d);
        return d["data"]["rate"]
      })
      .attr("transform",function(d){
        return "translate(" + arcMaker.centroid(d) + ")";
      })
      .attr("fill","white")
      .style("text-anchor", "middle")
      .style("font-family","'Bebas Neue', cursive")
      .style("font-size",22)





    })






  })
})
