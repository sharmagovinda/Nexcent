jQuery(document).ready(function ($) {

  //  for sticky header

  const stickyHeader = function () {
    const height = $(window).scrollTop();
    const header = $('.site-header');

    if (height > 60) {
      header.addClass('stickyHeader');
    } else {
      header.removeClass('stickyHeader');
    }
  };

  const paddingEl2 = function () {
    const headerHeight = $('.site-header').innerHeight();
    $('.banner').css('padding-top', headerHeight);
  };

  stickyHeader();

  setTimeout(function () {
    stickyHeader();
    paddingEl2();
  }, 1000);

  $(window).scroll(function () {
    stickyHeader();
  });

  $(window).resize(function () {
    stickyHeader();
    paddingEl2();

    setTimeout(function () {
      stickyHeader();
      paddingEl2();
    }, 1000);
  });

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
