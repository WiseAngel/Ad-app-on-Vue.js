<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-media
            src=""
            height="300"
          ></v-card-media>
          <v-card-text>
            <h1 class="text--primary"></h1>
            <p></p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="info">Edit</v-btn>
            <v-btn class="primary">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Ad'
      }
    },
  }
</script>

<style scoped>

</style>