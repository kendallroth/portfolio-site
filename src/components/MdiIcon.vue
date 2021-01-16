<template>
  <SvgIcon type="mdi" :path="icon" v-bind="$attrs" />
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";

export default {
  name: "MdiIcon",
  components: {
    SvgIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
