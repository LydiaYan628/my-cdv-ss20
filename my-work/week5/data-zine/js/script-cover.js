let viz=d3.select("#container")
  .append("svg")
    .attr("width",1200)
    .attr("height",800)

viz.append("text")
  .text("Physical Contact")
  .attr("font-size",150)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","gray")
  .attr("x",0)
  .attr("y",300)
  .on('mouseover',function(){
    d3.select(this).attr("fill","yellow");
  })
  .on('mouseout',function(){
    d3.select(this).attr("fill","gray");
  })


  viz.append("text")
    .text("by. Lydia Yan")
    .attr("font-size",50)
    .attr("font-family","'Righteous', cursive")
    .attr("fill","gray")
    .attr("x",800)
    .attr("y",400)
    .on('mouseover',function(){
      d3.select(this).attr("fill","yellow");
    })
    .on('mouseout',function(){
      d3.select(this).attr("fill","gray");
    })

viz.append("text")
  .text("Description:")
  .attr("font-size",50)
  .attr("font-family","'Righteous', cursive")
  .attr("fill","gray")
  .attr("x",50)
  .attr("y",500)
  .on('mouseover',function(){
    d3.select(this).attr("fill","yellow");
  })
  .on('mouseout',function(){
    d3.select(this).attr("fill","gray");
  })

  // viz.append("div")
  //   .attr("id","wordbox")
  //   .attr("fill","gray")
  //   .attr("fill-opacity","0.5")
  //   .attr("width",1000)
  //   .attr("height",200)
  //   .attr("x",100)
  //   .attr("y",550)

let wordbox=viz.append("g")
  .attr("class","wordbox")


  wordbox.append("rect")
    .attr("fill","gray")
    .attr("fill-opacity","0.3")
    .attr("width",1000)
    .attr("height",200)
    .attr("x",100)
    .attr("y",550)
    // .attr("radius",10)

  wordbox.append("text")
    .text("Idea: During the days at home together,")
    .attr("font-family","'Righteous', cursive")
    .attr("fill","gray")
    .attr("font-size",28)
    .attr("x",110)
    .attr("y",600)
    .attr("width",1000)
    .attr("height",200)
    .on('mouseover',function(){
      d3.select(this).attr("fill","yellow");
    })
    .on('mouseout',function(){
      d3.select(this).attr("fill","gray");
    })

    wordbox.append("text")
      .text("my family and I may have more contacts than usual.")
      .attr("font-family","'Righteous', cursive")
      .attr("fill","gray")
      .attr("font-size",28)
      .attr("x",180)
      .attr("y",630)
      .attr("width",1000)
      .attr("height",200)
      .on('mouseover',function(){
        d3.select(this).attr("fill","yellow");
      })
      .on('mouseout',function(){
        d3.select(this).attr("fill","gray");
      })

      wordbox.append("text")
        .text("So I decided to do an investigation.")
        .attr("font-family","'Righteous', cursive")
        .attr("fill","gray")
        .attr("font-size",28)
        .attr("x",180)
        .attr("y",660)
        .attr("width",1000)
        .attr("height",200)
        .on('mouseover',function(){
          d3.select(this).attr("fill","yellow");
        })
        .on('mouseout',function(){
          d3.select(this).attr("fill","gray");
        })

wordbox.append("text")
          .text("Duration: Feb 23, 2020 - Feb 29, 2020")
          .attr("font-family","'Righteous', cursive")
          .attr("fill","gray")
          .attr("font-size",28)
          .attr("x",110)
          .attr("y",700)
          .attr("width",1000)
          .attr("height",200)
          .on('mouseover',function(){
            d3.select(this).attr("fill","yellow");
          })
          .on('mouseout',function(){
            d3.select(this).attr("fill","gray");
          })
  wordbox.append("text")
            .text("Technical Tool: Google Forms")
            .attr("font-family","'Righteous', cursive")
            .attr("fill","gray")
            .attr("font-size",28)
            .attr("x",110)
            .attr("y",740)
            .attr("width",1000)
            .attr("height",200)
            .on('mouseover',function(){
              d3.select(this).attr("fill","yellow");
            })
            .on('mouseout',function(){
              d3.select(this).attr("fill","gray");
            })
