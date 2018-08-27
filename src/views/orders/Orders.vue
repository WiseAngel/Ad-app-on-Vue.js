<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 class="text-xs-center pt-5" v-if="loading">
        <v-progress-circular
          :size="100"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 v-else-if="!loading && orders.length !== 0">
        <h1 class="text-xs-center text--secondary mb-3">Orders</h1>
        <v-list two-line subheader>
          <v-list-tile
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                :input-value="order.done"
                @change="markDone(order)"
                color="primary darken-1"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                class="primary"
                :to="'/ad/' + order.adId"
              >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs12 class="text-xs-center" v-else>
        <h1 class="text--secondary"> You have no orders</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    methods: {
      markDone(order) {
        order.done = true
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading;
      },
      orders() {
        return this.$store.getters.orders;
      }
    },
    created() {
      return this.$store.dispatch('fetchOrders');
    }
  }
</script>

<style scoped>

</style>