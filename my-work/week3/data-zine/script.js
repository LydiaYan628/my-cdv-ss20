let viz=d3.select("#viz-container")
 .append("svg")
   .attr("id","viz")
   .attr("width",1500)
   .attr("height",1200)

d3.json("data.json").then(gotData)

// this is the position of each day
function yposition1(datapoint){

  console.log(datapoint.who);
  if (datapoint.who=="mom"){
    return 200;
  }else if(datapoint.who=="dad"){

    return 400;
  }else if(datapoint.who=="grandma"){

    return 600;
  }
}

function who(datapoint){
  if (datapoint.who=="mom"){
    return "mom";
  }else if(datapoint.who=="dad"){

    return "dad";
  }else if(datapoint.who=="grandma"){

    return "grandma";
  }
}

// function whonum(datapoint){
//   let m=0, d=0, g=0;
//   if (datapoint.who=="mom"){
//     m++;
//     return m;
//   }else if(datapoint.who=="dad"){
//     d++;
//     return d;
//   }else if(datapoint.who=="grandma"){
//     g++
//     return g;
//   }
// }




function yposition2(datapoint){
  if (datapoint.purpose=="kiss & hug"){
    return 100;
  }else if (datapoint.purpose=="health check"){
    return 200;
  }else if (datapoint.purpose=="show intimacy"){
    return 300;
  }else if (datapoint.purpose=="collaboration"){
    return 400;
  }else if (datapoint.purpose=="accidental touch"){
    return 500;
  }else if (datapoint.purpose=="joking"){
    return 600;
  }else if (datapoint.purpose=="draw my attention"){
    return 700;
  }
}

function why(datapoint){
  if (datapoint.purpose=="kiss & hug"){
    return "kiss & hug";
  }else if (datapoint.purpose=="health check"){
    return "health check";
  }else if (datapoint.purpose=="show intimacy"){
    return "show intimacy";
  }else if (datapoint.purpose=="collaboration"){
    return "collaboration";
  }else if (datapoint.purpose=="accidental touch"){
    return "accidental touch";
  }else if (datapoint.purpose=="joking"){
    return "joking";
  }else if (datapoint.purpose=="draw my attention"){
    return "draw my attention";
  }
}

function linecolor(datapoint){
  let linecolor= "rgb("+datapoint.myMoodAfterTheTouch*25+",0,0)";
  return linecolor;
  console.log(color);
}

function lineweight(datapoint){
  let lineweight= datapoint.hisherMoodAfterTheTouch*2;
  return lineweight;
}

function gotData(incomingData){
  console.log(incomingData);

  viz.selectAll("#who").data(incomingData).enter()
        .append("text")
          .text(who)
          .attr("id","who")
          .attr("x",100)
          .attr("y",yposition1)
          .attr("font-size",50)
          .attr("font-family","Rockwell")
  ;

  viz.selectAll("#why").data(incomingData).enter()
    .append("text")
      .text(why)
      .attr("id","why")
      .attr("x",1000)
      .attr("y",yposition2)
      .attr("font-size",30)
      .attr("font-family","Rockwell")
;

viz.selectAll("#line").data(incomingData).enter()
    .append("line")
      .attr("id","line")
      .attr("x1",950)
      .attr("y1",yposition2)
      .attr("x2",350)
      .attr("y2",yposition1)
      .attr("stroke",linecolor)
      .attr("stroke-width",lineweight)

;




}
