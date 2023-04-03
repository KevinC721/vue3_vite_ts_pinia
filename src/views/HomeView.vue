<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import UserList from "@/components/UserList.vue";

export default defineComponent({
  components: {
    HelloWorld,
    UserList,
  },
});
</script>
