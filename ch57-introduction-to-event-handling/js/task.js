window.onload = function () {
  ex1();
  ex2();
}

function ex1() {
    var buttons = document.querySelectorAll("#ex1 > button");
    var bt1 = buttons[0];
    var bt2 = buttons[1];
    var SMALL_WIDTH = "width: 110px;";
    var BIG_WIDTH = "width: 300px;";

    bt1.style = SMALL_WIDTH;
    bt2.style = SMALL_WIDTH;

    bt1.onclick = function () {
      this.style = BIG_WIDTH;
      bt2.style = SMALL_WIDTH;
      // allow event propagation and allow default action
    }

    bt2.addEventListener('click', function () {
      this.style = BIG_WIDTH;
      bt1.style = SMALL_WIDTH;
      // allow event propagation and allow default action
    })
}

function ex2() {
    var inputs = document.getElementById('ex2').getElementsByTagName('input');
    var inputName = inputs[0];
    var inputColor = inputs[1];

    inputName.onfocus = function () {
      this.style = "border: 2px solid blue;";
      return false; // allow event propagation and prevent default action
    };

    // Using this method, chrome shows blue & red/green colors at the same time.
    // Firefox doesn't respond at all! (IE11 works fine! In a parallel universe)
    inputName.addEventListener('focus', function () {
      this.style = "border: 2px solid blue;";
      return false; // allow event propagation and allow default action
    });

    function showValidationStatus(event) {
      this.style = this.value ? "border: 2px solid green;" : "border: 2px solid red;";
      event.stopPropagation();
      event.preventDefault();
    }

    inputName.onblur = showValidationStatus;
    inputColor.onblur = showValidationStatus;
}
