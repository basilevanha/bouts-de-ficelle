<?php
/**
 * Template Name: Single event
 */

    global $globals;
    $ateliersPageID = $globals['page_ateliers_ID'];
    $spectaclesPageID = $globals['page_spectacles_ID'];

    $context                   	= Timber::context();
    $context['post']           	= Timber::get_post();
    $context['infos']           = [
        'start'     => get_post_meta($context['post']->ID, '_event_start_date', true),
        'end'       => get_post_meta($context['post']->ID, '_event_end_date', true),
        'location'  => get_post_meta($context['post']->ID, '_event_location', true),
    ];
	$context['content']			= get_field('acf-content', $context['post']->ID);
	$context['typeEvent']		= get_field('event-type', $context['post']->ID);
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