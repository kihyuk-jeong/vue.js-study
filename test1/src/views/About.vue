<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KH title ="about title" :num="num" >
      <template #header>
        <p>헤더 슬릇 테스트.</p>
      </template>

      </KH>
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
