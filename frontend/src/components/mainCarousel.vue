<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-carousel
          v-model="mainModel"
          continuous
          cycle
          interval="5000"
          hide-delimiter-background
          :show-arrows="false"
          delimiter-icon="mdi-minus"
          :height="mainCarouselHeight"
          class="rounded-xl elevation-12"
        >
          <v-carousel-item v-for="i in 5" :key="i">
            <v-card flat class="mx-3 my-6" :height="mainCarouselHeight - 50">
              <v-row align="center" justify="center">
                <v-col cols="6">
                  <v-card-text>
                    <v-img :src="src" contain></v-img>
                  </v-card-text>
                </v-col>
                <v-col cols="6">
                  <v-card
                    class="overflow-auto d-flex flex-column align-center justify-center"
                    flat
                    :height="mainCarouselHeight - 50"
                  >
                    <v-card-title
                      class="text-center justify-center text-body-1 text-md-h6 text-lg-h4"
                      >마다가스카르 리얼 수분크림</v-card-title
                    >
                    <v-card-text
                      class="text-center text-lg-subtitle-1"
                      v-if="isMobile"
                      >약해진 피부 장벽 관리에 도움 <br />지성, 문제성 피부에도
                      사용하기 편안한 착한 리얼 수분크림 <br />병풀 추출물 80%
                    </v-card-text>

                    <v-card-text
                      class="text-center text-lg-subtitle-1"
                      v-if="isMobile"
                      >병풀 추출물 80% <br />마데카소사이드<br />
                      아시아티코사이드 <br />마데카식애씨드 <br />아시아틱애씨드
                      <br />(센텔라아시아티카 핵심성분 고농축 파우더)
                    </v-card-text>

                    <v-card-text class="text-center text-lg-subtitle-2">
                      16,800원</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    mainModel: 0,
    src: require("@/assets/cream2.jpg"),
  }),
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.xs) {
        return false;
      }
      return true;
    },
    mainCarouselHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
      }
    },
  },
};
</script>

<style>
.v-carousel__controls__item {
  color: green !important;
}
</style>
