<?php
/**
 * Template Name: Single event
 */

    global $globals;
    $ateliersPageID = $globals['page_ateliers_ID'];
    $spectaclesPageID = $globals['page_spectacles_ID'];

    $context                   	= Timber::context();
    $context['post']           	= Timber::get_post();

    // GEstion de la timezone : convertir en objet date spécifiquement, en incluant la timezone de wordpress
    $timezone = get_option('timezone_string'); // Récupère la timezone définie dans WordPress
    $start_date = get_post_meta($context['post']->ID, '_event_start_date', true);
    $end_date = get_post_meta($context['post']->ID, '_event_end_date', true);
    $start_datetime = new DateTime($start_date, new DateTimeZone($timezone));
    $end_datetime = new DateTime($end_date, new DateTimeZone($timezone));

    $context['infos']           = [
        'start'     => $start_datetime,
        'end'       => $end_datetime,
        'location'  => get_post_meta($context['post']->ID, '_event_location', true),
    ];
	$context['content']			= get_field('acf-content', $context['post']->ID);
	$context['typeEvent']		= get_field('event-type', $context['post']->ID);
	$context['reservation']		= get_field('event-reservation', $context['post']->ID);
	$context['pay']		        = get_field('event-paid', $context['post']->ID);
	$context['price']		    = get_field('event-price', $context['post']->ID);
	$context['registrationForm']= get_field('event-shortcode', $context['post']->ID);
    // Get edition post ID
        $edition_url = get_field('type_name', $context['post']->ID);
        $complete_edition_url = home_url($edition_url);
        $editionID = url_to_postid($complete_edition_url);
    // ... And use it here
	$context['typeName']	    =  get_the_title($editionID);
	$context['typeURL']	        =  get_the_guid($editionID);
	$context['ateliersURL']	    =  get_the_guid($ateliersPageID);
	$context['spectaclesURL']	=  get_the_guid($spectaclesPageID);


    Timber::render( array( 'single-event_listing.twig' ), $context );