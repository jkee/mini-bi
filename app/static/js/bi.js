
var BI = BI || {};

/* Data object, contains all server data for one request */
BI.Data = function (dimValues, metricValues) {
    this.dimValues = dimValues;
    this.metricValues = metricValues;
}

/* Current parameters object */
BI.Request = function (dims, metrics) {
    this.host = host;
    this.port = port;
    this.dims = dims;
    this.metrics = metrics;
}

/* Do all the job */
function doRequest(button) {
    var request = new BI.Request();
    BI.setPressedButtons(request, button);

    BI.injectSelectedDims(request);
    BI.injectSelectedMetrics(request);

    var data = api.requestData(request);
    BI.injectRows(request, data);
    BI.injectHead(request, data);
}