/**
 * Created by anze2 on 31. 03. 2019.
 */
/**
 * Created by anze2 on 16. 02. 2019.
 */

$(document).one('pageinit', function (e) {

    let original = prompt('Za koliko obrokov je originalni recept?');
    let your = prompt('Koliko obrokov želiš pripraviti?');
    document.getElementById("output").style.visibility = "hidden";

    $('#lbsInput').on("input", function(e) {
        if (e.keyCode === 10 || e.keyCode === 13) {
            e.preventDefault();
        }
        document.getElementById("output").style.visibility = "visible";
        let lbs = e.target.value;
        let value = lbs / original * your;
        document.getElementById("gramsOutput").innerHTML = Math.round(value);
        // document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
        // document.getElementById("ozOutput").innerHTML = lbs * 16;
    });

    $('#btn-reset').on('click', function () {
        location.reload();
    })

});



