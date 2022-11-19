<template>
  <v-container fluid>
    <v-row fill-height align="center" justify="center">
      <!-- <v-app-bar flat color="rgb(0,0,0,0)" extended>
        <v-app-bar-title class="text-h3 flex justify-center">
          Title
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar> -->
      <!-- <v-col class="text-h2 text-center mt-3"> SIDMOOL </v-col> -->
      <v-col cols="12">
        <userInfoButtons />
      </v-col>
      <search />
      <v-col cols="12"> <category /></v-col>
      <v-col cols="12"><mainCarousel /></v-col>
      <!-- <v-col cols="12"> <recommendItems /></v-col> -->
      <v-col cols="12"> <bestCarousel /></v-col>

      <!-- <productList /> -->
      <v-col cols="12"><productDetails /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import mainCarousel from "../mainCarousel.vue";
import productLists from "../productsLists.vue";
import category from "../category.vue";
import bestCarousel from "../bestCarousel.vue";
import search from "../search.vue";
import userInfoButtons from "../userInfoButtons.vue";
import recommendItems from "../recommendItems.vue";
import productDetails from "../productDetails.vue";
export default {
  components: {
    mainCarousel,
    productLists,
    category,
    bestCarousel,
    search,
    userInfoButtons,
    recommendItems,
    productDetails,
  },
};
</script>
