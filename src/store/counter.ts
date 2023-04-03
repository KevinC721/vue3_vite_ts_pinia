import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAlertsStore = defineStore("alerts", () => {
  // option Store 写法
  // state: () => ({ count: 0 }),
  // getters: {
  //   double: (state) => state.count * 2,
  // },
  // actions: {
  //   increment() {
  //     this.count++;
  //   },
  // },
  const count = ref(0);
  const name = "Kevin";

  function increment() {
    count.value++;
  }

  const getCount = computed(() => {
    return name + "Hello";
  });

  // setup Store 写法
  return {
    count,
    increment,
    getCount,
  };
});
