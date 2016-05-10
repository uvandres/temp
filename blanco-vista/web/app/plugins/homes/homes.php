<?php
/*
Plugin Name: Homes Post Type
Plugin URI: http://www.uvsouthsourcing.com
Description: Enable Homes Post Type
Author: 
Version: 1.0
Author URI: http://www.uvsouthsourcing.com
*/

function setup() {
	register_post_type( 'homes',
		array(
		  'labels' => array(
			'name' => 'Homes',
			'singular_name' => 'homes'
		  ),
		  'public' => true,
		  'has_archive' => false,
		  'menu_position' => 5,
		)
	);

	register_taxonomy(
		'community',
		'homes',
		array(
			'labels' => array(
				'name' => 'Community',
				'add_new_item' => 'Add New Community',
				'new_item_name' => "New Community"
			),
			'show_ui' => true,
			'show_tagcloud' => false,
			'hierarchical' => true, 
			"show_admin_column" => true
		)
	);

	register_taxonomy(
		'builders',
		'homes',
		array(
			'labels' => array(
				'name' => 'Builders',
				'add_new_item' => 'Add New Builder',
				'new_item_name' => "New Builder"
			),
			'show_ui' => true,
			'show_tagcloud' => false,
			'hierarchical' => true, 
			"show_admin_column" => true
		)
	);
}

add_action('after_setup_theme', 'setup');
