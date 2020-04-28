let w=1583.33;
let h=876.67;

let worldviz = d3.select("#worldPage").append("svg")
  .style("width",w)
  .style("height",h)
  ;

let tvmviz = d3.select("#TVMoviePage").append("svg")
  .style("width",w)
  .style("height",h)
  ;

let yearviz = d3.select("#releasedYearPage").append("svg")
    .style("width",w)
    .style("height",h)
    ;

let rateviz = d3.select("#ratePage").append("svg")
  .style("width",w)
  .style("height",h)
  ;
