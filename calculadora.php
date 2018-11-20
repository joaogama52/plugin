<?php
/**
 *  Plugin Name: Calculator
 * Description: Basic Calculator
 * Version: 1.0
 * Author: Beatriz Martins e João Sampaio
 * Author URI: www.google.com
 */

function calculadora( $atts ) {
    
    return '<iframe src="'.plugins_url().'/calculadora/index.php" frameborder-"0" width="400px" height="500px"> </iframe>';
}

add_shortcode('calculadora', 'calculadora');