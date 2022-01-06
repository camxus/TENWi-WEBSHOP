<?php

/**
 * Plugin Name: WC Express EU Shipping
 * Plugin URI: https://github.com/omukiguy/techiepress-dhl-shipping
 * Author: Cam Rose
 * Author URI: https://github.com/omukiguy/techiepress-dhl-shipping
 * Description: WC Express EU Shipping
 * Version: 0.0.1
 */
 
 add_action( 'woocommerce_shipping_init', 'express_EU_shipping_init' );
 
 function express_EU_shipping_init() {
     if ( ! class_exists( 'WC_EXPRESS_EU_SHIPPING') ) {
         class WC_EXPRESS_EU_SHIPPING extends WC_Shipping_Method {
            
            public function __construct() {
                $this->id                 = 'express_EU_shipping'; // Id for your shipping method. Should be uunique.
				$this->method_title       = __( 'Express Shipping EU' );  // Title shown in admin
				$this->method_description = __( 'Express Shipping EU' ); // Description shown in admin

				$this->enabled            = "yes"; // This can be added as an setting but for this example its forced enabled
				$this->title              = "Express Shipping EU"; // This can be added as an setting but for this example its forced.

				$this->init();
            }
            
            public function init() {
                // Load the settings API
				$this->init_form_fields(); // This is part of the settings API. Override the method to add your own settings
				$this->init_settings(); // This is part of the settings API. Loads settings you previously init.

				// Save settings in admin if you have any defined
				add_action( 'woocommerce_update_options_shipping_' . $this->id, array( $this, 'process_admin_options' ) );
            }
            
            public function calculate_shipping( $package ) {
                $defaults = array(
                    'label' => '',   // Label for the rate
                    'cost'  => '31',  // Amount for shipping or an array of costs (for per item shipping)
                    'taxes' => '',   // Pass an array of taxes, or pass nothing to have it calculated for you, or pass 'false' to calculate no tax for this method
                    'calc_tax' => 'per_order' // Calc tax per_order or per_item. Per item needs an array of costs passed via 'cost'
                );

				// Register the rate
				$this->add_rate( $defaults );
                
            }
            
            
         }
     }
 }
 
 add_filter( 'woocommerce_shipping_methods', 'add_express_EU_method');
 
 function add_express_EU_method( $methods ) {
    $methods['express_EU_shipping'] = 'WC_EXPRESS_EU_SHIPPING';
    return $methods;
 }