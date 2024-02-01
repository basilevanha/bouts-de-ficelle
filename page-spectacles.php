<?php
/**
 * Template Name: Spectacles
 */

    $context                   = Timber::context();
    $context['post']           = Timber::get_post();
    $context['hero']           = get_field('spectacles-hero', $context['post']->ID);
    $context['liste']          = get_field('spectacles-liste', $context['post']->ID);

    $array_fill = array();
    $items = get_field('spectacles-liste', $context['post']->ID)['items'];
    
    if ($items) {
        for ($i = 0; $i < count($items) ; $i++) {
            $postID = url_to_postid($items[ $i ]);
            $array_fill[$i] = Timber::get_post($postID);
        }
    }
    
    $context['spectacles'] = $array_fill;

    Timber::render( array( 'page-spectacles.twig' ), $context );
