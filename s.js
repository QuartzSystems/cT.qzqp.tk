(function() {
    console.log("");
    $.get("d.json", function(data) {
        console.log("z");
        if(typeof data == "string") {
            data = JSON.parse(data);
        }
        var dat = data;
        for(var d in dat) {
            $('#cardboard').append("<div class='col s12 m6'><div class='card-panel'><a href='" + dat[d].link + "'><h4>" + d + "</h4></a><br/><p>" + dat[d].desc + "</p></div></div>");
        }
    });
})();