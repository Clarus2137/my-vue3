import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import store from "@/store"

// Import of custom components
import components from '@/components/UI'

// Import of custom directives
import directives from "@/directives"


const app = createApp(App);


// Global registration of components
components.forEach(component => {
   app.component(component.name, component);
});

// Global registration of directives
directives.forEach(directive => {
   app.directive(directive.name, directive);
});





app.use(router).use(store).mount('#app');
