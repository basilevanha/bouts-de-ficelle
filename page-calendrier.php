<?php
/**
 * Template Name: Calendrier
 */

$context = Timber::context();

$context['evenements'] = $evenements;

Timber::render( array( 'page-calendrier.twig' ), $context );
