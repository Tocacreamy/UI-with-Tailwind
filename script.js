$(document).ready(function () {
    // Default: Hide sidebar on small screens
    if ($(window).width() < 768) {
        $('#sidebar').hide();
    }

    // Toggle Sidebar on Button Click
    $('#toggle-sidebar').on('click', function () {
        $('#sidebar').toggle(300); // Slide toggle effect
    });

    // Switch Content Section based on Navigation Click
    $('ul li a').on('click', function () {
        var targetSection = $(this).data('target'); // Get the target section ID
        $('.content-section').removeClass('active-section'); // Hide all sections
        $('#' + targetSection).addClass('active-section'); // Show the selected section
    });
});