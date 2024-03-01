<?php
/**
 * Template Name: Single atelier
 */

    $context                   	= Timber::context();
    $context['post']           	= Timber::get_post();

    $args = array(
        'post_type'      => 'event_listing', // Remplacez par le type de post réel
        'posts_per_page' => -1, // Pour récupérer tous les événements
    );
    
    $query = new WP_Query($args);
    
    // Vérifier si des événements ont été trouvés
    if ($query->have_posts()) {
        // Événements trouvés, les ajouter à un tableau
        $evenements = array();
    
        while ($query->have_posts()) {
            $query->the_post();

            $complete_atelier_url = home_url(get_field('type_name'));
            $atelierEventID = url_to_postid($complete_atelier_url);

            if (get_field('event-type') == 'atelier' && $atelierEventID == $context['post']->ID ) {
                // Ajouter les informations de l'événement au tableau
                $evenements[] = array(
                    'title' => get_the_title(),
                    'date' => get_field('_event_start_date'),
                    'url' => get_the_guid(),
                    // Ajoutez d'autres champs que vous souhaitez récupérer
                );
            }
        }
    
        // Réinitialiser les données de la requête
        wp_reset_postdata();
    
        // Maintenant, $evenements contient tous les événements
    } else {
        // Aucun événement trouvé
        $evenements = array();
    }
    
    $context['evenements'] = $evenements;


    Timber::render( array( 'single-atelier.twig' ), $context );