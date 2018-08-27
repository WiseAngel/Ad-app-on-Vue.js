<template>
  <v-dialog width="400" v-model="modal">
    <v-btn class="info mr-3" slot="activator">Edit</v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Edit ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
           <v-card-text>
             <v-text-field
               name="title"
               label="Title"
               type="text"
               v-model="editedTitle"
               required>
             </v-text-field>
             <v-textarea
               name="description"
               label="Description"
               type="text"
               v-model="editedDescription"
               required>
             </v-textarea>
           </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="error" flat @click="onCancel">Cancel</v-btn>
              <v-btn class="success" flat @click="onSave">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "EditAdModal",
    props: ['ad'],
    data() {
      return {
        modal: false,
        editedTitle: this.ad.title,
        editedDescription: this.ad.description
      }
    },
    methods: {
      onCancel() {
        this.editedDescription = this.ad.description;
        this.editedTitle = this.ad.title;
        this.modal = false;
      },
      onSave() {
        if (this.editedDescription !== '' && this.editedTitle !== '') {
          this.$store.dispatch('updateAd', {
            title: this.editedTitle,
            description: this.editedDescription,
            ad: this.ad.id
          });

          this.modal = false;
        }

      }
    },
  }
</script>

<style scoped>

</style>