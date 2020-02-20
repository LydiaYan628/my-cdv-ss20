console.log("ok");

let data=[
    {
        "timestamp": "2020-02-20T01:59:20.727Z",
        "sleep": 7,
        "cookingSkills": 2,
        "beauty": 4,
        "somethingAcademical": 7,
        "watchedVideos": 10,
        "readBooks": 8,
        "personalArtworks": 4,
        "weight": 1,
        "mysteriousThingsHaveNotBeenMentioned": 1
    },
    {
        "timestamp": "2020-02-20T01:59:58.618Z",
        "sleep": 10,
        "cookingSkills": 7,
        "beauty": 1,
        "somethingAcademical": 6,
        "watchedVideos": 8,
        "readBooks": 5,
        "personalArtworks": 8,
        "weight": 7,
        "mysteriousThingsHaveNotBeenMentioned": 6
    },
    {
        "timestamp": "2020-02-20T02:06:16.836Z",
        "sleep": 10,
        "cookingSkills": 1,
        "beauty": 1,
        "somethingAcademical": 8,
        "watchedVideos": 10,
        "readBooks": 2,
        "personalArtworks": 3,
        "weight": 2,
        "mysteriousThingsHaveNotBeenMentioned": 1
    },
    {
        "timestamp": "2020-02-20T02:12:21.582Z",
        "sleep": 10,
        "cookingSkills": 9,
        "beauty": 8,
        "somethingAcademical": 10,
        "watchedVideos": 10,
        "readBooks": 9,
        "personalArtworks": 8,
        "weight": 7,
        "mysteriousThingsHaveNotBeenMentioned": 10
    },
    {
        "timestamp": "2020-02-20T02:19:18.983Z",
        "sleep": 10,
        "cookingSkills": 1,
        "beauty": 8,
        "somethingAcademical": 5,
        "watchedVideos": 10,
        "readBooks": 2,
        "personalArtworks": 1,
        "weight": 5,
        "mysteriousThingsHaveNotBeenMentioned": 8
    },
    {
        "timestamp": "2020-02-20T03:04:27.226Z",
        "sleep": 7,
        "cookingSkills": 8,
        "beauty": 1,
        "somethingAcademical": 3,
        "watchedVideos": 10,
        "readBooks": 1,
        "personalArtworks": 9,
        "weight": 7,
        "mysteriousThingsHaveNotBeenMentioned": 5
    },
    {
        "timestamp": "2020-02-20T03:07:55.222Z",
        "sleep": 10,
        "cookingSkills": 1,
        "beauty": 5,
        "somethingAcademical": 6,
        "watchedVideos": 8,
        "readBooks": 7,
        "personalArtworks": 4,
        "weight": 1,
        "mysteriousThingsHaveNotBeenMentioned": 1
    },
    {
        "timestamp": "2020-02-20T05:06:04.302Z",
        "sleep": 6,
        "cookingSkills": 1,
        "beauty": 1,
        "somethingAcademical": 10,
        "watchedVideos": 8,
        "readBooks": 9,
        "personalArtworks": 2,
        "weight": 1,
        "mysteriousThingsHaveNotBeenMentioned": 7
    },
    {
        "timestamp": "2020-02-20T06:59:51.134Z",
        "sleep": 8,
        "cookingSkills": 8,
        "beauty": 4,
        "somethingAcademical": 1,
        "watchedVideos": 10,
        "readBooks": 1,
        "personalArtworks": 6,
        "weight": 3,
        "mysteriousThingsHaveNotBeenMentioned": 5
    },
    {
        "timestamp": "2020-02-20T07:02:43.981Z",
        "sleep": 7,
        "cookingSkills": 9,
        "beauty": 4,
        "somethingAcademical": 6,
        "watchedVideos": 10,
        "readBooks": 5,
        "personalArtworks": 8,
        "weight": 8,
        "mysteriousThingsHaveNotBeenMentioned": 5
    },
    {
        "timestamp": "2020-02-20T07:04:07.244Z",
        "sleep": 6,
        "cookingSkills": 9,
        "beauty": 2,
        "somethingAcademical": 1,
        "watchedVideos": 10,
        "readBooks": 9,
        "personalArtworks": 1,
        "weight": 5,
        "mysteriousThingsHaveNotBeenMentioned": 10
    },
    {
        "timestamp": "2020-02-20T08:46:54.600Z",
        "sleep": 8,
        "cookingSkills": 9,
        "beauty": 3,
        "somethingAcademical": 7,
        "watchedVideos": 8,
        "readBooks": 3,
        "personalArtworks": 6,
        "weight": 8,
        "mysteriousThingsHaveNotBeenMentioned": 5
    },
    {
        "timestamp": "2020-02-20T08:53:05.950Z",
        "sleep": 10,
        "cookingSkills": 6,
        "beauty": 3,
        "somethingAcademical": 10,
        "watchedVideos": 6,
        "readBooks": 6,
        "personalArtworks": 2,
        "weight": 8,
        "mysteriousThingsHaveNotBeenMentioned": 10
    }
]







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
// bar.style.backgroundColor= "rgb(datapoint.average/10*255,0,datapoint.average/10*255)";
// console.log("color");
bar.innerHTML= datapoint.name;
// document.getElementByName("name").style.color="white";
//
// let barname=bar.innerHTML=datapoint.name;
// barname.style.textAlign="center";


document.getElementById("box").appendChild(bar);
}
