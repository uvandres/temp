/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {
	// helpers
	var kind  = function(o) { return {}.toString.call(o).slice(8, -1) },
			float = function(n) { return parseFloat(n, 10) || 0 },
			int   = function(n) { return   parseInt(n, 10) || 0 };

	// Use this variable to set up the common and page specific functions. If you
	// rename this variable, you will also need to rename the namespace below.
	var Hyperdrive = {
		// All pages
		'common': {
			init: function() {
				// sticky header
				var stickyHeaderUpdate = stickyHeader('header');
				stickyHeaderUpdate();
				$(window).on('scroll', stickyHeaderUpdate);

				function stickyHeader(header) {
					var sticky  = false,
					    $header = $(header);

				  return function update() {
				    if (window.scrollY > 0) {
				      if (!sticky) {
				        $header.addClass('sticky');
				        sticky = true;
				      }
				    } else {
				      if (sticky) {
				        $header.removeClass('sticky');
				        sticky = false;
				      }
				    }
				  }
				}

				// hex grids
				function calcHexGrid(opts) {
					opts = kind(opts) === 'Object' ? opts
                                 				 : { };

				  var width      = float(opts.width),
				      spacing    = float(opts.spacing),
				      itemWidth  = float(opts.items.width),
				      itemHeight = float(opts.items.height),
				      numItems   =   int(opts.items.length);

				  if (!validateHexGrid(width, numItems, itemWidth, itemHeight)) {
				    return { width:  0, height: 0, items: [ ] };
				  }

				  var maxCols    = Math.floor((width + spacing) / (itemWidth + spacing)),
				      spacingTop = spacing - (itemHeight * (1 / 3)),
				      items      = [ ],
				      r          = 0,
				      c, cols, prevCols, rowWidth, m, marginLeft, top;

				  while (numItems) {
				    cols       = Math.min(numItems, maxCols - (r % 2));
				    rowWidth   = ((itemWidth + spacing) * cols) - spacing;
				    marginLeft = (width / 2) - (rowWidth / 2);
				    top        = (itemHeight + spacingTop) * r;

				    for (c = 0; c < cols; c++) {
				      m = cols !== prevCols ? marginLeft
				        :    c && cols == 2 ? marginLeft + ((itemWidth + spacing) / 2)
				                            : marginLeft - ((itemWidth + spacing) / 2);

				      items.push({ left: m + ((itemWidth + spacing) * c)
				                 , top:  top });
				    }

				    ++r;
				    prevCols =  cols;
				    numItems -= cols;
				  }

				  return { width: width
				         , height: (itemHeight * r) + (spacingTop * (r - 1))
				         , items: items };
				}

				function validateHexGrid(w, n, iw, ih) {
				  return w  <= 0 ? console.warn('The container grid must have width.')
				       : n  <= 0 ? console.warn('The grid must have one child at least.')
				       : iw <= 0
				      || ih <= 0 ? console.warn('Items must have both width and height.')
				                 : true;
				}

				$.fn.hexGrid = function(opts) {
					opts = opts || {};

				  var $container = $(this),
				      $items     = $container.children(),
				      grid       = calcHexGrid({ width: $container.width()
				                               , spacing: opts.spacing || 0
				                               , items: { width:  $items.width()
				                                        , height: $items.height()
				                                        , length: $items.length }});

				  $container.css({ position: 'relative' });
				      $items.css({ position: 'absolute' });

				  $container.height(grid.height);
				  grid.items.forEach(function(pos, idx) { $items.eq(idx).css(pos) });
				}
			},
			finalize: function() {
				// JavaScript to be fired on all pages, after page specific JS is fired
			}
		},
		// Home page
		'home': {
			init: function() {
				// builders' hex grid
				function updateBuildersHexGrid() {
					$('section.builders > ul').hexGrid({ spacing: 85 });
				}

				updateBuildersHexGrid();
				$(window).on('resize', updateBuildersHexGrid);

				// packery discover section
				var pckry = new Packery($('section.discover > ul')[0], {
				  gutter: 10
				});

				// packery social feeds
				var pckry = new Packery($('section.social > .content')[0], {
				  gutter: 10
				});
			},
			finalize: function() {
				// JavaScript to be fired on the home page, after the init JS
			}
		},
		// About us page, note the change from about-us to about_us.
		'about_us': {
			init: function() {
				// JavaScript to be fired on the about us page
			}
		},
		'homes':{
			init: function(){

			},
			finalize: function(){
				// Dropy Drop-Downs
				/* Built by digiTech */
				var dropy = {
					$dropys: null,
					openClass: 'open',
					selectClass: 'selected',
					init: function(){
						var self = this;

						self.$dropys = $('.dropy');
						self.eventHandler();
					},
					eventHandler: function(){
						var self = this;

						// Opening a dropy
						self.$dropys.find('.dropy_title').click(function(){
							self.$dropys.removeClass(self.openClass);
							$(this).parents('.dropy').addClass(self.openClass);
						});

						// Click on a dropy list
						self.$dropys.find('.dropy_content ul li a').click(function(){
							var $that = $(this);
							var $dropy = $that.parents('.dropy');
							var $input = $dropy.find('input');
							var $title = $(this).parents('.dropy').find('.dropy_title .title-container span');

							// Remove selected class
							$dropy.find('.dropy_content a').each(function(){
								$(this).removeClass(self.selectClass);
							});

							// Update selected value
							if(!$that.hasClass('dropy_header')){
								$title.html($that.html());
								$input.val($that.html());
							}

							// If back to default, remove selected class else addclass on right element
							if($that.hasClass('dropy_header')){
								$title.removeClass(self.selectClass);
								$title.html($title.attr('data-title'));
							}
							else{
								$title.addClass(self.selectClass);
								$that.addClass(self.selectClass);

								// Init Filter
								filter.init();
							}

							// Close dropdown
							$dropy.removeClass(self.openClass);

						});

						// Close all dropdown onclick on another element
						$(document).bind('click', function(e){
						if (! $(e.target).parents().hasClass('dropy')){
							self.$dropys.removeClass(self.openClass); }
						});
						}
				};

				// Grand Haven Filtering
				filter = {
					init: function() {
						// Fade Out Current Results
						$(".home-block").fadeOut();

						// Grab all Current Filter Variables
						var min_price = $("#min-price").val().replace(/,/g, '');
						var max_price = $("#max-price").val().replace(/,/g, '');
						var min_sqft = $("#min-sqft").val();
						var garage = $("#garage").val();
						var bath = $("#bath").val();
						var beds = $("#beds").val();

						// Fix for using a million
						if (max_price == '$1000000') {
							max_price = '$999999';
						};

						var block_total = 0;

						$(".home-block").each(function() {

							var home_price = $(this).find(".content .block-row .results-price").text().replace(/,/g, '');

							// Check home block against all filters
							if ((home_price >= min_price) || (min_price == '') || (min_price == 'Any')) {
								var min_price_check = 1; // thumbs up
							}
							if ((home_price <= max_price) || (max_price == '') || (max_price == 'Any')) {
								var max_price_check = 1; // thumbs up
							}
							if (($(this).find(".content .block-row .results-sqft").text() >= min_sqft) || (min_sqft == '') || (min_sqft == 'Any')) {
								var min_sqft_check = 1; // thumbs up
							}
							if (($(this).find(".content .block-row .results-garage").text() >= garage) || (garage == '') || (garage == 'Any')) {
								var garage_check = 1; // thumbs up
							}
							if (($(this).find(".content .block-row .results-bath").text() >= bath) || (bath == '') || (bath == 'Any')) {
								var bath_check = 1; // thumbs up
							}
							if (($(this).find(".content .block-row .results-beds").text() >= beds) || (beds == '') || (beds == 'Any')) {
								var beds_check = 1; // thumbs up
							}

							// Check if we have thumbs up on all filters
							if ((min_price_check === 1) && (max_price_check === 1) && (min_sqft_check === 1) && (garage_check === 1) && (bath_check === 1) && (beds_check === 1)) {
								block_total += 1;
								$(this).addClass('display-this');
							} else {
								$(this).removeClass('display-this');
							}
						});

						// Show the total number of results
						$('.home-results .title span').html(block_total);
						filter.loadmore(block_total);
					},

					loadmore: function(homes) {
						console.log('Homes Total Pre-Start: ' + homes);

						var displayThis = $(".display-this").length;
						console.log('Display This: ' + displayThis);

						if (typeof homes == 'undefined') {
							var homes = $(".display-this").length;
						};

						console.log('Homes Total Initially: ' + homes);
						x = 8;

						if (displayThis > x) {
							$('.link .load-more').fadeIn();
						} else {
							$('.link .load-more').fadeOut();
						}

						$('.display-this:lt('+x+')').fadeIn();

						$('.load-more').click(function(event) {
							event.preventDefault();
							// console.log('Homes Total: ' + homes);
							// x= (x+8 <= homes) ? x+8 : homes;
							x = x+8
							console.log('X: ' + x);
							$('.display-this:lt('+x+')').fadeIn();

							if (displayThis < x) {
								$('.link .load-more').fadeOut();
							}
						});
					}
				}

				$(function(){
					dropy.init();
					filter.loadmore();
				});			
			
			}
		}
	};

	// The routing fires all common scripts, followed by the page specific scripts.
	// Add additional events for more control over timing e.g. a finalize event
	var UTIL = {
		fire: function(func, funcname, args) {
			var fire;
			var namespace = Hyperdrive;
			funcname = (funcname === undefined) ? 'init' : funcname;
			fire = func !== '';
			fire = fire && namespace[func];
			fire = fire && typeof namespace[func][funcname] === 'function';

			if (fire) {
				namespace[func][funcname](args);
			}
		},
		loadEvents: function() {
			// Fire common init JS
			UTIL.fire('common');

			// Fire page-specific init JS, and then finalize JS
			$.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
				UTIL.fire(classnm);
				UTIL.fire(classnm, 'finalize');
			});

			// Fire common finalize JS
			UTIL.fire('common', 'finalize');
		}
	};

	// Load Events
	$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
