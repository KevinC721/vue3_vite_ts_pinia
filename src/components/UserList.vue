<template>
  <h4>UserInfo</h4>
  <h3>姓名：{{ name }}</h3>
  <table border="1px" cellspacing="0">
    <thead>
      <tr>
        <th colspan="6">用户信息列表</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(count, index) in 3" :key="index">
        <td>{{ id + index }}</td>
        <td>{{ name }}</td>
        <td>{{ user }}</td>
        <td>{{ isAdmin }}</td>
        <td>{{ hobby }}</td>
        <td>{{ hasChanged }}</td>
      </tr>
    </tbody>
  </table>
  <h3>随机数：{{ randomizeNum }}</h3>
  <button @click="randomizeCounter()">获取随机数</button>
</template>

<script lang="ts">
import { useUserInfo } from "@/store/user";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

export default {
  name: "UserList",
  setup() {
    const store = useUserInfo();
    const { id, name, user, isAdmin, hobby, hasChanged, randomizeNum } =
      storeToRefs(store);
    const { randomizeCounter } = store;

    onMounted(() => {
      console.log("🏀🏀🏀", user);
      user.value = [
        {
          name: "Kevin1",
          age: 20,
        },
      ];
    });

    return {
      id,
      name,
      user,
      isAdmin,
      hobby,
      hasChanged,
      randomizeCounter,
      randomizeNum,
    };
  },
};
</script>
