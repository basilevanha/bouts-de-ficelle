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
    $globals['menus_header_ID'] = 35;      // DEV = 2  | STAGING = 35
	$globals['menus_footer_ID'] = 36;      // DEV = 6  | STAGING = 36
}
add_action( 'after_setup_theme', 'global_variables' );

// Function to add custom data to Timber context
function add_to_context($context) {
    $theme_url = get_template_directory_uri();
    
    // Get global variables set up in homepage with ACF
    global $globals;
    $homePageID = $globals['homepage_ID'];

    // Get highlight post
    $highlightEvent_url = get_field('global-highlight', $homePageID)['event'];
    $complete_event_url = home_url($highlightEvent_url);
    $highlightEventID = url_to_postid($complete_event_url);

    $context['global'] = array(
        'themeLink' => $theme_url,
        'logo' =>  get_field('global-logo', $homePageID),
        'highlight' =>  array(
            'toggle' => get_field('global-highlight', $homePageID)['toggle'],
                'title' => get_the_title($highlightEventID),                                    // Titre de l'événement
                'start' => get_post_meta($highlightEventID, '_event_start_date', true),                      // Date de début de l'événement
                'end' => get_post_meta($highlightEventID, '_event_end_date', true),                          // Date de fin de l'événement
                'image' => get_post_meta($highlightEventID, '_event_banner', true),                                 // Image à la une de l'événement
                'location' => get_post_meta($highlightEventID, '_event_location', true),
                'content' => get_the_content($highlightEventID),                           // Contenu de l'événement
                'category' => 'cat-a-rendre-dynamique',
                'tag' => 'tag-a-rendre-dynamique',
        ),
        'socials' => get_field('global-socials', $homePageID),
        'footer' => get_field('global-footer', $homePageID),
        'copyrights' => get_field('global-copyrights', $homePageID)
    );
    
    return $context;
}

// Hook the function into Timber context
add_filter('timber/context', 'add_to_context');

new StarterSite();