import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { createVuetify } from "vuetify";
import AppLayout from "@/Layouts/AppLayout.vue"; // Adjust the path accordingly

// Initialize Vuetify
const vuetify = createVuetify();

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`).default,
    setup({ el, App, props }) {
        createApp({ render: () => h(App, props) })
            .use(vuetify) // Use Vuetify plugin
            .component("AppLayout", AppLayout)
            .mount(el);
    },
});

// Progress indicator for Inertia.js
InertiaProgress.init({ color: "#4B5563" });
