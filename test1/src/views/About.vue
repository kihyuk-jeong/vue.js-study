<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KH title ="about title" :num="num" />
  </div>
</template>

<script>
import KH from '@/components/KH.vue';
export default {
  components : {
    KH
  },
  data() {
    return {
      num :5
    }
  }

}
</script>
