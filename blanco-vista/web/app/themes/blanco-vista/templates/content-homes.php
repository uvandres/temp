<?php

$args = array(
    'post_type' => 'homes',
    'posts_per_page' => 200
);

/*
$args['tax_query'] = array(
    'relation' => 'AND',
    array(
        'taxonomy' => 'community',
        'field'    => 'slug',
        'terms'    => array( 'Grand Haven' ),
    )
);
*/

$the_query = new WP_Query( $args );
?>

<div class="clear"></div>

<div class="inside-page row">

    <div class="c cx8">


            <!-- Filter Search
            ============================================= -->
            <section class="search-hero">
                <div class="overlay"></div>
            </section>
            <div class="filter-search">
                <div class="title"><span>Search For Homes</span></div>
                <div class="filters">
                    <article>
                        <div class="dropy">
                            <div class="dropy_title"><div class="title-container"><span>Min Price</span><div class="arrow"></div></div></div>
                            <div class="dropy_content">
                                <ul>
                                    <li><a class="dropy_header"><div class="header-container"><span>Min Price</span><div class="arrow"></div></div></a></li>
                                    <li><a>Any</a></li>
                                    <li><a>$325,000</a></li>
                                    <li><a>$375,000</a></li>
                                    <li><a>$425,000</a></li>
                                    <li><a>$475,000</a></li>
                                    <li><a>$525,000</a></li>
                                    <li><a>$575,000</a></li>
                                    <li><a>$625,000</a></li>
                                    <li><a>$675,000</a></li>
                                    <li><a>$725,000</a></li>
                                    <li><a>$775,000</a></li>
                                    <li><a>$825,000</a></li>
                                    <li><a>$875,000</a></li>
                                    <li><a>$925,000</a></li>
                                    <li><a>$950,000</a></li>
                                </ul>
                            </div>
                            <input type="hidden" id="min-price" name="min-price">
                        </div>
                    </article>

                    <article>
                        <div class="dropy">
                            <div class="dropy_title"><div class="title-container"><span>Max Price</span><div class="arrow"></div></div></div>
                            <div class="dropy_content">
                                <ul>
                                    <li><a class="dropy_header"><div class="header-container"><span>Max Price</span><div class="arrow"></div></div></a></li>
                                    <li><a>Any</a></li>
                                    <li><a>$325,000</a></li>
                                    <li><a>$375,000</a></li>
                                    <li><a>$425,000</a></li>
                                    <li><a>$475,000</a></li>
                                    <li><a>$525,000</a></li>
                                    <li><a>$575,000</a></li>
                                    <li><a>$625,000</a></li>
                                    <li><a>$675,000</a></li>
                                    <li><a>$725,000</a></li>
                                    <li><a>$775,000</a></li>
                                    <li><a>$825,000</a></li>
                                    <li><a>$875,000</a></li>
                                    <li><a>$925,000</a></li>
                                    <li><a>$975,000</a></li>
                                    <li><a>$1,000,000</a></li>
                                </ul>
                            </div>
                            <input type="hidden" id="max-price" name="max-price">
                        </div>
                    </article>

                    <article>
                        <div class="dropy">
                            <div class="dropy_title"><div class="title-container"><span>Min SQ Ft</span><div class="arrow"></div></div></div>
                            <div class="dropy_content">
                                <ul>
                                    <li><a class="dropy_header"><div class="header-container"><span>Min SQ Ft</span><div class="arrow"></div></div></a></li>
                                    <li><a>Any</a></li>
                                    <li><a>2,000</a></li>
                                    <li><a>2,500</a></li>
                                    <li><a>3,000</a></li>
                                    <li><a>3,500</a></li>
                                    <li><a>4,000</a></li>
                                    <li><a>4,500</a></li>
                                </ul>
                            </div>
                            <input type="hidden" id="min-sqft" name="min-sqft">
                        </div>
                    </article>

                    <article>
                        <div class="dropy">
                            <div class="dropy_title"><div class="title-container"><span>Garage</span><div class="arrow"></div></div></div>
                            <div class="dropy_content">
                                <ul>
                                    <li><a class="dropy_header"><div class="header-container"><span>Garage</span><div class="arrow"></div></div></a></li>
                                    <li><a>Any</a></li>
                                    <li><a>2</a></li>
                                    <li><a>3</a></li>
                                    <li><a>4</a></li>
                                </ul>
                            </div>
                            <input type="hidden" id="garage" name="garage">
                        </div>
                    </article>

                    <article>
                        <div class="dropy">
                            <div class="dropy_title"><div class="title-container"><span>Bath</span><div class="arrow"></div></div></div>
                            <div class="dropy_content">
                                <ul>
                                    <li><a class="dropy_header"><div class="header-container"><span>Bath</span><div class="arrow"></div></div></a></li>
                                    <li><a>Any</a></li>
                                    <li><a>2</a></li>
                                    <li><a>2.5</a></li>
                                    <li><a>3</a></li>
                                    <li><a>3.5</a></li>
                                    <li><a>4</a></li>
                                    <li><a>4.5</a></li>
                                    <li><a>5</a></li>
                                </ul>
                            </div>
                            <input type="hidden" id="bath" name="bath">
                        </div>
                    </article>

                    <article>
                        <div class="dropy">
                            <div class="dropy_title"><div class="title-container"><span>Beds</span><div class="arrow"></div></div></div>
                            <div class="dropy_content">
                                <ul>
                                    <li><a class="dropy_header"><div class="header-container"><span>Beds</span><div class="arrow"></div></div></a></li>
                                    <li><a>Any</a></li>
                                    <li><a>3</a></li>
                                    <li><a>4</a></li>
                                    <li><a>5</a></li>
                                </ul>
                            </div>
                            <input type="hidden" id="beds" name="beds">
                        </div>
                    </article>

                </div>
            </div> <!-- /filter-search -->


            <!-- Home Results
            ============================================= -->
            <section class="home-results">

                <?php if ( $the_query->have_posts() ) { ?>
                    <div class="title">
                        Currently Displaying <span><?php echo $the_query->found_posts; ?></span> Home Plan Results
                        <div class="glitch-m bluewarpaint topmargin-xsm"></div>
                    </div>

                    <?php
                    // Set the number so the correct forms will load :)
                    $homeNum = 1;
                    ?>

                    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                        <?php $the_thumb = get_field("thumbnail"); ?>


                        <!-- Home Block -->
                        <div class="home-block display-this">
                            <div class="image" style="background-image: url('<?php echo $the_thumb["url"]; ?>');"><a href="<?php echo $the_thumb["url"]; ?>" class="fancy-image" title="<?php the_title(); ?>"></a></div>
                            <div class="content">
                                <table>
                                    <tr class="block-row">
                                        <td colspan="2"><?php the_title(); ?><span class="stories"><?php echo get_field("stories"); ?> Story Home</span></td>
                                        <td colspan="2"><span class="results-price">$<?php echo get_field("price"); ?></span></td>
                                    </tr>
                                     <tr class="block-row">
                                        <td><span class="results-sqft"><?php echo get_field("square_feet"); ?></span> sq-ft</td>
                                        <td><div class="garage-icn"></div><span class="results-garage"><?php echo get_field("garages"); ?></span></td>
                                        <td><div class="bed-icn"></div><span class="results-beds"><?php echo get_field("bedrooms"); ?></span></td>
                                        <td><div class="bath-icn"></div><span class="results-bath"><?php echo get_field("full_baths"); ?></span></td>
                                    </tr>
                                     <tr class="block-row">
                                        <td colspan="2"><a href="https://www.google.com/maps/place/<?php the_title(); ?>, <?php echo get_field("city"); ?>, TX <?php echo get_field("zip"); ?>" target="_blank"><?php echo get_field("neighborhood"); ?> <?php echo get_field("city"); ?></a></td>
                                    </tr>
                                </table>
                            </div>
                        </div><!-- /home-block -->

                        <?php $homeNum++ ?>
                    <?php endwhile; ?>

                    <div class="link">
                        <a class="load-more" href="#">Load More</a>
                        <div class="glitch-m mist-d topmargin-sm"></div>
                    </div>

                    <?php wp_reset_postdata(); ?>
                    <?php
                } else { ?>
                    <div class="title">
                        Sorry, No Results Were Found
                        <div class="glitch-m bluewarpaint"></div>
                    </div>
                <?php } ?>

            </section> <!-- /home-results -->


            <!-- <?php the_content(); ?> -->


    </div> <!-- /c cx8" -->
    <div class="clear"></div>
</div> <!-- /inside-page row -->