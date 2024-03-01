<?php
/**
 * Search results page
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$templates = array( 'search.twig', 'archive.twig', 'index.twig' );

$context          = Timber::context();
$context['posts'] = Timber::get_posts();

$title = get_the_title();
$keys  = explode(" ", $s);
$title = preg_replace('/('.implode('|',$keys).')/iu','<span class="search-terms">\0</span>',$title);
$context['title'] = $title;

Timber::render( $templates, $context );
