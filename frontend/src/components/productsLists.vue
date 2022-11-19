<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="i in 20" :key="i" cols="6" sm="3">
        <v-card flat>
          <v-img src="../assets/cream.jpg" contain rounded="xl"> </v-img>
          <v-chip-group>
            <v-chip small>모공관리</v-chip>
            <v-chip small>best</v-chip>
            <v-chip small>수분공급</v-chip>
          </v-chip-group>
          <v-card-title class="text-subtitle-2 text-md-title text-lg-h6"
            >울트라 페이셜 세라마이드 크림</v-card-title
          >

          <v-card-text class="text-center">13,900</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-pagination circle v-model="page" :length="4"> </v-pagination
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style></style>
