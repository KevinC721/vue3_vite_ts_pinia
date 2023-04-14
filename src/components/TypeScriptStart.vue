<template>
  <h3>数字 {{ num }}</h3>
  <button @click="alertName('Kevin')">弹出 name</button>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
let num: Ref<number> = ref(0);

function selectName(name: string): string {
  return name;
}

function alertName(relName: string): void {
  const name = selectName(relName);
  alert(name);
}

// as const 断言
function useFetch() {
  const response: Ref<string> = ref("Kevin");
  const age: Ref<number> = ref(30);

  return [response, age];
}
const [response] = useFetch();
console.log("此时response的数据类型为 Ref<string> ｜ Ref<number>", response);

function useFetch1() {
  const response1: Ref<string> = ref("Kevin");
  const age1: Ref<number> = ref(30);

  // 在return元组时使用const断言，const断言告诉编译器为表达式推断出它能推断出的最窄或最特定的类型。
  return [response1, age1] as const;
}
const [response1] = useFetch1();
console.log("此时response的数据类型为 Ref<string> ｜ Ref<number>", response1);
// as const 断言 End
</script>
