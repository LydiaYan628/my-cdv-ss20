 console.log("hello");

//stuff we do regardless of what the data is
// 以下两种方法效果基本一样
 // console.log(document.getElementById("viz-container"));
 let viz=d3.select("#viz-container")
  .append("svg")
 // 添加svg到viz-container,成为一个element即<></>，可以是property中不存在的东西
 // 接下来的指令就指向新创造的东西 即svg, append is another select
    .attr("id","viz")
    .attr("width",600)
    .attr("height",600)
    // all the attribute was given to svg
 ;
 // 首先要声明d3 告知以下要使用d3 property
// <div id="viz-container"></div>


// Part1
// viz.attr("height",400);
//
// let myCircle=viz.append("circle")
//   .attr("cx",250)
//   .attr("cy",200)
//   // 圆心 从左上角开始
//   .attr("r",20)
//   // 半径
// ;
//
// myCircle.attr("fill","white")
//         .attr("stroke","darkblue")
//         .attr("stroke-width","10")







// load the data and do things with the data
// Part 2
let myData = [4,6,2,8,1];
// fake data

// part of part 3
function xLocation(datapoint){
  console.log(datapoint);
  // Math.return() will return a random number between 0-1
  return datapoint*40; //random number between 0-500

}

function chooseColor(datapoint){
  if (datapoint== "1"){
    return "red";
  }else{
    return "green"
  }

}

viz.selectAll("circle").data(myData).enter()
// 目前页面上什么都没有，但是我们现在select了circle，so this is an empty selection. But I want a element for each data. so D3 bind the "empty selection" to the 5 data points. so D3 create 5 circles for the data in order to make the programmer happy. But now they are just placeholders. enter() is for "enter selection", means 5 elements need to enter the page.
  .append("circle")
    .attr("cx",xLocation)
    .attr("cy",100)
    .attr("r",20)
    .attr("fill",chooseColor)
    // now there are 5 circles on the page at the same location. all attribute perform once for every element
    // D3 does the loop for us. we don't need to write the "for" loop for it. NEVER WRITE D3 IN FOR LOOP !!!!!!!! at least this semester.


// Part 3
// justChecking(x,y,z)
// 这里有问题哦。所有颜色if之后同时变化，只有datapoint=0的时候，才不执行第一个if底下的function



// Part 4

// d3.json("data.json").then(gotData);
//
//
// function gotData(incomingData){
//   console.log(incomingData);
//   viz.selectAll("circle").data(incomingData).enter()
//     .append("circle")
//
//
//
// }
