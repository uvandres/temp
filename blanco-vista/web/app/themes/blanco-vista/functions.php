<?php
/**
 * Hyperdrive includes
 *
 * The $hyperdrive_includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 *
 * Please note that missing files will produce a fatal error.
 *
 * @link https://github.com/roots/hyperdrive/pull/1042
 */
$hyperdrive_includes = [
	'lib/assets.php',    // Scripts and stylesheets
	'lib/extras.php',    // Custom functions
	'lib/setup.php',     // Theme setup
	'lib/titles.php',    // Page titles
	'lib/wrapper.php',   // Theme wrapper class
	'lib/customizer.php' // Theme customizer
];

foreach ($hyperdrive_includes as $file) {
	if (!$filepath = locate_template($file)) {
		trigger_error(sprintf(__('Error locating %s for inclusion', 'hyperdrive'), $file), E_USER_ERROR);
	}

	require_once $filepath;
}
unset($file, $filepath);


function show_homes($title = "Home plans", $exclude = "", $tax = "") {
    // Select current post id and remove it from the listing.
    
    $args = array(
        'post_type' => 'homes'
    );
    
    if($exclude) {
        $args['post__not_in'] = array( $exclude );
    }
    
    if($tax) {
        $args['tax_query'] = array(
            'relation' => 'AND',
            array(
                'taxonomy' => 'community',
                'field'    => 'slug',
                'terms'    => array( $tax ),
            )
    );
    }
    
    $the_query = new WP_Query( $args );
    
    if ( $the_query->have_posts() ) { ?>
        <div class="lato uppercase gray bold home-plans"><?php echo $title; ?></div>
        <div style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; height: 5px; overflow: hidden; margin-bottom: 20px; margin-top: 20px;"></div>
        <ul id="additional-home-plans">
        <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
            <?php $the_thumb = get_field("thumbnail"); ?>
            <li>
                <div><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></div>
                <div class="playfair "><em><?php echo get_field("square_feet"); ?> square feet</em></div>
                <div class="playfair "><em>
                    <?php echo get_field("bedrooms"); ?> bedrooms,
                    <?php echo get_field("full_baths"); ?> baths,
                    <?php echo get_field("garages"); ?> car garage
                </em></div>
                <div class="thumbnail"><a href="<?php the_permalink(); ?>"><img src="<?php echo $the_thumb; ?>" alt="<?php the_title(); ?>"/></a></div>
            </li>
        <?php endwhile; ?>
        
        <div>
            <img src="<?php echo images(); ?>curly-mark.jpg" alt="" style="margin: 0 auto; margin-top: 20px;"/>
        </div><br/>
        
        <?php wp_reset_postdata(); ?>
        </ul>
        <?php
    }
}
?>