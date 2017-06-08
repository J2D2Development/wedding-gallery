'use strict';

function init() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(function(panel, index, arr) {
        panel.addEventListener('click', function() {
            if(this.classList.contains('open-active')) {
                this.classList.remove('open-active');
            } else {
                removeClassFromArray(arr, 'open-active');
                this.classList.add('open-active');
            }
        }, false);
    });

    function removeClassFromArray(elementArray, className) {
        elementArray.forEach(function(ele) {
            ele.classList.remove(className);
        });
    }
}

window.addEventListener('DOMContentLoaded', init);