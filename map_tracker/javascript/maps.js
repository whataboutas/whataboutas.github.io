function MySqlDTToDate(dt) {
    //input has to be in this format: 2007-06-05 15:26:02
    return new Date(Date.UTC(dt.substring(0,4),dt.substring(5,7)-1,dt.substring(8,10),dt.substring(11,13),dt.substring(14,16),dt.substring(17,19)));
 }

function createOnOffMarker(point, quid, tid, altitude, speed, direction, dt) {
    var icon = new GIcon();
    var dat = MySqlDTToDate(dt);
    var now = new Date();
		var diff = (now.getTime()-dat.getTime())/(1000);
    //if (diff<=30) icon.image = "_img/locator_qpf.png"; else icon.image = "_img/locator_qpf_disabled.png";
    icon.image = "_img/locator_qpf.png"; // IMMER EINGESCHALTET!
    icon.iconSize = new GSize(40, 40);
    icon.iconAnchor = new GPoint(20, 20);
    icon.infoWindowAnchor = new GPoint(20, 20);

    var marker = new GMarker(point,icon);

	// this creates the pop up bubble that displays info when a user clicks on a marker
    GEvent.addListener(marker, "click", function() {
        marker.openInfoWindowHtml(
        "<table border=0 style=\"font-size:95%;font-family:arial,helvetica,sans-serif;\">"
        + "<tr><td align=right>&nbsp;</td><td>&nbsp;</td><td rowspan=2 align=right>"
        + "<img src=images/" + getCompassImage(direction) + ".jpg alt= />"
        + "</td></tr>"
        + "<tr><td colspan=2 align=center><b>" + tid +  "</b></td></tr>"
        + "<tr><td align=right>Altitude:</td><td>" + altitude +  "m</td></tr>"
        + "<tr><td align=right>Speed:</td><td>" + (speed*3600/1000) +  " km/h</td></tr>"
        + "<tr><td align=right>Direction:</td><td>" + direction +  "°</td><td>&nbsp;</td></tr>"
        + "<tr><td align=right>Time:</td><td colspan=2>" + dt +  "</td></tr>"
        + "</table>"
        );
    });

    return marker;
}

function createMarker(point, tid, altitude, speed, direction, dt) {
    var icon = new GIcon();
    icon.image = "images/locator.png";
    icon.iconSize = new GSize(40, 40);
    icon.iconAnchor = new GPoint(20, 20);
    icon.infoWindowAnchor = new GPoint(20, 20);

/*    icon.image = "images/coolblue_small.png";
    icon.shadow = "images/coolshadow_small.png";
    icon.iconSize = new GSize(12, 20);
    icon.shadowSize = new GSize(22, 20);
    icon.iconAnchor = new GPoint(6, 20);
    icon.infoWindowAnchor = new GPoint(5, 1);*/

    var marker = new GMarker(point,icon);

	// this creates the pop up bubble that displays info when a user clicks on a marker
    GEvent.addListener(marker, "click", function() {
        marker.openInfoWindowHtml(
        "<table border=0 style=\"font-size:95%;font-family:arial,helvetica,sans-serif;\">"
        + "<tr><td align=right>&nbsp;</td><td>&nbsp;</td><td rowspan=2 align=right>"
        + "<img src=images/" + getCompassImage(direction) + ".jpg alt= />"
        + "</td></tr>"
        + "<tr><td colspan=2 align=center><b>" + tid +  "</b></td></tr>"
        + "<tr><td align=right>Altitude:</td><td>" + altitude +  "m</td></tr>"
        + "<tr><td align=right>Speed:</td><td>" + (speed*3600/1000) +  " km/h</td></tr>"
        + "<tr><td align=right>Direction:</td><td>" + direction +  "°</td><td>&nbsp;</td></tr>"
        + "<tr><td align=right>Time:</td><td colspan=2>" + dt +  "</td></tr>"
        + "</table>"
        );
    });

    return marker;
}

// this chooses the proper image for our litte compass in the popup window
function getCompassImage(azimuth) {
    if ((azimuth >= 337 && azimuth <= 360) || (azimuth >= 0 && azimuth < 23))
            return "compassN";
    if (azimuth >= 23 && azimuth < 68)
            return "compassNE";
    if (azimuth >= 68 && azimuth < 113)
            return "compassE";
    if (azimuth >= 113 && azimuth < 158)
            return "compassSE";
    if (azimuth >= 158 && azimuth < 203)
            return "compassS";
    if (azimuth >= 203 && azimuth < 248)
            return "compassSW";
    if (azimuth >= 248 && azimuth < 293)
            return "compassW";
    if (azimuth >= 293 && azimuth < 337)
            return "compassNW";

    return "";
}
