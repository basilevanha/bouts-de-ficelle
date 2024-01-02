<?php
/**
 * Template Name: Accueil
 */


$context                = Timber::context();

$ateliersPageID = 20;
$array_fill = array();
$items = get_field('ateliers-liste', $ateliersPageID)['items'];

for ($i = 0; $i < count($items) ; $i++) {
    $postID = url_to_postid($items[ $i ]);
    $array_fill[$i] = array(
        'icon' => get_field('icon', $postID),
        'post' => Timber::get_post($postID)
    );
}

$context['post']        = Timber::get_post();
$context['hero']        = get_field('accueil-hero', $context['post']->ID);
$context['actus']       = get_field('accueil-actus', $context['post']->ID);
$context['cours']       = get_field('accueil-cours', $context['post']->ID);
$context['ateliers']    = array(
    'infos'=> get_field('accueil-ateliers', $context['post']->ID),
    'items'=> $array_fill
);

 Timber::render( array( 'page-accueil.twig' ), $context );