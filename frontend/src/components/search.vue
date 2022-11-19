<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-spacer v-if="isMobile"></v-spacer>
      <v-col>
        <v-form>
          <v-text-field
            filled
            hide-details
            rounded
            append-icon="mdi-magnify"
            clearable
            clear-icon="mdi-close"
          >
          </v-text-field>
        </v-form>
      </v-col>
      <v-spacer v-if="isMobile"></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.xs) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style></style>
