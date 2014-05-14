<?php
/**
 * Plugin Name: Customize/edit wp-signup (registration) for wpms
 * Plugin URI: http://wpsoft.com.br
 * Description: Customize/edit wp-signup (registration) for wpms
 * Version: 1.0.1
 * Author: diegpl, pkelbert, gmax21
 * Author URI: http://wpsoft.com.br
 * License: GPL2
 */
 
//require( plugins_url() . '/blogtemplates/blogtemplatesfiles/blog_templates.php' );

function editWpSignup() {
	echo "<script type='text/javascript' src='".plugins_url( 'edit-wp-signup.js' , __FILE__ )."'></script>";
	echo "<script type='text/javascript' src='".plugins_url( 'watermark/jquery.watermark.js' , __FILE__ )."'></script>";
	echo "<link rel='stylesheet' id='style-css'  href='".plugins_url( 'signup-style.css' , __FILE__ )."' type='text/css' media='all' />";
}

add_action('wp_footer', 'editWpSignup');
add_action( 'signup_extra_fields', array( 'blog_templates', 'registration_template_selection' ) );
add_action( 'signup_finished', array( 'blog_templates', 'registration_template_selection' ) );

/*if ( class_exists( 'blog_templates' ) ) {

    class blog_templates {
		
			add_action( 'signup_extra_fields' , array( $this, 'registration_template_selection' ) );

	}
}*/



/*class improve_subscription extends blog_templates {

	function __construct() {
		
		add_action( 'signup_extra_fields' , array( $this, 'registration_template_selection' ) );
	
	}
}*/

?>