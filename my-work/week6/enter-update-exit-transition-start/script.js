let w = 960;
let h = 640;
let xPadding = 70;
let yPadding = 50;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
;






function gotData(incomingData){
  console.log("incoming",incomingData);

  //get all data into one array to get min and max
  let mergedData=d3.merge(incomingData);
  console.log("merged",mergedData);

  // x scale
  let maxX =d3.max(mergedData,function(d,i){
    return d.x;
  });

  let xScale=d3.scaleLinear().domain([0,maxX]).range([xPadding,w-xPadding]);
  let xAxisGroup= viz.append("g")
    .attr("class","xaxis");
  let xAxis = d3.axisBottom(xScale);
  xAxisGroup.call(xAxis);
  xAxisGroup.attr("transform","translate(0,"+(h-yPadding)+")");

  // yScale & yaxis
  let maxY=d3.max(mergedData,function(d,i){
    return d.y;
  });
  let yScale =d3.scaleLinear().domain([0,maxY]).range([h-yPadding,yPadding]);
  let yAxisGroup= viz.append("g").attr("class","yaxis");
  let yAxis=d3.axisLeft(yScale)
  yAxisGroup.call(yAxis);
  yAxisGroup.attr("transform","translate("+xPadding+",0)");

  //group for viz
  let vizGroup= viz.append("g").attr("class","vizGroup");


// function step1(){
//   //get data
//   let dataToShow= incomingData[0];
//   // console.log();
//
//   // viz
//   let datagroups=vizGroup.selectAll(".datagroup").data(dataToShow).enter()
//     .append("g")
//     .attr("class","datagroup")
//     ;
//
//   datagroups.append("circle")
//     .attr("r",30)
//     .attr("fill","red")
//   ;
//
//   datagroups.append("text")
//     .text(function(d,i){
//       return d.name;
//     })
//     .attr("x",-17)
//     .attr("y",17)
//     .attr("font-family","sans-serif")
//     .attr("font-size","3em")
//     .attr("fill","white")
//     ;
//
// ////why cannot write this function inside the "tranform"?
//     function getGroupLocation(d,i){
//       let x=xScale(d.x);
//       let y=yScale(d.y);
//       return "translate("+x+","+y+")";
//     }
//   datagroups.attr("transform",getGroupLocation);
// }






// function step2(){
//   //get data
//   let dataToShow= incomingData[1];
//   // console.log();
//
//   // viz
//
//   let datagroups=vizGroup.selectAll(".datagroup").data(dataToShow);
//
//
//   //we just want to change the location an dnot to append anything else
//     // .enter()
//     // .append("g")
//     // .attr("class","datagroup")
//     // ;
//
//   // datagroups.append("circle")
//   //   .attr("r",30)
//   //   .attr("fill","red")
//   // ;
//
//   // datagroups.append("text")
//   //   .text(function(d,i){
//   //     return d.name;
//   //   })
//   //   .attr("x",-17)
//   //   .attr("y",17)
//   //   .attr("font-family","sans-serif")
//   //   .attr("font-size","3em")
//   //   .attr("fill","white")
//   //   ;
//
// ////why cannot write this function inside the "tranform"?
//     function getGroupLocation(d,i){
//       let x=xScale(d.x);
//       let y=yScale(d.y);
//       return "translate("+x+","+y+")";
//     }
//   datagroups.attr("transform",getGroupLocation);
// }
//
//
// function step3(){
//   //get data
//   let dataToShow= incomingData[2];
//   // console.log();
//
//   // viz
//
//   let datagroups=vizGroup.selectAll(".datagroup").data(dataToShow);
//
//   let exitingElements= datagroups.exit();
//   exitingElements.remove();
//
//   //we just want to change the location an dnot to append anything else
//     // .enter()
//     // .append("g")
//     // .attr("class","datagroup")
//     // ;
//
//   // datagroups.append("circle")
//   //   .attr("r",30)
//   //   .attr("fill","red")
//   // ;
//
//   // datagroups.append("text")
//   //   .text(function(d,i){
//   //     return d.name;
//   //   })
//   //   .attr("x",-17)
//   //   .attr("y",17)
//   //   .attr("font-family","sans-serif")
//   //   .attr("font-size","3em")
//   //   .attr("fill","white")
//   //   ;
//
// ////why cannot write this function inside the "tranform"?
//     function getGroupLocation(d,i){
//       let x=xScale(d.x);
//       let y=yScale(d.y);
//       return "translate("+x+","+y+")";
//     }
//   datagroups.attr("transform",getGroupLocation);
// }
//
//
//
//
// function step4(){
//   //get data
//   let dataToShow= incomingData[3];
//   // console.log();
//
//   // viz
//
//   let datagroups=vizGroup.selectAll(".datagroup").data(dataToShow);
//
//   // let exitingElements= datagroups.exit();
//   // exitingElements.remove();
//   let enteringElements= datagroups.enter()
//     .append("g")
//     .attr("class","datagroup")
//     ;
//
//
//
//
//   //we just want to change the location an dnot to append anything else
//     // .enter()
//
//
//   enteringElements.append("circle")
//     .attr("r",30)
//     .attr("fill","red")
//   ;
//
//   enteringElements.append("text")
//     .text(function(d,i){
//       return d.name;
//     })
//     .attr("x",-17)
//     .attr("y",17)
//     .attr("font-family","sans-serif")
//     .attr("font-size","3em")
//     .attr("fill","white")
//     ;
//
// ////why cannot write this function inside the "tranform"?
//     function getGroupLocation(d,i){
//       let x=xScale(d.x);
//       let y=yScale(d.y);
//       return "translate("+x+","+y+")";
//     }
//   enteringElements.attr("transform",getGroupLocation);
//   datagroups.attr("transform",getGroupLocation);
// }



// document.getElementById("step1").addEventListener("click",step1);
// document.getElementById("step2").addEventListener("click",step2);
// document.getElementById("step3").addEventListener("click",step3);
// document.getElementById("step4").addEventListener("click",step4);

////why cannot write this function inside the "tranform"?


let dataIndex=0;

function visualizeData(){
  //get data
  let dataToShow= incomingData[dataIndex];
  // console.log();

function assignKeys(d,i){
  return d.name;
}

  // viz
  let datagroups=vizGroup.selectAll(".datagroup").data(dataToShow,assignKeys);

//entering elements
  let enteringElements= datagroups.enter()
    .append("g")
    .attr("class","datagroup")
    ;

  enteringElements.append("circle")
    .attr("r",30)
    .attr("fill","red")
  ;

  enteringElements.append("text")
    .text(function(d,i){
      return d.name;
    })
    .attr("x",-17)
    .attr("y",17)
    .attr("font-family","sans-serif")
    .attr("font-size","3em")
    .attr("fill","white")
    ;


    function getGroupLocation(d,i){
      let x=xScale(d.x);

      let y=yScale(d.y);

      return "translate("+x+", "+y+")"
    console.log("ok");
    }

    function getIncomingGroupLocation(d,i){
      let x=xScale(d.x);
      let y=-30;
      return "translate("+x+","+y+")"

    }

    function getExitingGroupLocation(d,i){
      let x=xScale(d.x);
      let y= h+30;
      return "translate("+x+","+y+")"
    }

    // entering elements
  enteringElements.transition().delay(500).attr("transform",getIncomingGroupLocation).attr("transform",getGroupLocation);

  // exiting elements
  let exitingElements= datagroups.exit();
  exitingElements.transition().delay(500).attr("transform",getExitingGroupLocation).remove();

  // updating elements
  datagroups.select("text").text(function(d,i){
    return d.name;
  })
  ;
  datagroups.transition().duration(500).attr("transform",getGroupLocation);
}




document.getElementById("step1").addEventListener("click",function(){
  dataIndex=0;
  visualizeData();
});

document.getElementById("step2").addEventListener("click",function(){
  dataIndex=1;
  visualizeData();
});

document.getElementById("step3").addEventListener("click",function(){
  dataIndex=2;
  visualizeData();
});

document.getElementById("step4").addEventListener("click",function(){
  dataIndex=3;
  visualizeData();
});

document.getElementById("step5").addEventListener("click",function(){
  dataIndex=4;
  visualizeData();
});

}



d3.json("data.json").then(gotData);
