<template>
<div>
<h1>유저스디테일</h1>
<p>유저번호  : {{ userId }}</p>
<v-btn @click="edit" small>수정</v-btn>
</div>
</template>

<script>
export default {
  computed: {
    userId() {
          return this.$route.params.id
    }
  },
  methods: {
    edit() {
      this.$router.push({name : "users-edit"})

    }
  }
}
</script>
