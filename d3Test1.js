var outerWidth = window.innerWidth;
var outerHeight = window.innerHeight;
var rMin = 1; // "r" stands for radius
var rMax = 10;
var xColumn = "sepal_length";
var yColumn = "petal_length";
var rColumn = "sepal_width";
var colorColumn = "species";

var svg = d3.select("body").append("svg")
  .attr("width", outerWidth)
  .attr("height", outerHeight);

var xScale = d3.scale.linear().range([0, outerWidth]);
var yScale = d3.scale.linear().range([outerHeight, 0]);
var rScale = d3.scale.linear().range([rMin, rMax]);
var colorScale = d3.scale.category10();

function render(data){
  xScale.domain(d3.extent(data, function (d){ return d[xColumn]; }));
  yScale.domain(d3.extent(data, function (d){ return d[yColumn]; }));
  rScale.domain(d3.extent(data, function (d){ return d[rColumn]; }));

  var circles = svg.selectAll("circle").data(data);
  circles.enter().append("circle");
  circles
    .attr("cx",      function (d){ return       xScale(d[xColumn]);     })
    .attr("cy",      function (d){ return       yScale(d[yColumn]);     })
    .attr("r",       function (d){ return       rScale(d[rColumn]);     })
    .attr("stroke",    function (d){ return   colorScale(d[colorColumn]); });

  circles.exit().remove();
}

function type(d){
  d.sepal_length = +d.sepal_length;
  d.sepal_width  = +d.sepal_width;
  d.petal_length = +d.petal_length;
  d.petal_width  = +d.petal_width;
  return d;
}

d3.csv("irisData.csv", type, render);