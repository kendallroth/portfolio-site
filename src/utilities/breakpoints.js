import Vue from "vue";

/**
 * Breakpoint utility class that can be used as a mixin to provide breakpoint data to all components
 *   Taken from: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/services/breakpoint/index.ts
 */
class Breakpoint {
  constructor(thresholds) {
    this.xs = false;
    this.sm = false;
    this.md = false;
    this.lg = false;
    this.xl = false;

    this.thresholds = thresholds;
    this.name = "";
    this.resizeTimeout = null;

    this.init();
  }

  init() {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", this.onResize.bind(this), {
      passive: true,
    });

    this.update();
  }

  update() {
    const height = this.getClientHeight();
    const width = this.getClientWidth();

    // QUESTION: Possibly handle scrollbar width?
    const xs = width < this.thresholds.xs;
    const sm = width < this.thresholds.sm && !xs;
    const md = width < this.thresholds.md && !(xs || sm);
    const lg = width < this.thresholds.lg && !(xs || sm || md);
    const xl = width >= this.thresholds.lg && !(xs || sm || md || lg);

    this.height = height;
    this.width = width;

    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;

    this.xsOnly = xs;
    this.smOnly = sm;
    this.smDown = (xs || sm) && !(md || lg || xl);
    this.smUp = !xs && (sm || md || lg || xl);
    this.mdOnly = md;
    this.mdDown = (xs || sm || md) && !(lg || xl);
    this.mdUp = !(xs || sm) && (md || lg || xl);
    this.lgOnly = lg;
    this.lgDown = (xs || sm || md || lg) && !xl;
    this.lgUp = !(xs || sm || md) && (lg || xl);
    this.xlOnly = xl;

    switch (true) {
      case xs:
        this.name = "xs";
        break;
      case sm:
        this.name = "sm";
        break;
      case md:
        this.name = "md";
        break;
      case lg:
        this.name = "lg";
        break;
      default:
        this.name = "xl";
        break;
    }
  }

  onResize() {
    clearTimeout(this.resizeTimeout);

    // Debounce the breakpoint update after the screen resizes
    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  }
  // Cross-browser support as described in: https://stackoverflow.com/questions/1248081
  getClientWidth() {
    if (typeof document === "undefined") return 0; // SSR
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );
  }

  getClientHeight() {
    if (typeof document === "undefined") return 0; // SSR
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
  }
}

// Need to use a Vue instance for its reactive data
const breakpointData = new Vue({
  data: {
    $breakpoint: new Breakpoint({
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    }),
  },
});

const breakpointMixin = {
  computed: {
    $breakpoint: {
      get: () => breakpointData.$data.$breakpoint,
    },
  },
};

export { Breakpoint, breakpointMixin };
