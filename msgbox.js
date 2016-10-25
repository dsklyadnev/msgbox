'use strict';

var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

angular.module('msgbox', [])

.directive('msgBox', function() {
    return {
        transclude: true,
        scope: {
            header: '@',
            actions: '='
        },
        templateUrl: function() {
            return currentScriptPath.replace('msgbox.js', 'msgbox.html');
        }
    };
})

.factory('msgbox', function() {
    return {
        show: function(modalId) {
            if (modalId === undefined)
                $('.ui.modal').modal('show');
            else
                $('#' + modalId + ' .ui.modal').modal('show');
        }
    };
})

;
