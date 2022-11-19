<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center text-md-h6">BEST ITEM</p>
        <v-carousel
          hide-delimiter-background
          hide-delimiters
          :height="carouselHeight + 30"
          class="pa-4"
        >
          <template v-for="(item, index) in slider">
            <v-carousel-item
              v-if="(index + 1) % columns === 1 || columns === 1"
              :key="index"
              eager
            >
              <v-row align="center" justify="center">
                <template v-for="(n, i) in columns">
                  <template v-if="+index + i < slider">
                    <v-col :key="i" class="ma-2">
                      <v-card
                        rounded="xl"
                        :height="carouselHeight * 0.9"
                        elevation="10"
                      >
                        <v-card-text>
                          <v-img
                            src="../assets/oil.jpeg"
                            v-if="+index + i < slider"
                            contain
                            :height="carouselHeight * 0.4"
                            aspect-ratio="1"
                            eager
                          >
                          </v-img>
                        </v-card-text>
                        <v-card
                          class="overflow-auto d-flex flex-column align-center"
                          flat
                          :height="carouselHeight * 0.4"
                        >
                          <v-card-title
                            class="text-center justify-center text-body-1"
                            >울트라 페이셜 세라마이드 크림</v-card-title
                          >
                          <v-card-text class="text-caption"
                            >Winter is coming 피부와 마음을 촉촉하게 감싸드리는
                            <br />
                            <br />
                            <div class="text-center">13,900 원</div>
                          </v-card-text>
                          <!-- <v-card-text class="text-center text-caption"
                          >13,900 {{ +index + i + 1 }}</v-card-text
                        > -->
                        </v-card>
                      </v-card>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-carousel-item>
          </template>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    windowHeight: window.innerHeight,
    // columns: 4,
    slider: 12,
  }),
  computed: {
    columns() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return 3;
        default:
          return 4;
      }
    },
    carouselHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 300;
        case "md":
          return 400;
        case "lg":
          return 400;
        case "xl":
          return 500;
      }
    },
  },
};
</script>

<style></style>
