console.log("ok");

let data=








// 处理数据
function averageData(data){
  let newData=[];
  let keys=Object.keys(data[0]);
  for(let i=0; i<keys.length; i++){
    let key=keys[i];
    let sum=0;
    let num=0;
    for(let j=0; j<data.length; j++){
      let datum= data[j];
      if (key in datum){
        sum+=datum[key];
        num++;
      }
    }
    let avg=sum/num;
    if (!isNaN(avg)){
      let newDataPoint={ "name": key,"average" : avg, "numMeasurements": num};
      newData.push(newDataPoint);
    }
  }
  return newData;
}



// take the average number
console.log(data);
let transformedData= averageData(data);
console.log(transformedData);



// for cycle, visualizing the calulated data
for( let i=0; i<transformedData.length; i++){

let datapoint= transformedData[i];
console.log(datapoint.average);

let bar= document.createElement("div");
bar.className="bar";
bar.style.width= datapoint.average*80+"px";
bar.style.backgroundColor= rgb(datapoint.average/10*255,0,datapoint.average/10*255);
bar.innerHTML=datapoint.name;

document.getElementById("box").appendChild(bar);
}
