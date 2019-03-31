/**
 * Created by anze2 on 31. 03. 2019.
 */
/**
 * Created by anze2 on 16. 02. 2019.
 */

$(document).one('pageinit', function (e) {
    let original = prompt('Za koliko obrokov je originalni recept?');
    let your = prompt('Koliko obrokov želiš pripraviti?');
    document.getElementById("output").style.visibility = "visible";

    document.getElementById("lbsInput").addEventListener("input", function(e) {
        document.getElementById("output").style.visibility = "visible";
        let lbs = e.target.value;
        document.getElementById("gramsOutput").innerHTML = lbs / original * your;
        document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
        document.getElementById("ozOutput").innerHTML = lbs * 16;
    });
});



