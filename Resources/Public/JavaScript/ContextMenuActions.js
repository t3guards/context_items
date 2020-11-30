/**
 * Module: TYPO3/CMS/ContextItems/ContextMenuActions
 *
 * JavaScript to handle the click action of the "Hello World" context menu item
 * @exports TYPO3/CMS/ContextItems/ContextMenuActions
 */
define(function () {
    'use strict';

    /**
     * @exports TYPO3/CMS/ContextItems/ContextMenuActions
     */
    var ContextMenuActions = {};

    /**
     * Show Content
     *
     * @param {string} table
     * @param {int} uid of the page
     */
    ContextMenuActions.showContent = function (table, uid) {
      //  if (table === 'pages') {
            //If needed, you can access other 'data' attributes here from $(this).data('someKey')
            //see item provider getAdditionalAttributes method to see how to pass custom data attributes

          // top.TYPO3.Notification.info('Hello World', 'Huhu!', 5);

          // top.TYPO3.Backend.NavigationContainer.PageTree.refreshTree();

         var pageId = table === 'pages' ? uid : $(this).data('page-uid');
          top.TYPO3.ModuleMenu.App.showModule('web_layout', 'id=' + pageId);
          top.TYPO3.Backend.NavigationContainer.PageTree.refresh();

      //  }
    };

    return ContextMenuActions;
});
