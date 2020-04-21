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

    let show= viz.append("text")
    .text("")
    .attr("x",100)
    .attr("y",h-50)
    .attr("font-family","'Roboto Condensed', sans-serif")
    .attr("font-size",30)

    ;

    let titleArray=[];
    for (i=0;i<incomingData.length;i++){
      // console.log("test",incomingData[i].title);
      let titleElement= [].concat(incomingData[i].title);
      titleArray.push(titleElement);
    }
    console.log(titleArray);

    let titleAll=titleArray.flat();
    console.log(titleAll);

    let titleCounter=0;
    let currentTitle=titleAll[titleCounter];

    setInterval(function(){
      titleCounter++;
      if (titleCounter>titleAll.length){
        titleCounter=0;
      }
      currentTitle=titleAll[titleCounter];
      show.text(currentTitle)
      drawViz()
    },1000)

    let currentShowIndex=0;
    let currentShow= incomingData[currentShowIndex];
    function filterShow(d,i){
      if (d==currentShow){
        return true;
      }else{
        return false;
      }
    }






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
      //         // console.log(d);
      // // not working
      //         let correspondingData=incomingData.find(function(datapoint){
      //           // console.log(datapoint.country);
      //           // console.log(countryCounter);
      //           if(countryCounter==d.properties.name){
      //             return true
      //           }else{
      //             return false
      //           }
      //         })
      //         if (correspondingData!=undefined){
      //           return colorScale(correspondingData)
      //         }else{
      //           return "gray";
      //         }



      let currentCountry=d.properties.name;
      if (currentCountry=="Republic of Serbia"){
        currentCountry="Serbia"
      }else if (currentCountry=="United States of America"){
        currentCountry="United States"
      }
      let numValue=countryCounter[currentCountry];
      if(currentCountry!=undefined){
        return colorScale(numValue)
      }else if (currentCountry==currentShowData.country) {
        // console.log(currentShowData.country);
        return "red"
      }else{
        return "black";
      }
    })
    .attr("stroke", "black")
    // .attr("stroke-width", 8)
    ;

      let vizGroup=viz.append("g").attr("class","vizGroup")
    function drawViz(){

      console.log("success");

      let currentShowData=incomingData.filter(filterShow)
      return currentShowData;
      console.log(currentShowData);
}


    //
    // d3.json("countriesLatLon.json").then(function(positionData){
    //   console.log(positionData);
      // put show name into visualization
      // let show= viz.append("text")
      // .text("")
      // .attr("x",100)
      // .attr("y",h-50)
      // .attr("font-family","'Roboto Condensed', sans-serif")
      // .attr("font-size",30)
      //
      // ;
      //
      // let titleArray=[];
      // for (i=0;i<incomingData.length;i++){
      //   // console.log("test",incomingData[i].title);
      //   let titleElement= [].concat(incomingData[i].title);
      //   titleArray.push(titleElement);
      // }
      // console.log(titleArray);
      //
      // let titleAll=titleArray.flat();
      // console.log(titleAll);
      //
      // let titleCounter=0;
      // let currentTitle=titleAll[titleCounter];
      //
      // setInterval(function(){
      //   titleCounter++;
      //   if (titleCounter>titleAll.length){
      //     titleCounter=0;
      //   }
      //   currentTitle=titleAll[titleCounter];
      //   show.text(currentTitle)
      //   drawViz()
      // },1000)
      //
      // let currentShowIndex=0;
      // let currentShow= incomingData[currentShowIndex];
      // function filterShow(d,i){
      //   if (d==currentShow){
      //     return true;
      //   }else{
      //     return false;
      //   }
      // }
      //



      // let vizGroup=viz.append("g").attr("class","vizGroup")
      // function drawViz(){
      //
      //   console.log("success");
      //
      //   let currentShowData=incomingData.filter(filterShow)
      //   let dataGroup=vizGroup.selectAll(".datagroup")
      //   .data(currentShowData)
      //   console.log(currentShowData);
      //
      //   let enteringElements=dataGroup.enter()
      //   .append("g")
      //   .attr("class","datagroup")
      //   ;
      //
      //   let circles=enteringElements.append("circle")
      //   .attr("r",20)
      //   .attr("fill","yellow")
      //
      //
      //   function circleLocation(d,i){
      //     let x=projection([positionData.latitude,positionData.longitude])[0];
      //
      //     let y=projection([positionData.latitude,positionData.longitude])[1];
      //     return "translate("+x+","+y+")";
      //   }
      //
      //   enteringElements.transition().attr("transform",circleLocation);
      //
      //
      // }




    // })

})

})
