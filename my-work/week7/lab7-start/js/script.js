console.log("\n\n\nWelcome!\n\n\n");
console.log("script runs.");
console.log("do we have data?");
console.log("data:", typeof data !== 'undefined' ? data : "nothing here");
console.log(typeof data !== 'undefined' ? "seems like it ;-) it comes from the dataManager.js script." : "...damnit! let's see what is going wrong in the dataManager.js script.");



let w = 800;
let h = 500;
let padding = 50;


let viz = d3.select("#container")
	.append("svg")
	.style("width", w)
	.style("height", h);




let allNames = data.map(function(d) {
	return d.key
});

console.log(allNames);
let xScale = d3.scaleBand()
	.domain(allNames)
	.range([padding, w - padding])
	.paddingInner(0.1);
let xAxis = d3.axisBottom(xScale)
xAxis.tickFormat(d => {
	return data.filter(dd => dd.key == d)[0].name;
});
// xAxis.tickFormat(restyleTick);
//
//
//
// function restyleTick(tickValue){
// console.log("_");
// console.log("current",tickValue);
//
//   let coData=data.filter(function(d,i){
//     if (d.key==tickValue){
//       return true;
//     }else{
//       return false;
//     }
//   });
//
// let datapoint= coData[0];
// console.log(datapoint);
// let emoji= datapoint.name;
//
// console.log("coData",coData);
//   return emoji;
// }




let xAxisGroup = viz.append("g").classed("xAxis", true);
xAxisGroup.call(xAxis);
xAxisGroup.selectAll("line").remove();
xAxisGroup.attr("transform", "translate(0," + (h - padding) + ")")
xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

let yMax = d3.max(data, function(d) {
	return d.value
});
yDomain = [0, yMax];
let yScale = d3.scaleLinear().domain(yDomain).range([0, h - padding * 2]);




// the ACTUAL GRAPH
let graphGroup = viz.append("g").classed("graphGroup", true);



let elementsForPage = graphGroup.selectAll(".datapoint").data(data);
console.log("D3's assessment of whats needed on the page:", elementsForPage);

let enteringElements = elementsForPage.enter();
let exitingElements = elementsForPage.exit();
console.log("enteringElements", enteringElements);
console.log("exitingElements", exitingElements);

let enteringDataGroups = enteringElements.append("g").classed("datapoint", true);
enteringDataGroups.attr("transform", function(d, i) {
	return "translate(" + xScale(d.key) + "," + (h - padding) + ")";
});
enteringDataGroups
	.append("rect")
	.attr("width", function() {
		return xScale.bandwidth();
	})
	.attr("height", function(d, i) {
		return yScale(d.value);
	})
	.attr("y", function(d, i) {
		return -yScale(d.value);
	})
	.attr("fill", "black");



function vizAdd() {

		console.log("new data", data)

		allNames = data.map(function(d) {
			return d.key
		});

		xScale.domain(allNames)
  	.range([padding, w - padding])
  	.paddingInner(0.1);

		xAxis = d3.axisBottom(xScale);
		xAxis.tickFormat(d => {
			return data.filter(dd => dd.key == d)[0].name;
		}); //
		xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);

		yMax = d3.max(data, function(d) {
			return d.value
		});
		yDomain = [0, yMax + yMax * 0.1];
		yScale.domain(yDomain);

		console.log("new data", data)

		elementsForPage = graphGroup.selectAll(".datapoint").data(data);
		console.log(elementsForPage);

		enteringElements = elementsForPage.enter();
		exitingElements = elementsForPage.exit();

		elementsForPage.attr("transform", function(d, i) {
			return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
		});


		elementsForPage.transition().duration(1000).attr("transform", function(d, i) {
			return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
		});



		elementsForPage.select("rect")
			.transition()
			.delay(1000)
			.duration(1000)
			.attr("width", function() {
				return xScale.bandwidth();
			})
			.attr("y", function(d, i) {
				return -yScale(d.value);
			})
			.attr("height", function(d, i) {
				return yScale(d.value);
			});


		console.log("okok");

		let incomingDataGroups = enteringElements
			.append("g")
			.classed("datapoint", true);
		// position the groups:
		incomingDataGroups.attr("transform", function(d, i) {
			return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
		});
		// and append rectangles
		incomingDataGroups
			.append("rect")
			.attr("width", function() {
				return xScale.bandwidth();
			})
			.attr("y", function(d, i) {
				return -yScale(d.value);
			})
			.attr("height", function(d, i) {
				return yScale(d.value);
			})
			.attr("fill", "black");


		incomingDataGroups
			.append("rect")
			.attr("y", function(d, i) {
				return 0;
			})
			.attr("height", function(d, i) {
				return 0;
			})
			.attr("width", function() {
				return xScale.bandwidth();
			})
			.attr("fill", "#F27294")
			.transition()
			.delay(800)
			.duration(800)
			.attr("y", function(d, i) {
				return -yScale(d.value);
			})
			.attr("height", function(d, i) {
				return yScale(d.value);
			})
			.attr("fill", "black");
	}




  function vizExit() {
    elementsForPage = graphGroup.selectAll(".datapoint").data(data);
		console.log(elementsForPage);

		enteringElements = elementsForPage.enter();
		exitingElements = elementsForPage.exit();

    




    exitingElements.transition().delay(800).remove();
}

function add() {
	addDatapoints(1);
	vizAdd();
}
document.getElementById("buttonA").addEventListener("click", add);

function remove() {
	removeDatapoints(1);
  vizExit();
}
document.getElementById("buttonB").addEventListener("click", remove);

function removeAndAdd() {
	removeAndAddDatapoints(1, 1);
}
document.getElementById("buttonC").addEventListener("click", removeAndAdd);

function sortData() {
	sortDatapoints();
}
document.getElementById("buttonD").addEventListener("click", sortData);

function shuffleData() {
	shuffleDatapoints();
}
document.getElementById("buttonE").addEventListener("click", shuffleData);
