<?php
/**
 * Template Name: Spectacles
 */

    $context                   = Timber::context();
    $context['post']           = Timber::get_post();
    $context['hero']           = get_field('spectacles-hero', $context['post']->ID);
    $context['liste']          = get_field('spectacles-liste', $context['post']->ID);

    $tempSpectaclesArray = array();
    $tempFiltersArray = array();

    $items = get_field('spectacles-liste', $context['post']->ID)['items'];
    
    if ($items) {
        for ($i = 0; $i < count($items) ; $i++) {
            $postID = url_to_postid($items[ $i ]);
            $tempSpectaclesArray[$i] = Timber::get_post($postID);
            $tempFiltersArray[$i] = Timber::get_post($postID)->showtype;
        }
    }
    
    $context['spectacles'] = $tempSpectaclesArray;

    // Fonction qui supprime les occurences en double dans un tableau (ici pour n'avoir qu'une fois les filtres)
    function removeDuplicates($array) {
        $uniqueArray = [];
        
        foreach ($array as $value) {
            // Check if the value is already in $uniqueArray
            if (!in_array($value, $uniqueArray)) {
                $uniqueArray[] = $value;
            }
        }
        
        return $uniqueArray;
    }

    $context['filters']    = removeDuplicates($tempFiltersArray);

    Timber::render( array( 'page-spectacles.twig' ), $context );
