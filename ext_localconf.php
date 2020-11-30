<?php
defined('TYPO3_MODE') or die();

// Add TSconfig for new content element wizard
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:context_items/Configuration/TSconfig/Page/ContentElementWizard.txt">');

$GLOBALS['TYPO3_CONF_VARS']['BE']['ContextMenu']['ItemProviders'][1488274371] = \ReneGast\ContextItems\ContextMenu\ContextItemProvider::class;
