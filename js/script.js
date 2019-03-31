/**
 * Created by anze2 on 31. 03. 2019.
 */
/**
 * Created by anze2 on 16. 02. 2019.
 */

$(document).one('pageinit', function (e) {
    document.getElementById("lbsInput").value = "";

    let original = prompt('Za koliko obrokov je originalni recept?');
    let your = prompt('Koliko obrokov želiš pripraviti?');
    let value;
    document.getElementById("output").style.visibility = "hidden";

    $('#lbsInput').on("input", function(e) {
        if (e.keyCode === 10 || e.keyCode === 13) {
            e.preventDefault();
        }
        document.getElementById("output").style.visibility = "visible";
        let lbs = e.target.value;
        value = lbs / original * your;
        document.getElementById("gramsOutput").innerHTML = Math.round(value);
        // document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
        // document.getElementById("ozOutput").innerHTML = lbs * 16;
    });

    $('#select-native-1').on('change', function (e) {
        let val = $('#select-native-1').val();
        if (val==1) {
            $('#gramsOutput').html(`
            ${Math.round(value)} g <br>
            ali
            <br>
            ${Math.round(value/10)} dag
            <br>
            ali
            <br>
            ${(value/1000)} kg  `);
        }else if (val==2) {
            $('#gramsOutput').html(`
            ${Math.round(value)} dag <br>
            ali
            <br>
            ${Math.round(value*10)} g  `);
        } else {
            $('#gramsOutput').html(`
            ${(value)} kg <br>
            ali
            <br>
            ${Math.round(value*100)} dag
            <br>
            ali
            <br>
            ${Math.round(value*1000)} g`);
        }


    });

    $('#btn-reset').on('click', function () {
        $('#lbsInput').html('');
        location.reload();
    })

});



