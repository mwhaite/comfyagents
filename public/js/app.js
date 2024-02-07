import Vue from 'vue';
import GUIManager from './GUIManager.vue';

Vue.component('workflow-canvas', {
    template: '<div>Workflow Canvas</div>'
});

Vue.component('node-palette', {
    template: '<div>Node Palette</div>'
});

Vue.component('properties-panel', {
    template: '<div>Properties Panel</div>'
});

Vue.component('gui-manager', GUIManager);

new Vue({
    el: '#app',
    mounted: function() {
        this.$refs.guiManager.openMenu();
    }
});
