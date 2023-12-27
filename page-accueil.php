<?php
/**
 * Template Name: Accueil
 */

$context                = Timber::context();
$context['post']        = Timber::get_post();
$context['hero'] = get_field('accueil-hero', $context['post']->ID);
$context['actus'] = get_field('accueil-actus', $context['post']->ID);
$context['cours'] = get_field('accueil-cours', $context['post']->ID);
$context['ateliers'] = get_field('accueil-ateliers', $context['post']->ID);

 Timber::render( array( 'page.twig' ), $context );