let viz=d3.select("#container")
  .append("svg")
    .attr("width",2400)
    .attr("height",800)
    // .style("background-image","url("mid.png")")

// // change it with the svg file
// viz.append("svg:image")
//   .attr("xlink:href","front.png")
//   .attr("x",-50)
//   .attr("y",200)
//   .attr("width",512)
//   .attr("height",512)
//
// viz.append("svg:image")
//   .attr("xlink:href","back.png")
//   .attr("x",250)
//   .attr("y",200)
//   .attr("width",512)
//   .attr("height",512)
//
//

// let testString = 'first line
// 1.5 line
// second line';
// let testString = 'first line
// second line';
// AREA external svg AREA









// AREA AREA AREA Data Processing AREA AREA AREA
//AREA calculator AREA
let numMyHands=0;
let numMyFace=0;
let numMyShoulder=0;
let numMyHair=0;
let numMyUpperFront=0;
let numMyUpperBack=0;
let numMyLeg=0;
let numMyHip=0;
let numMyFeet=0;

let numHHands=0;
let numHFace=0;
let numHShoulder=0;
let numHHair=0;
let numHUpperFront=0;
let numHLeg=0;
let numHHip=0;
let numHFeet=0;

let numMom =0;
let numDad=0;
let numGrandma=0;

// dealing with data
  function transformData(dataToClean){
    // console.log(dataToClean);
  //making arrays
    let newData=[];

    for(let i=0; i<dataToClean.length;i++){
      console.log("loop=",i);
      console.log(dataToClean[i]);
      console.log("My",dataToClean[i].myBodyPart);
      console.log("His/her",dataToClean[i].hisherBodyPart);

      //split the words with ",", and delete the space between
      dataToClean[i].myBodyPart=dataToClean[i].myBodyPart.replace(/, /g,",").split(",");
      dataToClean[i].hisherBodyPart=dataToClean[i].hisherBodyPart.replace(/, /g,",").split(",");
      dataToClean[i].who=dataToClean[i].who.replace(/, /g,",").split(",");
      //yeah


      // count thing because we need the counted elements later

      if(dataToClean[i].who.includes("mom")){
          numMom++;
        }else if(dataToClean[i].who.includes("dad")){
          numDad++;
        }else if(dataToClean[i].who.includes("grandma")){
          numGrandma++;
        }




      // console.log(numMyHands);
      newData.push(dataToClean[i]);
    }


    //put the processed data into arrays
    return newData;
  }

// // transform the time in to mm.dd
// let timeParseFunction= d3.timeParse("%B"+"%d");
//
// function timeMapFunction(datapoint){
//   datapoint.date = timeParseFunction(datapoint.date);
//   return datapoint;
// }
//
//
//   function transformTime(timeToClean){
//     let timeCorrected=timeToClean.map(timeMapFunction);
//
//     return timeCorrected;
//
//   }

// AREA number area
function myNumber(cleanedData){

        //change the numbers of the calculator
        if(datapoint.myBodyPart.includes("hand")){
          numMyHands++;
        }else if(datapoint.myBodyPart.includes("face")){
          numMyFace++;
        }else if(datapoint.myBodyPart.includes("hair")){
          numMyHair++;
        }else if(datapoint.myBodyPart.includes("shoulder")){
          numMyShoulder++;
        }else if(datapoint.myBodyPart.includes("upper body front")){
          numMyUpperFront++;
        }else if(datapoint.myBodyPart.includes("upper body back")){
          numMyUpperBack++;
        }else if(datapoint.myBodyPart.includes("leg")){
          numMyLeg++;
        }else if(datapoint.myBodyPart.includes("hip area")){
          numMyHip++;
        }else if(datapoint.myBodyPart.includes("feet")){
          numMyFeet++;
        }
}

function hNumber(datapoint){
 if(datapoint.hisherBodyPart.includes("hand")){
    numHHands++;
  }else if(datapoint.hisherBodyPart.includes("face")){
    numHFace++;
  }else if(datapoint.hisherBodyPart.includes("hair")){
    numHHair++;
  }else if(datapoint.hisherBodyPart.includes("shoulder")){
    numHShoulder++;
  }else if(datapoint.hisherBodyPart.includes("upper body front")){
    numHUpperFront++;
  }else if(datapoint.hisherBodyPart.includes("hip")){
    numHHip++;
  }else if(datapoint.hisherBodyPart.includes("leg")){
    numHLeg++;
  }else if(datapoint.hisherBodyPart.includes("feet")){
    numHFeet++;
  }
}

// function whoNumber(datapoint){
// if(datapoint.who.includes("mom")){
//     numMom++;
//   }else if(datapoint.who.includes("dad")){
//     numDad++;
//   }else if(datapoint.who.includes("grandma")){
//     numGrandma++;
//   }
// }
  // sdfaf

// console.log("numMyLeg");



//change the date into mm/dd
function dateMark(datapoint){
  if (dataToClean.date== "2020-02-23T16:00:00.000Z"){
    return "Feb.23";
  }else if(dataToClean.date=="2020-02-24T16:00:00.000Z"){
    return "Feb.24";
  }else if(dataToClean.date=="2020-02-25T16:00:00.000Z"){
    return "Feb.25";
  }else if(dataToClean.date=="2020-02-26T16:00:00.000Z"){
    return "Feb.26";
  }else if(dataToClean.date=="2020-02-27T16:00:00.000Z"){
    return "Feb.27";
  }else if(dataToClean.date=="2020-02-28T16:00:00.000Z"){
    return "Feb.28";
  }else if(dataToClean.date=="2020-02-29T16:00:00.000Z"){
    return "Feb.29";
  }
}

// color of the rectangles for each date
function dateColor(datapoint){
  if (dataToClean.date== "2020-02-23T16:00:00.000Z"){
    return "red";
  }else if(dataToClean.date=="2020-02-24T16:00:00.000Z"){
    return "orange";
  }else if(dataToClean.date=="2020-02-25T16:00:00.000Z"){
    return "yellow";
  }else if(dataToClean.date=="2020-02-26T16:00:00.000Z"){
    return "green";
  }else if(dataToClean.date=="2020-02-27T16:00:00.000Z"){
    return "blue";
  }else if(dataToClean.date=="2020-02-28T16:00:00.000Z"){
    return "purple";
  }else if(dataToClean.date=="2020-02-29T16:00:00.000Z"){
    return "pink";
  }
}


// for (let i=0;i<incomingData.length;i++){
//   let element= transformedData[i];
// }
// function everyHItem(element){
//   console.log("element is ",element);
// }
// transformedData.forEach(everyHItem)


// give color to each circle
// function hTouchColor(incomingData){
//     let cleanedData= transformData(incomingData);
//
// }
//








































function gotData(incomingData){
    let transformedData= transformData(incomingData);
    // let transformedTime= transformTime(incomingData);
    // console.log(transformedTime);



    console.log(numMom);

// PART this is the my body data part PART
viz.selectAll(".touches").data(transformedData).enter()
  .append("circle")
    .attr("class","touches")
    .attr("cx",300)
    .attr("cy",100)
    .attr("r",10)
    .attr("fill","red")




// adding front image on page
    // viz.append("g").html(front)
    //   .attr("x",100)
    //   .attr("y",400)
    //
    // viz.append("g").html(back)
    //     .attr("x",300)
    //     .attr("y",400)

// PART this is the who part PART
// let who=viz.append('image')

  viz.append('image').attr("xlink:href","../icon/mom.png")
  .attr("x",800)
  .attr("y",50)
  .attr("width",160)
  .attr("height",240)
  // .attr("transform", "scale("+  (numMom/numMom)   +")")
  // .style("border","5px solid black")
;

  viz.append('image').attr("xlink:href","../icon/dad.png")
  .attr("x",800)
  .attr("y",350)
  .attr("width",160)
  .attr("height",240)
  // .attr("transform", "scale("+  (numDad/numMom)   +")")
;

  viz.append('image').attr("xlink:href","../icon/grandma.png")
  .attr("x",800)
  .attr("y",600)
  .attr("width",160)
  .attr("height",240)
;



// PART this is the his/her body part part
// let bigCircle= viz.append("circle")
//   .attr("cx",900)
//   .attr("cy",500)
//   .attr("r",250)
//   .attr("fill","gray")
//
// bigCircle.selectAll(".hTouch").data(transformedData).enter()
//   .append("circle")
//     .attr("class","hTouch")
//     .attr("cx",0)  //.attr("cx",randomXInCircle)
//     .attr("cy",0)//.attr("cy",randomYInCircle)
//     .attr("r",20)
//     .attr("fill",hTouchColor)

}











d3.json("data.json").then(gotData);
