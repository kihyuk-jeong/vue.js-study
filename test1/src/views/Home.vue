// HTML 코드가 들어감
<template>
<div>
  <h1> JEONG KI HYUK HOME PAGE</h1>
  <form action="">
    <inputField :name2="name2" @update-name="updateName" />
    <br><button>Submit</button>
   <br> 
    </form>
{{ name2 }}

  <!-- <KH/> -->
  </div>
</template>

// 데이터 , 메소드 , 컴퓨티드, 와치등 옵션들이 들어감
<script>
import inputField from '@/components/inputField.vue';
// import KH from '@/components/KH.vue';
export default {
  components: {
    inputField
  },

  data() {
    return {
      name2 : ''
    }
  },

  methods: {
    updateName(name) {
      this.name2= name;
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