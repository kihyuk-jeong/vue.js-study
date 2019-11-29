<template>
  <div>
    <h1>All Users({{count}})</h1>
    <h2>Seoul users : ({{seouls}})({{$store.getters.percentOfSeoul}}%)</h2>
    <!-- $store.getters.percentOfSeoul => percentOfSeoul 로 대체 가능 -->
    <v-list two-line>
      <v-list-tile
        v-for="(userss, index) in allUsers"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="userss.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="userss.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{userss.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
// import { EventBus } from '@/main.js'
import { mapState, mapGetters } from 'vuex'

  export default {
    data() {
      return {

      }
    },
    // $store.getters 쉽게 사용하는 방법
    computed: {
      ...mapGetters({
        count: 'allUsersCount',
        seouls: 'countOfSeoul',
        percent: 'percentOfSeoul'
      }),

      ...mapState(['allUsers'])
    },
    // mounted() {
    //   EventBus.$on('signUp', users => {
    //     this.allUsers.push(users)
    //   })
    // }
  }
</script>
