<template>  
<!-- v-model hakee snackbar-booleanista, ja komponentti näkyy jos se on true -->
    <v-snackbar
      v-model="$store.state.snackbar.show"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          @click="snackbar = $store.commit('hideSnackbar')"
          text
          v-bind="attrs"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    </template>  
    <script>
    export default {
    }
    </script>