<template>
  <v-app>
    <adminDrawer v-if="$route.path.includes('/admin')" />
    <v-main>
      <v-col class="text-h2 text-center mt-3"> SIDMOOL </v-col>
      <router-view></router-view>
    </v-main>
    <Footer
      v-if="!$route.path.includes('/users') && !$route.path.includes('/admin')"
    />
  </v-app>
</template>

<script>
import Footer from "./components/footer.vue";
import adminDrawer from "./components/admin/drawer.vue";

export default {
  name: "App",

  components: {
    Footer,
    adminDrawer,
  },

  data: () => ({
    //
  }),
};
</script>
