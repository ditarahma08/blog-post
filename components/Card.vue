<template>
  <div class="card" @click="openCard(user.id)">
    <span class="card__name">{{ user.name }}</span>
    <span class="card__email">{{ user.email }}</span>
    <span>
      {{
        `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`
      }}
    </span>
    <span
      >Works in <b>{{ user.company.name }}</b>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  methods: {
    openCard(id) {
      this.$router.push(`/user/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 16px;
  box-shadow: 0px 11px 35px 2px rgb(0 0 0 / 14%);
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;

  &__name {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
  }

  &__email {
    text-transform: lowercase;
    color: #f79489;
  }
}
</style>
