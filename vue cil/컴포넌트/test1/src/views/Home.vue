// HTML 코드가 들어감
<template>
<div>
  <h1> JEONG KI HYUK</h1>
  <KH/>
  </div>
</template>

// 데이터 , 메소드 , 컴퓨티드, 와치등 옵션들이 들어감
<script>
import KH from '@/components/KH.vue';
export default {
  components: {
    KH
  },

  data() {
    return {
      name : 'KH'
    }
  }
  
}
</script>


// 디자인
<style scoped>
h1 {
  color : red;
}
</style>