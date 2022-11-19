<template>
  <v-container
    fluid
    fill-height
    style="background-color: rgb(123, 162, 55, 0.7)"
  >
    <v-row justify="center" align="center">
      <v-spacer></v-spacer>
      <v-col>
        <router-view></router-view>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
