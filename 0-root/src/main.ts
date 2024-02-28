import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html?raw";
import 'wj-elements/dist/style.css';
import './style.css';

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
    routes,
    loadApp({ name }) {
        return import(/* @vite-ignore */name);
    },
});

const layoutEngine = constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);

layoutEngine.activate();
start({
    urlRerouteOnly: true,
});
