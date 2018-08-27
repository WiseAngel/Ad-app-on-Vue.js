<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12>
        <v-card v-if="!loading">
          <v-card-media
            :src="ad.imageSrc"
            height="300"
          ></v-card-media>
          <v-card-text>
            <h1 class="text--primary"> {{ ad.title }}</h1>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <edit-ad-modal :ad="ad"></edit-ad-modal>
            <v-btn class="primary">Buy</v-btn>
          </v-card-actions>
        </v-card>
        <div v-else>
          <v-container>
            <v-layout row>
              <v-flex xs12 class="text-xs-center pt-5">
                <v-progress-circular
                  :size="100"
                  :width="7"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import EditAdModal from "@/components/ad/EditAdModal";
  export default {
    components: {
      EditAdModal
    },
    props: ['id'],
    comments: {
      EditAdModal
    } ,
    computed: {
      ad() {
        const id = this.id;
        return this.$store.getters.adById(id);
      },
      loading() {
        return this.$store.getters.loading;
      }
    }
  }
</script>

<style scoped>

</style>