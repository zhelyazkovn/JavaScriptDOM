<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>DivsMovingInCircle</title>
  <script type='text/javascript' src='http://code.jquery.com/jquery-1.8.3.js'></script>
  <script type='text/javascript'>
      $(window).load(function () {

          var divsInDiv = document.querySelectorAll('.txtBoxRotate');

            for (var i = 0; i < divsInDiv.length; i++) {
                divsInDiv[i].style.position = 'absolute';
                divsInDiv[i].style.backgroundColor = 'red';
                divsInDiv[i].style.borderRadius = 50 + '%' + 50 + '%' + 50 + '%' + 50 + '% / ' + 60 + '%' + 60 + '%' + 60 + '%' + 60 + '%';
                divsInDiv[i].style.width = 126 + 'px';
                divsInDiv[i].style.height = 180 + 'px';
                divsInDiv[i].style.display = 'block';
            }

        // fetch all DIV.txtBoxRotate elements inside DIV#txtBoxRotateContainer
        var txt = $('#txtBoxRotateContainer .txtBoxRotate'), txtLen = txt.size();
        // utility functions to convert degrees to radians    
        var deg2rad = function (a) { return a * Math.PI / 180.0; }
        // rotation settings
        var angle = 0, speed = 1, delay = 10, r = 200;

        (function rotate() {
            for (var i = 0; i < txtLen; i++) {
                // we know how many elements we have, so we will add an even
                // amount of degrees of angle for each of them to complete a circle
                var a = angle + (i * 360 / txtLen);
                // we reposition our element by using {sin(a),cos(a)} for our initial
                // position. If you want to change direction, switch to {cos(a),sin(a)}!
                // then we multiply the x,y by our radius and add our radius to center
                // then element. You may add another offset if you want (ex: y+r+(Math.sin...)
                $(txt[i]).css({ top: r + (Math.sin(deg2rad(a)) * r), left: r + (Math.cos(deg2rad(a)) * r) });
            }
            // increment our angle and use a modulo so we are always in the range [0..360] degrees
            angle = (angle + speed) % 360;
            // after a slight delay, call the exact same function again
            setTimeout(rotate, delay);
        })();  // invoke this boxed function to initiate the rotation
    });
    </script>
</head>
<body>
  <div id="txtBoxRotateContainer">
    <div class="txtBoxRotate"></div>
    <div class="txtBoxRotate"></div>
    <div class="txtBoxRotate"></div>
    <div class="txtBoxRotate"></div>
    <div class="txtBoxRotate"></div>
</div>
</body>
</html>



