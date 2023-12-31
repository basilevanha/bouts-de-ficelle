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


// Function to add custom data to Timber context
function add_to_context($context) {
    $theme_url = get_template_directory_uri();
    
    // Get global variables from homepage (9) ACF
    $homePageID = 9;
    $context['global'] = array(
        'themeLink' => $theme_url,
        'logo' =>  get_field('global-logo', $homePageID),
        'highlight' =>  get_field('global-highlight', $homePageID),
        'socials' => get_field('global-socials', $homePageID),
        'footer' => get_field('global-footer', $homePageID),
        'copyrights' => get_field('global-copyrights', $homePageID)
    );

    return $context;
}

// Hook the function into Timber context
add_filter('timber/context', 'add_to_context');

new StarterSite();