<template>
  <h3>Pinia - Count</h3>
  <h3>props: {{ msg }}</h3>
  <h3>{{ count }}</h3>
  <button @click="increment">计数</button>
  <h3>{{ getCount }}</h3>
</template>

<script>
import { useAlertsStore } from "@/store/counter";
import { storeToRefs } from "pinia";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const store = useAlertsStore();

    const { count, getCount } = storeToRefs(store);
    const { increment } = store;

    return {
      count,
      increment,
      getCount,
    };
  },
};
</script>
