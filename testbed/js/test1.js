window.onload = function() {
    var button = document.getElementsByTagName("button")[0];
    // button.addEventListener('click', function() {
    //     alert('I am the button and I received a click event');
    //     return false;
    // });
    // button.onclick = function() {
    //     alert('I am the button and I received a click event');
    //     return false;
    // };
    // $('button').click(function(event) {
    //     alert('I am the button and I received a clik event');
    //     // return false;
    //     event.preventDefault();
    //     // event.stopPropagation();
    // });
    $('button').on('click', function(event) {
        alert('I am the button and I received a clik event');
        // return false;
        // event.preventDefault();
        event.stopPropagation();
    });

    var form = document.getElementsByTagName("form")[0];
    form.addEventListener('click', function() {
        alert('I am the form and I received a click event');
    });
    //
    // var div = document.getElementsByTagName("div")[0];
    // div.addEventListener('click', function() {
    //     alert('I am the div and I received a click event');
    // });
    //
    // document.body.addEventListener('click', function() {
    //     alert('I am the body and I received a click event');
    // });
    //
    // document.addEventListener('click', function() {
    //     alert('I am the document and I received a click event');
    // });
    //
    // this.addEventListener('click', function() {
    //     alert('I am the window and I received a click event');
    // });
};
