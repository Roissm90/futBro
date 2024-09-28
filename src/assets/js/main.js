/* // Event to close all the dropdowns (FAQ, language menu, selects...)  
// when clicking outside them
$(window).click(function() {
    $('.dropdown').removeClass('open')
    $('.input.input-select').removeClass('open')
});

// Event to toggle opening of the mobile navbar menu
$('.navbar-togglebar').on('click', function() {
    // $('.navbar--panel').toggleClass('open')
    $(this).closest('.navbar').toggleClass('open')
});

// Event to toggle opening of the input select dropdown
$('.input.input-select').on('click', function() {
    event.stopPropagation();

    $(this).toggleClass('open')
    // Also close the dropdowns when clicking a select input
    $('.dropdown').removeClass('open')
});

// Event to toggle opening of the dropdown component
$('.dropdown').on('click', function(event) {
    event.stopPropagation();

    // If the dropdown is the submenu link item, 
    // we set the submenu height into the submenu background
    if ($(this).hasClass('dropdown--mainmenu')) {
        const submenu = $(this).find('.dropdown-submenu');
        const submenuBg = $(this).find('.dropdown-submenu-background');

        if (!$(this).hasClass('open')) {
            setTimeout(() => {
                const submenuHeight = submenu.outerHeight();

                submenuBg.height(submenuHeight);
            }, 10);
        }
        else {
            submenuBg.height(0);
        }
    }

    // Close all the dropdowns
    if ($(this).hasClass('open')) {
        $('.dropdown').removeClass('open')
    }
    // Open the selected dropdown and close the rest
    else {
        $('.dropdown').removeClass('open')
        $('.dropdown-submenu-background').height(0);

        $(this).addClass('open')
    }

    // Also close select dropdown when clicking a dropdown item
    $('.input.input-select').removeClass('open')
});

// Event to manage the navbar functionality depending on the page scroll
var lastScroll = 0;
$(window).scroll(function() {
    const currentScroll = $(window).scrollTop();
    const navBar = $("#desktop-navbar");
    const navBarSecondary = $("#desktop-navbar .navbar--secondary");
    const navBarMain = $("#desktop-navbar .navbar--main");
    const menuIsOpen = $('#desktop-navbar .dropdown--mainmenu').hasClass('open');

    // When scroll pass 200px the background color will be opaque
    if (lastScroll >= 200) {
        navBar.removeClass("theme--dark")
        navBarMain.addClass("theme--light")
        navBarSecondary.addClass("theme--dark")
        navBar.removeClass("navbar--transparent")

        // Show or hide the navbar if one of the menus are open
        if (!menuIsOpen) {
            // Scrolling down (hide the navbar)
            if (this.lastScroll < currentScroll) {
                navBar.addClass("hidden-animation")
            }
            // Scrolling up (show the navbar)
            else {
                navBar.removeClass("hidden-animation")
                navBar.removeClass("hidden-animation")
            }
        }
    }
    else {
        navBar.addClass("theme--dark")
        navBarMain.removeClass("theme--light")
        navBarSecondary.removeClass("theme--dark")
        navBar.addClass("navbar--transparent")
    }

    lastScroll = currentScroll;
})

// Function for delaying
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}
 */