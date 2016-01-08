
/* Table */

BI.headTemplate = function(dims, metrics) {
    row = "<tr>";
    for (var i = 0; i < dims.length; i++) {
        row += "<th>" + dims[i] + "</th>";
    };
    for (var i = 0; i < metrics.length; i++) {
        row += "<th>" + metrics[i] + "</th>";
    };
    row += "</tr>"
    return row;
}

BI.rowTemplate = function(dims, metrics) {
    row = "<tr>";
    for (var i = 0; i < dims.length; i++) {
        row += "<td>" + dims[i] + "</td>";
    };
    for (var i = 0; i < metrics.length; i++) {
        row += "<td>" + metrics[i] + "</td>";
    };
    row += "</tr>"
    return row;
}

BI.injectRows = function(request, data) {
    var html = "";
    for (var i = 0; i < data.dimValues.length; i++) {
        html += BI.rowTemplate(data.dimValues[i], data.metricValues[i]);
    };
    $("#bi-table-body").html(html);
}

BI.injectHead = function(request, data) {
    var html = BI.headTemplate(request.dims, request.metrics);
    $("#bi-table-head").html(html);
}


/* Selected dims and metrics */

BI.injectSelectedDims = function(request) {
    var html = "";
    for (var i = 0; i < request.dims.length; i++) {
        html += '<span class="label label-primary">' + request.dims[i] + '</span> ';
    };
    $("#bi-selected-dimensions").html(html);
}

BI.injectSelectedMetrics = function(request) {
    var html = "";
    for (var i = 0; i < request.metrics.length; i++) {
        html += '<span class="label label-success">' + request.metrics[i] + '</span> ';
    };
    $("#bi-selected-metrics").html(html);
}

/* Dimensions and metrics */

BI.setPressedButtons = function(request, currentButton) {
    request.dims = this.collectPressedButtons("bi-dimensions-list", currentButton);
    request.metrics = this.collectPressedButtons("bi-metrics-list", currentButton);
}

BI.collectPressedButtons = function(id, currentButton) {
    var buttons = $("#" + id + " button");
    var active = [];
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        // we should invert current button
        // todo remove this hack
        if ((button == currentButton) ? !this.isPressed(button) : this.isPressed(button)) {
            // todo move to data-* attributes
            active.push(button.textContent);
        }
    };
    return active;
}

BI.isPressed = function(button) {
     // todo move to data-* attributes
    return button.classList.contains("active");
}