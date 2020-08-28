<template>
  <div>
      Completed Todo : {{ numberOfCompletedTodo}}
      {{todos}}
      </div>
</template>

<script>
export default {
   
    computed: {
        numberOfCompletedTodo() {
            return this.todos.filter(todo => todo.checked).length;
        },
        todos(){
            return this.$store.state.todos;
        }
    }



}
</script>

<style>

</style>