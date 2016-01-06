

/* API interface */
BI.API = function(host, port) {
    this.host = host;
    this.port = port;
}

BI.API.prototype.requestData = function(request) {
    throw "Using API interface";
}


/* Debug mock */
BI.MockAPI = function() {
    BI.API.call();
}

BI.MockAPI.prototype = Object.create(BI.API.prototype);
BI.MockAPI.prototype.requestData = function(request) {
    console.log("Data requested");
    console.log(request);
    var dimValues = [];
    var metricValues = [];
    for (var i = 0; i < 3; i++) {
        dimValues[i] = [];
        for (var j = 0; j < request.dims.length; j++) {
            dimValues[i].push(request.dims[j] + " Value " + i);
        };
        metricValues[i] = [];
        for (var j = 0; j < request.metrics.length; j++) {
            metricValues[i].push(request.metrics[j] + " Value " + i);
        };
    };
    return new BI.Data(
        dimValues,
        metricValues 
    );
}