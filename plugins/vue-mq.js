import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    mobile: 501,
    tablet: 768,
    tabletLg: 1024,
    desktop: 1250,
    lg: Infinity
  },
  defaultBreakpoint: 'desktop' // customize this for SSR
});
