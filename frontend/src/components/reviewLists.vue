<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="rounded-xl">
          <v-card-text>
            <v-row align="center" justify="center">
              <v-col cols="6">
                <v-rating
                  empty-icon="mdi-star-outline"
                  full-icon="mdi-star"
                  half-icon="mdi-star-half-full"
                  length="5.0"
                  :value="3"
                  half-increments
                  readonly
                  dense
                  size="500%"
                  class="text-center"
                ></v-rating>
                <div class="text-center text-h4">3 / 5</div></v-col
              >
              <v-col cols="6">
                <v-row align="center" justify="center" v-for="i in 5" :key="i">
                  5점
                  <v-progress-linear
                    style="width: 80%"
                    color="red darken-2"
                    rounded
                    value="70"
                    height="10"
                    class="mx-3 my-2"
                  ></v-progress-linear>
                  70%
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text> 검색필터 </v-card-text>
        </v-card>
      </v-col>
      <v-col v-for="i in 7" :key="i" cols="12">
        <v-card rounded="xl" elevation="5">
          <v-card-title
            class="text-center text-subtitle-2 text-md-title text-lg-h6"
          >
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg">
              </v-img>
            </v-avatar>
            <span class="mx-3">John Doe</span>
            <v-chip-group>
              <v-chip>지성</v-chip>
              <v-chip>민감성</v-chip>
              <v-chip>웜톤</v-chip>
            </v-chip-group>
            <v-rating
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              length="5.0"
              :value="3"
              half-increments
              size="18"
              dense
              readonly
            ></v-rating>
            <v-spacer></v-spacer>
            <p class="text-body-2 grey--text text--darken-1">2022.11.12</p>
          </v-card-title>
          <v-card-title class="text-subtitle-2 text-md-title text-lg-h6"
            >울트라 페이셜 세라마이드 크림</v-card-title
          >
          <v-card-text class="d-flex overflow-auto">
            <v-dialog
              v-for="(item, index) in 6"
              :key="item"
              v-model="dialog['dialog_' + index]"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-img
                  src="../assets/cream.jpg"
                  contain
                  aspect-ratio="1"
                  class="elevation-3 rounded-xl ma-2"
                  width="23%"
                  v-bind="attrs"
                  v-on="on"
                >
                  <template v-slot:placeholder>
                    <v-sheet>
                      <v-skeleton-loader type="image"> </v-skeleton-loader>
                    </v-sheet>
                  </template>
                </v-img>
              </template>

              <v-card rounded="xl">
                <v-img
                  src="../assets/cream.jpg"
                  contain
                  class="elevation-3 rounded-xl"
                >
                  {{ index }}
                  <v-container fill-height>
                    <v-row align="center" justify="center">
                      <v-col>
                        <v-btn icon @click="dialogPrev(index)"
                          ><v-icon>mdi-arrow-left-thick</v-icon></v-btn
                        >
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="text-right">
                        <v-btn icon @click="dialogNext(index)"
                          ><v-icon>mdi-arrow-right-thick</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-img>
              </v-card>
            </v-dialog>
          </v-card-text>

          <v-card-text class="text-caption text-md-body-1 text-lg-subtitle-2">
            <pre>
            Winter is coming 피부와 마음을 촉촉하게 감싸드리는 While
            convenient, the color pack increases the CSS export size by ~30kb.
            Some projects may only require the default provided classes that are
            created at run-time from the Vuetify bootstrap. To disable this
            feature, you will have to manually import and build the main sass
            file. This will require a Sass loader and a .sass/.scss file entry.
            피부와 마음을 촉촉하게 감싸드리는 While convenient, the color pack
            increases the CSS export size by ~30kb. Some projects may only
            require the default provided classes that are created at run-time
            from the Vuetify bootstrap. To disable this feature, you will have
            to
            
            </pre>
          </v-card-text>
          <!-- <v-card-text class="text-center pt-0"
            ><v-btn text rounded>더보기</v-btn></v-card-text
          > -->
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
      dialog: {},
    };
  },

  created() {
    for (let i = 0; i < 6; i++) {
      this.dialog["dialog_" + i] = false;
    }
  },
  methods: {
    dialogPrev(index) {
      console.log(this.dialog);
      if (index == 0) {
        return;
      }
      this.dialog["dialog_" + index] = false;
      return (this.dialog["dialog_" + (index - 1)] = true);
    },
    dialogNext(index) {
      console.log(this.dialog);
      if (index == 5) {
        return;
      }
      this.dialog["dialog_" + index] = false;
      return (this.dialog["dialog_" + (index + 1)] = true);
    },
  },
};
</script>

<style></style>
