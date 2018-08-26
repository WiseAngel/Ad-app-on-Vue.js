<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm6>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
          v-for="ad in myAds"
          :key="ad.id"
          class="elevation-10 mb-4"
        >
          <v-layout row>
            <v-flex xs4>
              <v-card-media
                :src="ad.imageSrc"
                height="160"
              ></v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="`/ad/${ad.id}`"
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    // data() {
    //   return {
    //     ads: [
    //       {
    //         title: 'First',
    //         description: 'First desc',
    //         promo: false,
    //         imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    //         id: '1'
    //       },
    //       {
    //         title: 'Second',
    //         description: 'Second desc',
    //         promo: true,
    //         imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    //         id: '2'
    //       },
    //       {
    //         title: 'Third',
    //         description: 'Third desc',
    //         promo: true,
    //         imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    //         id: '3'
    //       }
    //     ]
    //   }
    // },
    computed: {
      myAds() {
        return this.$store.getters.myAds;
      }
    },
  }
</script>

<style scoped>

</style>