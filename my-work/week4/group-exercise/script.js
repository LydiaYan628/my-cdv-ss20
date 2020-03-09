let viz =d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
    .attr("width", 1500)
    .attr("height",800)
    .style("background-color","lavender")
;


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




//function to transform data into arrays and separate them
function transformData(dataToClean){
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
    //yeah


    //change the numbers of the calculator
    if(dataToClean[i].myBodyPart.includes("hand")){
      numMyHands++;
    }else if(dataToClean[i].myBodyPart.includes("face")){
      numMyFace++;
    }else if(dataToClean[i].myBodyPart.includes("hair")){
      numMyHair++;
    }else if(dataToClean[i].myBodyPart.includes("shoulder")){
      numMyShoulder++;
    }else if(dataToClean[i].myBodyPart.includes("upper body front")){
      numMyUpperFront++;
    }else if(dataToClean[i].myBodyPart.includes("upper body back")){
      numMyUpperBack++;
    }else if(dataToClean[i].myBodyPart.includes("leg")){
      numMyLeg++;
    }else if(dataToClean[i].myBodyPart.includes("hip area")){
      numMyHip++;
    }else if(dataToClean[i].myBodyPart.includes("feet")){
      numMyFeet++;
    }else if(dataToClean[i].hisherBodyPart.includes("hand")){
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


    newData.push(dataToClean[i]);
  }
  //put the processed data into arrays
  return newData;
}


// AREA design AREA
//color of my body
function myColor(newData){
  if(newData.myBodyPart.includes("hand")){
    return "red";
  } if (newData.myBodyPart.includes("face")){
    return "orange";
  }else if (newData.myBodyPart.includes("hair")){
    return "yellow";
  }else if (newData.myBodyPart.includes("shoulder")){
    return "green";
  }else if (newData.myBodyPart.includes("upper body front")){
    return "blue";
  }else if (newData.myBodyPart.includes("upper body back")){
    return "darkblue";
  }else if (newData.myBodyPart.includes("hip area")){
    return "purple";
  }else if (newData.myBodyPart.includes("leg")){
    return "pink";
  }else if (newData.myBodyPart.includes("feet")){
    return "white";
  }
}
//color of h body
function hColor(newData){
  if(newData.hisherBodyPart.includes("hand")){
    return "red";
  } if (newData.hisherBodyPart.includes("face")){
    return "orange";
  }else if (newData.hisherBodyPart.includes("hair")){
    return "yellow";
  }else if (newData.hisherBodyPart.includes("shoulder")){
    return "green";
  }else if (newData.hisherBodyPart.includes("upper body front")){
    return "blue";
  }else if (newData.hisherBodyPart.includes("hip area")){
    return "purple";
  }else if (newData.hisherBodyPart.includes("leg")){
    return "pink";
  }else if (newData.hisherBodyPart.includes("feet")){
    return "white";
  }
}



// remember to set the reandom number in an area in case of overlapping
// //my mood for position x;
// function myMood(datapoint){
//
// }
// // their mood for position y;
// function hMood(datapoint){
//
// }

function allMood(datapoint){
  let x= Math.floor(Math.random() * 36) + datapoint.myMoodAfterTheTouch*150;
  let y= Math.floor(Math.random() * 30) + datapoint.hisherMoodAfterTheTouch*80;
  return "transform","translate("+x+","+y+")";
}






//function to visualize
function gotData(incomingData){

  //watch out on this, have to announce the cleaning process first
  let transformedData= transformData(incomingData);
  console.log(incomingData);

  viz.append("text")
    .text("my mood")
    .attr("x",1300)
    .attr("y",40)
    .attr("font-size",30)
;
    viz.append("text")
      .text("his/her mood")
      .attr("x",20)
      .attr("y",780)
      .attr("font-size",30)
;
  viz.append("line")
    .attr("x1",10)
    .attr("y1",10)
    .attr("x2",10)
    .attr("y2",780)
    .attr("stroke","black")
    .attr("stroke-width",5)
;
    viz.append("line")
      .attr("x1",10)
      .attr("y1",10)
      .attr("x2",1400)
      .attr("y2",10)
      .attr("stroke","black")
      .attr("stroke-width",5)
;

//x-axis
viz.append("text")
          .attr("x",150)
          .attr("y",30)
          .attr("font-size",20)
          .text("1")
      ;
viz.append("text")
        .attr("x",150*2)
        .attr("y",30)
        .attr("font-size",20)
        .text("2")
    ;
viz.append("text")
      .attr("x",150*3)
      .attr("y",30)
      .attr("font-size",20)
      .text("3")
  ;
viz.append("text")
    .attr("x",150*4)
    .attr("y",30)
    .attr("font-size",20)
    .text("4")
;
viz.append("text")
  .attr("x",150*5)
  .attr("y",30)
  .attr("font-size",20)
  .text("5")
;
viz.append("text")
  .attr("x",150*6)
  .attr("y",30)
  .attr("font-size",20)
  .text("6")
;
viz.append("text")
  .attr("x",150*7)
  .attr("y",30)
  .attr("font-size",20)
  .text("7")
;
viz.append("text")
  .attr("x",150*8)
  .attr("y",30)
  .attr("font-size",20)
  .text("8")
;
viz.append("text")
  .attr("x",150*9)
  .attr("y",30)
  .attr("font-size",20)
  .text("9")
;
viz.append("text")
  .attr("x",150*10)
  .attr("y",30)
  .attr("font-size",20)
  .text("10")
;


//y-axis
viz.append("text")
          .attr("x",20)
          .attr("y",30)
          .attr("font-size",20)
          .text("0")
      ;

viz.append("text")
          .attr("x",20)
          .attr("y",80)
          .attr("font-size",20)
          .text("1")
      ;
viz.append("text")
        .attr("x",20)
        .attr("y",80*2)
        .attr("font-size",20)
        .text("2")
    ;
viz.append("text")
      .attr("x",20)
      .attr("y",80*3)
      .attr("font-size",20)
      .text("3")
  ;
viz.append("text")
    .attr("x",20)
    .attr("y",80*4)
    .attr("font-size",20)
    .text("4")
;
viz.append("text")
  .attr("x",20)
  .attr("y",80*5)
  .attr("font-size",20)
  .text("5")
;
viz.append("text")
  .attr("x",20)
  .attr("y",80*6)
  .attr("font-size",20)
  .text("6")
;
viz.append("text")
  .attr("x",20)
  .attr("y",80*7)
  .attr("font-size",20)
  .text("7")
;
viz.append("text")
  .attr("x",20)
  .attr("y",80*8)
  .attr("font-size",20)
  .text("8")
;
viz.append("text")
  .attr("x",20)
  .attr("y",80*9)
  .attr("font-size",20)
  .text("9")
;
viz.append("text")
  .attr("x",20)
  .attr("y",80*10)
  .attr("font-size",20)
  .text("10")
;



  let both=viz.selectAll(".both").data(incomingData).enter()
    .append("g")
      .attr("class","both")
      .attr("transform",allMood)
  ;
//attributes for my data
  both.append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",20)
    .attr("fill",myColor)
;
//attributes for h data
  both.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",15)
    .attr("height",15)
    .attr("fill",hColor)
;


}




d3.json("data.json").then(gotData);
