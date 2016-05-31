//config.js

require.config({
  baseUrl: 'js',
  paths: {
    d3: [
      'https://d3js.org/d3.v3.min',
      'bower_components/d3/d3.min'
    ]
  }
});

require(['app']); //I don't need to specify js/ becuase js is baseUrl
