<template>
  <v-app id="inspire">
     <v-navigation-drawer 
     :mobile-breakpoint="768"
     v-model="drawer" 
     app>
      
      <v-img
        src="mountains.png"
        height="170"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        class="pa-4 pt-7"
      >
          <v-avatar
          size="70"
          class="mb-2">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="Myname"
          >
          </v-avatar>
          <div 
          class="white--text text-subtitle-1 font-weight-bold"
          >Jaakko</div>
          <div 
          class="white--text text-subtitle-2"
          >jasoo123456</div>
      </v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

     <v-app-bar
      app
      absolute
      color="primary"
      dark
      prominent
      height="170"
      src="mountains.png"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>

        <v-row>
          <v-toolbar-title 
            class="ml-3 text-h4">
            {{ $store.state.appTitle }}
            </v-toolbar-title>
        </v-row>
        <v-row>
        <live-date-time/>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
      <snackbar/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,    
      items: [
          { title: 'Todo', icon: 'mdi-format-list-checks', to:'/' },
          { title: 'About', icon: 'mdi-help-box', to:'/about' },
        ], }),
      components: {
          'search': require('@/components/Search.vue').default,
          'live-date-time': require('@/components/LiveDateAndTime.vue').default,
          'snackbar': require('@/components/Shared/Snackbar.vue').default
        }
  }
</script>
<style lang="sass">
.header-container 
  max-width: none !important
</style>