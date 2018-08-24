<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field 
                prepend-icon="person" 
                name="email" 
                label="E-mail" 
                type="email"
                v-model="email"
                :rules="emailRules"
                required>
              </v-text-field>
              <v-text-field 
                id="password" 
                prepend-icon="lock" 
                name="password" 
                label="Password" 
                type="password"
                v-model="password"
                counter=""
                :rules="passwordRules"
                required>
              </v-text-field>
              <v-text-field 
                id="password_confirm" 
                prepend-icon="lock" 
                name="confirm password" 
                label="Confirm password" 
                type="password"
                v-model="confirmPassword"
                counter=""
                :rules="confirmPasswordRules"
                required>
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="primary"
              @click="onFormSubmit"
              :disabled="!valid">
              Create account
            </v-btn>
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
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
        ],
        confirmPasswordRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Passwords should match'
        ]
      }
    },
    methods: {
      onFormSubmit() {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          console.log(user);
        }
      }
    },
  }
</script>

<style scoped>

</style>