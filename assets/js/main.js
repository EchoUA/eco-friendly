(function ($, root, undefined) {
    var App = {
        body: $('body'),
        window: $(window),
        header: $('.page-header'),
        H: document.clientHeight,
        W: 0,
        scroll: 0,
        scrollDirection: -1,
        init: function () {
            App.H = App.window.height();
            App.W = App.window.width();
            App.scroll = App.window.scrollTop();
            this.form();
            this.body.addClass('is-load');
            this.homeResize();
            this.screen.init();
            this.mobileMenu();
            $('.product-slider').slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 5,
                infinite: true,
                focusOnSelect: true,
                arrows: true,
                nextArrow: '<button class="slick-next slick-arrow"><i class="icon-chevron-thin-right"></i></button>',
                prevArrow: '<button class="slick-prev slick-arrow"><i class="icon-chevron-thin-left"></i></button>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            centerMode: true,
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            slidesToShow: 1
                        }
                    }
                ]
            });
        },
        screen: {
            el: $('.full-screen'),
            ela: $('.full-screen-always'),
            trigerMobile: 1,
            init: function () {
                var t = this;
                t.ela.css('height', App.H);
                if (App.W > 992) {
                    t.el.css('height', App.H);
                } else {
                    t.el.css('height', 'auto');
                }
            }
        },
        mobileMenu: function () {
            var menu = document.querySelector(".mobile-menu"),
                menuBtnClose = document.querySelector(".mobile-menu_close"),
                menuBtn = document.querySelector(".mobile-menu_btn"),
                itemUses = document.querySelector(".uses"),
                itemEnagic = document.querySelector(".enagic"),
                itemCare = document.querySelector(".care"),
                itemCare1 = document.querySelector(".care1"),
                itemCare2 = document.querySelector(".care2"),
                itemCare3 = document.querySelector(".care3"),
                itemCare4 = document.querySelector(".care4"),
                backBtn = document.querySelector(".mobile-menu_back");

            function onTransitionStarn() {
                menu.classList.add("mobile-menu_animatable");
            }

            function toggleClassMenu() {
                menu.classList.toggle("mobile-menu_visible");
            }

            function removeClassMenu() {
                menu.classList.remove("mobile-menu_visible");
            }

            function onTransitionStart() {
                menu.classList.add("mobile-menu_animatable");
            }

            function onTransitionEnd() {
                menu.classList.remove("mobile-menu_animatable");
            }

            menuBtnClose.addEventListener("click", function () {
                removeClassMenu();
                onTransitionStart();
                $('body').css('overflow', 'scroll');
                $('.mobile-menu_app').removeClass('view_uses').removeClass('view_enagic').removeClass('view_care').addClass('view_main');
                $('.mobile-menu_content > nav > ul > li > ul > li').css('visibility', 'visible');
                $('.mobile-menu_content > nav > ul > li').css('visibility', 'visible');
                $('.uses > ul').css('left', '-100%');
                $('.enagic > ul').css('left', '-100%');
                $('.care > ul').css('left', '-100%');
                $('.care > a').css('display', 'block');
                $('.care1 > ul').css('left', '-100%');
                $('.care1 > a').css('display', 'block');
                $('.care2> ul').css('left', '-100%');
                $('.care2 > a').css('display', 'block');
                $('.care3 > ul').css('left', '-100%');
                $('.care3 > a').css('display', 'block');
                $('.care4 > ul').css('left', '-100%');
                $('.care5 > a').css('display', 'block');
            }, false);

            menuBtn.addEventListener("click", function () {
                toggleClassMenu();
                onTransitionStart();
                $('body').css('overflow', 'hidden');
            }, false);

            itemUses.addEventListener("click", function () {
                onTransitionStart();
                $('.mobile-menu_app').removeClass('view_main').addClass('view_uses');
                $('.uses > ul').css('left', '0');
                $('.mobile-menu_content > nav > ul > li:not(.uses)').css('visibility', 'hidden');
            }, false);

            itemEnagic.addEventListener("click", function () {
                onTransitionStart();
                $('.mobile-menu_app').removeClass('view_main').addClass('view_enagic');
                $('.enagic > ul').css('left', '0');
                $('.mobile-menu_content > nav > ul > li:not(.enagic)').css('visibility', 'hidden');
            }, false);

            itemCare.addEventListener("click", function () {
                onTransitionStart();
                $('.mobile-menu_app').addClass('view_care').removeClass('view_uses');
                $('.care > ul').css('left', '0');
                $('.care > a').css('display', 'none');
                $('.mobile-menu_content > nav > ul > li > ul > li:not(.care)').css('visibility', 'hidden');
            }, false);

            itemCare1.addEventListener("click", function () {
                onTransitionStart();
                $('.mobile-menu_app').addClass('view_care').removeClass('view_uses');
                $('.care1 > ul').css('left', '0');
                $('.care1 > a').css('display', 'none');
                $('.mobile-menu_content > nav > ul > li > ul > li:not(.care1)').css('visibility', 'hidden');
            }, false);

            itemCare2.addEventListener("click", function () {
                onTransitionStart();
                $('.mobile-menu_app').addClass('view_care').removeClass('view_uses');
                $('.care2 > ul').css('left', '0');
                $('.care2 > a').css('display', 'none');
                $('.mobile-menu_content > nav > ul > li > ul > li:not(.care2)').css('visibility', 'hidden');
            }, false);

            itemCare3.addEventListener("click", function () {
                onTransitionStart();
                $('.mobile-menu_app').addClass('view_care').removeClass('view_uses');
                $('.care3 > ul').css('left', '0');
                $('.care3 > a').css('display', 'none');
                $('.mobile-menu_content > nav > ul > li > ul > li:not(.care3)').css('visibility', 'hidden');
            }, false);

            itemCare4.addEventListener("click", function () {
                onTransitionStart();
                $('.mobile-menu_app').addClass('view_care').removeClass('view_uses');
                $('.care4 > ul').css('left', '0');
                $('.care4 > a').css('display', 'none');
                $('.mobile-menu_content > nav > ul > li > ul > li:not(.care4)').css('visibility', 'hidden');
            }, false);

            backBtn.addEventListener("click", function () {
                if ($('.mobile-menu_app').hasClass('view_care')) {
                    onTransitionStart();
                    $('.care > a').css('display', 'block');
                    $('.care > ul').css('left', '-100%');

                    $('.care1 > a').css('display', 'block');
                    $('.care1 > ul').css('left', '-100%');

                    $('.care2 > a').css('display', 'block');
                    $('.care2 > ul').css('left', '-100%');

                    $('.care3 > a').css('display', 'block');
                    $('.care3 > ul').css('left', '-100%');

                    $('.care4 > a').css('display', 'block');
                    $('.care4 > ul').css('left', '-100%');
                    $('.mobile-menu_content > nav > ul > li > ul > li:not(.uses)').css('visibility', 'visible');
                    $('.mobile-menu_app').removeClass('view_care');
                } else if ($('.mobile-menu_app').hasClass('view_uses')) {
                    onTransitionStart();
                    $('.uses > ul').css('left', '-100%');
                    $('.mobile-menu_content > nav > ul > li').css('visibility', 'visible');
                    $('.mobile-menu_app').removeClass('view_uses').addClass('view_main');
                } else if ($('.mobile-menu_app').hasClass('view_enagic')) {
                    onTransitionStart();
                    $('.enagic > ul').css('left', '-100%');
                    $('.mobile-menu_content > nav > ul > li').css('visibility', 'visible');
                    $('.mobile-menu_app').removeClass('view_enagic').addClass('view_main');
                }
            }, false);

            menu.addEventListener("transitionend", onTransitionEnd, false);

        },
        form: function () {
            var inputBox = $('.form_input'),
                selectBox = $('.form_select');

            function labelAnimation() {
                inputBox.each(function () {
                    var $self = $(this),
                        val = $self.val();
                    if (val !== "") {
                        $self.parent().addClass("is-dirty");
                    } else {
                        $self.parent().removeClass("is-dirty");
                    }
                });
            }

            function labelAnimation2() {
                selectBox.each(function () {
                    if ($(this).find('option:selected').text() == '') {
                        $(this).parent().removeClass("is-dirty");
                    } else {
                        $(this).parent().addClass('is-dirty');
                    }

                })
            }

            labelAnimation();
            labelAnimation2();

            inputBox.on("change", function () {
                labelAnimation();
            });

            selectBox.on("change", function () {
                labelAnimation2();
            })
        },
        homeResize: function () {
            if (device.desktop() && App.W > 1025) {
                App.home();
            }
        },
        home: function () {
            var $window = $(window);
            var $document = $(document);
            var $slidesContainer = $("#section-wrapp");
            var $slidesMark = $("#block-mark");
            var $slidesMarkLi = $slidesMark.find('li');
            var $slides = $slidesContainer.find('.section');
            var $slidesLength = $slides.length;
            var $currentSlide = $slides.first();
            var $blockImg = $('#block-img');
            var $blockImgItem = $blockImg.find('.block-img-item');
            var $navButtons = $slidesMark.find('a');
            //Animating flag - is our app animating
            var isAnimating = false;
            var previousIndex = 0;
            var index = 0;
            var delta = -1;
            var direction = -1;
            var blockImgState = 0;
            var headerState = false;
            //Mark flag
            var isMark = false;
            var tl = new TimelineLite();
            var tl2 = new TimelineLite();
            var tl3 = new TimelineLite();
            //The height of the window
            var pageHeight = $window.innerHeight();

            var keyCodes = {
                UP: 38,
                DOWN: 40
            };

            var slideBlock = {
                start: 2,
                end: 7
            };

            /*
             *   Adding event listeners
             * */
            if ($('body').hasClass('page-home')) {
                $window.on("mousewheel DOMMouseScroll", onMouseWheel);
                $document.on("keydown", onKeyDown);
                $slidesMarkLi.on("click", onNavButtonClick);
            }

            function onMouseWheel(event) {
                delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;
                if (delta < -1) {
                    direction = -1;
                    goToNextSlide();
                }
                else if (delta > 1) {
                    direction = 1;
                    goToPrevSlide();
                }
                event.preventDefault();
            }

            function goToPrevSlide() {
                if ($currentSlide.prev().length) {
                    goToSlide($currentSlide.prev());
                }
            }

            function goToNextSlide() {
                if ($currentSlide.next().length) {
                    goToSlide($currentSlide.next());
                }
            }

            function markVisible() {
                App.body.toggleClass('mark-visible');
            }

            function markChangeActive(index) {
                $slidesMark.find('li').eq(index).addClass('active').siblings().removeClass('active');
            }

            function markHiden() {
                for (var i = 0; i < $slidesMarkLi.length; i++) {
                    if (i >= slideBlock.start && i <= slideBlock.end) {
                        $slidesMarkLi.eq(i).addClass('visible');
                    }
                }
            }
            markHiden();

            function onNavButtonClick(event) {
                var $button = $(this),
                    activeSlide = $slidesContainer.find('.section-active'),
                    activeSlideIndex = activeSlide.index(),
                    slideIndex = $button.index(),
                    $newSlide = $slides.eq(slideIndex);
                goToSlide($newSlide);
                var s;
                if (activeSlideIndex > index) {
                    console.log("крутиться верх");
                    console.log("activeSlideIndex > index");
                    console.log(activeSlideIndex + " -старий" + " " + index + " -новий");
                    for (s = 0; s < $slidesLength; s++) {
                        if (s < index) {
                            tl3.to($blockImgItem.eq(s), 0, {height: '0'});
                        } else if (s >= index) {
                            tl3.to($blockImgItem.eq(s), 0, {height: App.H});
                        }
                    }
                } else if (activeSlideIndex < index) {
                    console.log("крутиться вниз");
                    console.log("activeSlideIndex < index");
                    console.log(activeSlideIndex + " -старий" + " " + index + " -новий");

                    for (s = 0; s < $slidesLength; s++) {
                        if (s < index) {
                            tl3.to($blockImgItem.eq(s), 0, {height: '0'});
                        } else if (s >= index) {
                            tl3.to($blockImgItem.eq(s), 0, {height: App.H});
                        }
                    }
                }
                event.preventDefault();
            }

            function compareIndex(index, previousIndex) {
                if (index > previousIndex) {
                    direction = -1;
                } else {
                    direction = 1;
                }
            }

            function headerStyles() {
                App.header.toggleClass('header-white');
            }

            function imgChangeHeight(index, previousIndex) {
                // $blockImgItem.eq(index).addClass('ggg');
                // console.log(index + " " + previousIndex);
                if (direction == -1) {
                    tl2.to($blockImgItem.eq(previousIndex), 0.8, {height: '0'});
                } else if (direction == 1) {
                    tl2.to($blockImgItem.eq(index), 0.8, {height: App.H});
                }
            }

            function goToSlide($slide) {
                if (!isAnimating && $slide.length) {
                    //setting animating flag to true                
                    isAnimating = true;
                    $currentSlide = $slide;
                    previousIndex = index;
                    index = $currentSlide.index();

                    if (index >= slideBlock.start && index <= slideBlock.end) {
                        markChangeActive(index);
                        imgChangeHeight(index, previousIndex);
                        compareIndex(index, previousIndex);
                        if (isMark == false) {
                            markVisible();
                            isMark = true;
                        }
                    } else {
                        if (isMark == true) {
                            markVisible();
                            isMark = false;
                        }
                    }
                    blockImg(index);
                    if (index >= slideBlock.start) {
                        if (headerState == false) {
                            headerStyles();
                            headerState = true;
                        }
                    } else {
                        if (headerState == true) {
                            headerStyles();
                            headerState = false;
                        }
                    }
                    tl.to($window, 0.8, {
                        scrollTo: {
                            y: pageHeight * index
                        },
                        ease: Power2.easeInOut,
                        onComplete: onSlideChangeEnd,
                        onCompleteParams: [$slide],
                        onCompleteScope: this
                    });
                }
            }
            function onKeyDown(event) {
                var PRESSED_KEY = event.keyCode;

                if (PRESSED_KEY == keyCodes.UP) {
                    direction = 1;
                    goToPrevSlide();
                    event.preventDefault();
                }
                else if (PRESSED_KEY == keyCodes.DOWN) {
                    direction = -1;
                    goToNextSlide();
                    event.preventDefault();
                }
            }
            function onSlideChangeEnd(slide) {
                isAnimating = false;
                slide.addClass('section-active').siblings().removeClass('section-active');
                if (blockImgState == 1) {
                    $blockImg.addClass('block-img-active').removeClass('block-img-before').removeClass('block-img-after');
                }
                animation();
            }
            function animation() {
                if (index == 1) {
                    // TweenMax.staggerTo($('.iso_item'), 0.5,
                    //     {opacity:1}, 0.25);
                }
                if (index >= slideBlock.start && index <= slideBlock.end) {

                }
            }
            function blockImg(index) {
                if (index < slideBlock.start) {
                    // $blockImg.addClass();
                    blockImgState = 0;
                    $blockImg.addClass('block-img-before').removeClass('block-img-active');
                } else if (index >= slideBlock.start && index <= slideBlock.end) {
                    blockImgState = 1;
                } else if (index > slideBlock.end) {
                    blockImgState = 2;
                    $blockImg.addClass('block-img-after').removeClass('block-img-active');
                }
            }
            function mark() {

            }
            function onResize(event) {
                var newPageHeight = $window.innerHeight();

                if (pageHeight !== newPageHeight) {
                    pageHeight = newPageHeight;
                }
            }
        },
        hoverScroll: function () {
            var mouse = $('.js-mouse-scroll');

            mouse.on('mousewheel', function (event) {

                if (event.deltaY == '-1') {
                    $('html, body').stop().animate({
                        scrollTop: $(this).offset().top + App.H
                    }, 'slow');
                }
            });
        },
        resize: function () {
            App.H = App.window.height();
            App.W = App.window.width();
            App.screen.init();
            App.homeResize();
        },
        scrollWindow: function () {
            var lastScrollTop = 0;
            App.window.scroll(function (event) {
                var st = App.scroll;
                if (st > lastScrollTop) {
                    // downscroll code
                    App.scrollDirection = -1;
                } else {
                    // upscroll code
                    App.scrollDirection = 1;
                }
                lastScrollTop = st;
            });
        }
    };

    $(window).on('load', function () {
        App.init();
    });

    // console.log("device.desktop() === %s", device.desktop());    

    var resizeMobile;
    App.window.on("orientationchange", function (event) {
        clearTimeout(resizeMobile);
        resizeMobile = setTimeout(doneResizing, 500);
        function doneResizing() {
            App.resize();
        }
    });

    $(window).scroll(function () {
        App.scroll = App.window.scrollTop();
    });

})(jQuery, this);


