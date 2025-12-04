jQuery(document).ready(function ($) {

  //  for Hamberger Menu

  let hambugerMenu = () => {
    let burgerButton = $('#hamburger');
    let toggleMenu = $('#site-navigation');

    burgerButton.on('click', function () {
      $(this).toggleClass('active');
      toggleMenu.toggleClass('active');
    });
  }

  hambugerMenu();

});
