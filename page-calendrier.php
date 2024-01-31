<?php
/**
 * Template Name: Calendrier
 */

$context = Timber::context();

$args = array(
    'post_type'      => 'event_listing', // Remplacez par le type de post réel
    'post_status'    => 'publish',
    'posts_per_page' => -1, // Pour récupérer tous les événements
);

$query = new WP_Query($args);

// Vérifier si des événements ont été trouvés
if ($query->have_posts()) {
    // Événements trouvés, les ajouter à un tableau
    $evenements = array();

    while ($query->have_posts()) {
        $query->the_post();

        // Ajouter les informations de l'événement au tableau
        $evenements[] = array(
            'title'   => get_the_title(),
            'content' => get_the_content(),
            'date'    => get_field('date_evenement'), // Remplacez par le champ ACF pour la date de l'événement
            // Ajoutez d'autres champs que vous souhaitez récupérer
        );
    }

    // Réinitialiser les données de la requête
    wp_reset_postdata();

    // Maintenant, $evenements contient tous les événements
} else {
    // Aucun événement trouvé
    $evenements = array();
}

$context['evenements'] = $evenements;

Timber::render( array( 'page-calendrier.twig' ), $context );
