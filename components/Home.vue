<template>
  <div class="home">
    <h2>Member List</h2>
    <div v-for="(user, index) in userList" :key="index">
      <card :user="user" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Card from "./Card";

export default {
  components: {
    Card,
  },

  created() {
    this.getUserList();
  },

  computed: {
    ...mapState("users", ["userList"]),
  },

  methods: {
    ...mapMutations("users", ["setUserList"]),
    getUserList() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => this.setUserList(json));
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin: 25px 0;
}
</style>
