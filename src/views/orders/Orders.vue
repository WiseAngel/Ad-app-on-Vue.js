<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm6>
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
                :to="`/ad/${order.adId}`"
              >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        orders: [
          {
            id: '123',
            name: 'Nik',
            phone: '8-999-999-99-99',
            adId: '321',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone(order) {
        order.done = true
      }
    },
  }
</script>

<style scoped>

</style>