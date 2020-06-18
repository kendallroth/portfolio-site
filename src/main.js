require("typeface-raleway");

import { format } from "date-fns";

// Utilities
import { breakpointMixin } from "@utilities/breakpoints";
import {
  capitalizeFilter,
  dateFilter,
  lowercaseFilter,
} from "@utilities/filters";

// Components
import Hover from "@components/Hover";
import PageSection from "@components/layout/PageSection";
import DefaultLayout from "@layouts/Default";

// Styles
import "@styles/styles.scss";

export default function (Vue, { router }) {
  Vue.component("Hover", Hover);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("PageSection", PageSection);

  Vue.filter("capitalize", capitalizeFilter);
  Vue.filter("formatDate", dateFilter);
  Vue.filter("lowercase", lowercaseFilter);

  Vue.mixin(breakpointMixin);

  Vue.prototype.$formatDate = format;

  router.options.scrollBehaviour = (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;

    if (to.hash) return { selector: to.hash };

    return { x: 0, y: 0 };
  };
}
