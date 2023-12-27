<?php
/**
 * Template Name: Cours & stages
 */

 $context                   = Timber::context();
 $context['post']           = Timber::get_post();
 
 $context['hero']           = get_field('cours-hero',       $context['post']->ID);
 $context['offres']         = get_field('cours-offres',     $context['post']->ID);
 $context['gouts']          = get_field('cours-gouts',      $context['post']->ID);
 $context['spectacle']      = get_field('cours-spectacle',  $context['post']->ID);

 Timber::render( array( 'page-cours-stages.twig' ), $context );
