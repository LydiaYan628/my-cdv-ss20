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

        // // AREA number area
        // function myNumber(cleanedData){

                //change the numbers of the calculator
                if(  dataToClean[i].myBodyPart.includes("hand")){
                  numMyHands++;
                }else if(  dataToClean[i].myBodyPart.includes("face")){
                  numMyFace++;
                }else if(  dataToClean[i].myBodyPart.includes("hair")){
                  numMyHair++;
                }else if(  dataToClean[i].myBodyPart.includes("shoulder")){
                  numMyShoulder++;
                }else if(  dataToClean[i].myBodyPart.includes("upper body front")){
                  numMyUpperFront++;
                }else if(  dataToClean[i].myBodyPart.includes("upper body back")){
                  numMyUpperBack++;
                }else if(  dataToClean[i].myBodyPart.includes("leg")){
                  numMyLeg++;
                }else if(  dataToClean[i].myBodyPart.includes("hip area")){
                  numMyHip++;
                }else if(  dataToClean[i].myBodyPart.includes("feet")){
                  numMyFeet++;
                }



         if(dataToClean[i].hisherBodyPart.includes("hand")){
            numHHands++;
          }else if(dataToClean[i].hisherBodyPart.includes("face")){
            numHFace++;
          }else if(dataToClean[i].hisherBodyPart.includes("hair")){
            numHHair++;
          }else if(dataToClean[i].hisherBodyPart.includes("shoulder")){
            numHShoulder++;
          }else if(dataToClean[i].hisherBodyPart.includes("upper body front")){
            numHUpperFront++;
          }else if(dataToClean[i].hisherBodyPart.includes("hip")){
            numHHip++;
          }else if(dataToClean[i].hisherBodyPart.includes("leg")){
            numHLeg++;
          }else if(dataToClean[i].hisherBodyPart.includes("feet")){
            numHFeet++;
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



// function appendCircle(incomingData){
//   // console.log(incomingData);
//   document.body.appendChild()
// }

// function circleX(incomingData){
//   if(datapoint.myBodyPart.includes("hand")){
//     numMyHands++;
//   }else if(datapoint.myBodyPart.includes("face")){
//     numMyFace++;
//   }else if(datapoint.myBodyPart.includes("hair")){
//     numMyHair++;
//   }else if(datapoint.myBodyPart.includes("shoulder")){
//     numMyShoulder++;
//   }else if(datapoint.myBodyPart.includes("upper body front")){
//     numMyUpperFront++;
//   }else if(datapoint.myBodyPart.includes("upper body back")){
//     numMyUpperBack++;
//   }else if(datapoint.myBodyPart.includes("leg")){
//     numMyLeg++;
//   }else if(datapoint.myBodyPart.includes("hip area")){
//     numMyHip++;
//   }else if(datapoint.myBodyPart.includes("feet")){
//     numMyFeet++;
//   }
// }


// bar graph intensity
function getGroupPosition(d,i){
  let x= (1200+i*30);
  let y= 800-50;
  return "translate("+x+","+y+")";
}

let yScale=d3.scaleLinear().domain([0,10]).range([0,750]);
function getHeight(d,i){
  return yScale(d.intensityOfTouch);
}

function getYPosition(d,i){
  return -yScale(d.intensityOfTouch);
}

function intensityColor(d,i){
  if (d.date=="2020-02-23T16:00:00.000Z"){
      return "rgb(255,200,200)";
  }else if(d.date=="2020-02-24T16:00:00.000Z"){
    return "rgb(255,158,155)";
  }else if(d.date=="2020-02-25T16:00:00.000Z"){
    return "rgb(252,96,91)";
  }else if(d.date=="2020-02-26T16:00:00.000Z"){
    return "rgb(196,27,22)";
  }else if(d.date=="2020-02-27T16:00:00.000Z"){
    return "rgb(135,16,10)";
  }else if(d.date=="2020-02-28T16:00:00.000Z"){
    return "rgb(92,14,11)";
  }else if(d.date=="2020-02-29T16:00:00.000Z"){
    return "rgb(128,75,73)";
  }
}

function myMoodX(d,i){
  let mymoodx=(1250+i*30);
  return mymoodx;
}

function myMoodY(d,i){
  let mymoody = (750-75*d.myMoodAfterTheTouch);
  return mymoody;
}

function hMoodX(d,i){
  let hmoodx=(1250+i*30);
  return hmoodx;
}

function hMoodY(d,i){
  let hmoody = (750-75*d.hisherMoodAfterTheTouch);
  return hmoody;
}






















function gotData(incomingData){
    let transformedData= transformData(incomingData);
    // let transformedTime= transformTime(incomingData);
    // console.log(transformedTime);

// console.log(incomingData);
// console.log(transformedData);
    console.log(numMom);
console.log(numDad);
    console.log(numGrandma);
    console.log("f",numMyHair);

//PART this is the my body data part PART
// hand
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",370)
    .attr("cy",440)
    .attr("r",numMyHands*15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("hand")
  .attr("x",300)
  .attr("y",450)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",64)
;

// face
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",210)
    .attr("cy",100)
    .attr("r",numMyFace*15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("face")
  .attr("x",160)
  .attr("y",120)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",64)
;
// Shoulder
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",420)
    .attr("cy",220)
    .attr("r",numMyShoulder*15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("shoulder")
  .attr("x",340)
  .attr("y",220)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",40)
;
// hair
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",510)
    .attr("cy",125)
    .attr("r",numMyHair*15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("hair")
  .attr("x",500)
  .attr("y",130)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",16)
;
// upperfront
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",220)
    .attr("cy",285)
    .attr("r",numMyUpperFront*15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("Upperfront")
  .attr("x",170)
  .attr("y",290)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",16)
;
// upper back
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",520)
    .attr("cy",285)
    .attr("r",numMyUpperBack*15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("Upperback")
  .attr("x",470)
  .attr("y",290)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",16)
;
// hip AREA
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",510)
    .attr("cy",425)
    .attr("r",numMyHip*15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("Hip")
  .attr("x",500)
  .attr("y",430)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",16)
;
// leg
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",160)
    .attr("cy",525)
    .attr("r",numMyLeg*15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("Leg")
  .attr("x",150)
  .attr("y",530)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",16)
;
// feet
viz.append("circle")
    // .attr("class","touches")
    .attr("cx",140)
    .attr("cy",745)
    .attr("r",15)
    .attr("fill","red")
    .style("opacity",0.5)
    ;
viz.append("text")
  .text("Feet")
  .attr("x",120)
  .attr("y",750)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","white")
  .attr("font-size",16)
;


// console.log(numMyFeet);




// incomingData.forEach(appendCircle);




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
  .attr("x",700)
  .attr("y",50)
  .attr("width",numMom*16)
  .attr("height",numMom*24)
  // .attr("transform", "scale("+  (numMom/numMom)   +")")
  // .style("border","5px solid black")
;

  viz.append('image').attr("xlink:href","../icon/dad.png")
  .attr("x",700)
  .attr("y",50)
  .attr("width",numDad*16)
  .attr("height",numDad*24)
  // .attr("transform", "scale("+  (numDad/numMom)   +")")
;

  viz.append('image').attr("xlink:href","../icon/grandma.png")
  .attr("x",700)
  .attr("y",50)
  .attr("width",numGrandma*16)
  .attr("height",numGrandma*24)
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

// AREA chart AREA
let datagroups= viz.selectAll(".datagroup").data(incomingData).enter()
  .append("g")
    .attr("class","datagroup")
  ;

let intensity= datagroups.append("rect")
  .attr("class","intensity")
  .attr("x",50)
  .attr("y",getYPosition)
  .attr("width",25)
  .attr("height",getHeight)
  .attr("fill",intensityColor)
  ;

  datagroups.attr("transform",getGroupPosition)


  // y axis
  let yScale=d3.scaleLinear().domain([0,10]).range([750,0])

  let yAxisGroup=viz.append("g").attr("class","yAxis");
  let yAxis= d3.axisLeft(yScale);
  yAxisGroup.call(yAxis);
  // let yAxisYPos=50;
  yAxisGroup.attr("transform","translate("+1230+",0)");


  viz.selectAll(".myMood").data(incomingData).enter()
    .append("rect")
    .attr("width",25)
    .attr("height",10)
    .attr("fill","green")
    .attr("x",myMoodX)
    .attr("y",myMoodY)

    viz.selectAll(".hMood").data(incomingData).enter()
      .append("rect")
      .attr("width",25)
      .attr("height",10)
      .attr("fill","blue")
      .attr("x",hMoodX)
      .attr("y",hMoodY)















}





d3.json("data.json").then(gotData);
