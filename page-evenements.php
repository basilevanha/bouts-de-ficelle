<?php
/**
 * Template Name: Evenements
 */

    $context                   = Timber::context();
    $context['post']           = Timber::get_post();
    $context['hero']           = get_field('evenements-hero', $context['post']->ID);
    $context['liste']          = get_field('evenements-liste', $context['post']->ID);

    $array_fill = array();
    $items = get_field('evenements-liste', $context['post']->ID)['items'];
    
    for ($i = 0; $i < count($items) ; $i++) {
        $postID = url_to_postid($items[ $i ]);
        $array_fill[$i] = Timber::get_post($postID);
    }

    $context['evenements'] = $array_fill;

    Timber::render( array( 'page-evenements.twig' ), $context );
