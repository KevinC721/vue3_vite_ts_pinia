import { defineStore } from "pinia";

export const useUserInfo = defineStore("userInfo", {
  state: () => {
    return {
      id: 0,
      name: "Kevin",
      userList: [] as UserInfo[],
      user: null as UserInfo[] | null,
      isAdmin: true,
      hobby: ["basketball", "book", "vue"],
      hasChanged: true,
      randomizeNum: 0,
    };
  },
  actions: {
    randomizeCounter() {
      this.randomizeNum = Math.round(Math.random() * 100);
    },
  },
});

interface UserInfo {
  name: string;
  age: number;
}
