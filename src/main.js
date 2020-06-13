require("typeface-raleway");

import { format } from "date-fns";

// Utilities
import { breakpointMixin } from "@utilities/breakpoints";
import { dateFilter } from "@utilities/filters";

// Components
import Hover from "@components/Hover";
import PageSection from "@components/Layout/PageSection";
import DefaultLayout from "@layouts/Default";

// Styles
import "@styles/styles.scss";

export default function (Vue) {
  Vue.component("Hover", Hover);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("PageSection", PageSection);

  Vue.filter("formatDate", dateFilter);

  Vue.mixin(breakpointMixin);

  Vue.prototype.$formatDate = format;
}
