<template>
    <div>
    
     <label for="">Name</label>
    <input type = "text" 
    :value ="name2" 
    style="padding: 30px; border: 2px solid green;"
    @input = "updateName"
>
    </div>
</template>

<script>
export default {
    props : {
        name2 :{
            type : String,
            required: true
        }
    },
    methods : {
        updateName(e) {
            console.log(e.target.value);
            this.$emit('update-name', e.target.value);
        }
    }



}
</script>