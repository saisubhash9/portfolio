$(document).ready(function() {
    // Close the navbar when a link inside it is clicked
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Close the navbar when the main content is clicked
    $('#main-content').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
});
