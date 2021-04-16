document.addEventListener('keydown', function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 27:
            document.getElementById('closeMsg').click();
    }
});
