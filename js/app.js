define(['d3'], function(d3) {

  var data = [1,2,3,4,5,6];

  var svg = d3.select("#container").append("svg").attr("width", 300).attr("height", 200);

  var selection = svg.selectAll("circle").data(data);
  selection.enter().append("circle").text(function(d) {
    return d;
  })

  var data = [1,2,3,4];


  selection = svg.selectAll("circle").data(data);
  selection.enter().append("circle").text(function(d) {
    return d;
  });

  selection = svg.selectAll("circle").data(data);
  selection.enter().append("circle").text(function(d) {
    return d;
  });

  selection.exit().remove();

});
