import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import DataInput from "./components/maincomponentfleet/DataInput.vue";
import BaseButton from "./components/maincomponentfleet/BaseButton.vue";
import BaseCard from "./components/maincomponentfleet/BaseCard.vue";
import LogIn from "@/components/interface/LogIn.vue";
import FrontEnd from "@/components/interface/FrontEnd.vue";
import FleetView from "@/views/FleetView.vue";
import ListProgra from "@/components/interface/ListProgra.vue";
import MarketView from "@/views/MarketView.vue"
import TicketView from "@/views/TicketView.vue"
import RoutingView from "@/views/RoutingView.vue"
library.add(fas, fab);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/aemfront", component: FrontEnd },
    { path: "/login", component: LogIn },
    { path: "/listprog", component: ListProgra },
    { path: "/assignmentfleet", component: FleetView },
    {path: "/marketshare",component:MarketView},
    {path:"/ticketprediction",component:TicketView},
    {path:"/aircraftrouting",component:RoutingView}
  ],
});
const app = createApp(App);

app.component("base-card", BaseCard);
app.component("data-input", DataInput);
app.component("base-button", BaseButton);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("font-awesome-layers", FontAwesomeLayers);
app.component("font-awesome-layers-text", FontAwesomeLayersText);

app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
