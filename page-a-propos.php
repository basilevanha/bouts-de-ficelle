<?php
/**
 * Template Name: A propos
 */


$context                = Timber::context();
$context['post']        = Timber::get_post();

$membres = array();
$items = get_field('a-propos-equipe', $context['post']->ID)['membres-liste'];

if ($items) {
    for ($i = 0; $i < count($items) ; $i++) {
        $postID = url_to_postid($items[ $i ]);
        $membres[$i] = Timber::get_post($postID);
    }
}

$context['membres'] = $membres;

$context['hero']        = get_field('a-propos-hero',        $context['post']->ID);
$context['groupe']      = get_field('a-propos-groupe',      $context['post']->ID);
$context['equipe']      = get_field('a-propos-equipe',      $context['post']->ID);
$context['fichiers']    = get_field('a-propos-fichiers',    $context['post']->ID);

 Timber::render( array( 'page-a-propos.twig' ), $context );