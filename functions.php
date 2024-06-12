<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 */

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/src/StarterSite.php';

Timber\Timber::init();

// Sets the directories (inside your theme) to find .twig files.
Timber::$dirname = [ 'templates', 'views' ];

function global_variables() {
    global $globals;
	$globals['homepage_ID'] = 10;          // DEV = 9  | STAGING = 10
    $globals['page_ateliers_ID'] = 194;    // DEV = 20 | STAGING = 194
    $globals['page_spectacles_ID'] = 200;    // DEV = 22 | STAGING = 200
    $globals['menus_header_ID'] = 35;      // DEV = 2  | STAGING = 35
	$globals['menus_footer_ID'] = 36;      // DEV = 6  | STAGING = 36
}
add_action( 'after_setup_theme', 'global_variables' );

// Function to add custom data to Timber context
function add_to_context($context) {
    $theme_url = get_template_directory_uri();
    
    global $globals;
    $homePageID = $globals['homepage_ID'];
    $ateliersPageID = $globals['page_ateliers_ID'];
    $spectaclesPageID = $globals['page_spectacles_ID'];
    
    // Get highlight post ID
    $highlightEvent_url = get_field('global-highlight', $homePageID)['event'];
    $complete_event_url = home_url($highlightEvent_url);
    $highlightEventID = url_to_postid($complete_event_url);

    // If the field is null, convert it to boolean false / if there is a string, convert it to true
    $isEventExpired = !!!get_field('global-highlight', $homePageID)['event'];
    
    // Get global variables set up in homepage with ACF
    $context['global'] = array(
        'themeLink' => $theme_url,
        'logo'      =>  get_field('global-logo', $homePageID),
        'highlight' =>  array(
            'toggle'    => $isEventExpired ? false : get_field('global-highlight', $homePageID)['toggle'],
            'label'     => get_field('global-highlight', $homePageID)['label'],
            'type'      => get_field('type_evenement', $highlightEventID) ? : false,
            'title'     => get_the_title($highlightEventID),                                    // Titre de l'événement
            'url'       => get_the_guid($highlightEventID),
            'content'   => get_the_content($highlightEventID),                           // Contenu de l'événement
            'image'     => get_the_post_thumbnail_url($highlightEventID),
            'start'     => get_post_meta($highlightEventID, '_event_start_date', true),                      // Date de début de l'événement
            'location'  => get_post_meta($highlightEventID, '_event_location', true),
        ),
        'socials' => get_field('global-socials', $homePageID),
        'footer' => get_field('global-footer', $homePageID),
        'copyrights' => get_field('global-copyrights', $homePageID),
        'pageAteliers' => get_post($ateliersPageID),
        'pageSpectacles' => get_post($spectaclesPageID),
    );
    
    return $context;
}

// Hook the function into Timber context
add_filter('timber/context', 'add_to_context');

// Ajoute un filtre qui met à jour la bannière Event manager avec la featured image (définie par ACF)
function my_acf_save_post( $post_id ) {
    if(get_post_type($post_id) == 'event_listing') {
        update_post_meta($post_id, '_event_expiry_date', get_post_meta($post_id, '_event_end_date', true));
        update_post_meta($post_id, '_event_banner', get_the_post_thumbnail_url($post_id));
    }
}

add_action('acf/save_post', 'my_acf_save_post', 10, 3);

new StarterSite();