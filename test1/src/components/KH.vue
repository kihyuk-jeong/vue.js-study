<template>
    <!-- <h1>{{title}}</h1> -->
    <!-- {{num}} -->
    <!-- <div v-if='!ck'> {{ name }} </div>     -->
    <!-- <div v-else>KHH </div> -->

    <p>header</p>
    <slot name="header"></slot>
    <p>body</p>
    <slot></slot>
    <p>footer</p>
    <button @click ="updateName">클릭해보세용!</button>
</template>

<script>
export default {
    props: {
        title : {
            type : String,
            default : 'Default title!'
        },
        num : {
            type : Number,
            default : 8080
        }
    },

    data() {
        return {
            name : 'KHH',
            ck : 'false'
        }
    },

    methods : {
        updateName () {
            this.ck = !this.ck;
            this.name = 'KH updated';
        }
    }
}
</script>

<style scoped>

</style>