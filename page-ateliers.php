<?php
/**
 * Template Name: Ateliers
 */

    $context                   = Timber::context();
    $context['post']           = Timber::get_post();
    $context['hero']           = get_field('ateliers-hero', $context['post']->ID);
    $context['liste']          = get_field('ateliers-liste', $context['post']->ID);
    
    $array_fill = array();
    $items = get_field('ateliers-liste', $context['post']->ID)['items'];
    
    for ($i = 0; $i < count($items) ; $i++) {
        $postID = url_to_postid($items[ $i ]);
        $array_fill[$i] = Timber::get_post($postID);
    }

    $context['ateliers'] = $array_fill;


    Timber::render( array( 'page-ateliers.twig' ), $context );