<template>
  <v-container>
    <v-snackbar
      v-model="quantitySnackbar"
      timeout="2000"
      text
      top
      rounded="xl"
      elevation="10"
      min-width="0"
      color="red"
    >
      {{ snackbarText }}
    </v-snackbar>
    <v-row>
      <v-col>
        <v-card flat>
          <v-row>
            <v-col cols="12" md="6">
              <v-card-text>
                <v-img
                  src="../assets/oil.jpeg"
                  class="rounded-xl elevation-10"
                  aspect-ratio="1"
                ></v-img>
              </v-card-text>
              <v-card-text>
                <v-rating
                  class="float-right"
                  empty-icon="mdi-star-outline"
                  full-icon="mdi-star"
                  half-icon="mdi-star-half-full"
                  length="5.0"
                  :value="3"
                  half-increments
                  readonly
                  dense
                ></v-rating>
                리뷰수 : 3,300
              </v-card-text>
            </v-col>

            <v-col cols="12" md="6">
              <v-card-title class="text-center justify-center">
                {{ items[0].name }}</v-card-title
              >

              <v-chip-group>
                <v-chip> 모공관리 </v-chip>
                <v-chip> 악건성 </v-chip>
                <v-chip>피지관리 </v-chip>
              </v-chip-group>

              <v-card-text>
                판매가격 : {{ items[0].price.toLocaleString() }}원
              </v-card-text>

              <v-select
                v-model="selected"
                filled
                rounded
                label="제품선택"
                :items="items"
                item-text="name"
                return-object
                :menu-props="{ bottom: true, offsetY: true, rounded: 'xl' }"
                open-on-clear
                clearable
                hide-details=""
              >
              </v-select>

              <v-card-text>
                <v-card
                  rounded="xl"
                  v-for="list in total"
                  :key="list.name"
                  class="mb-2"
                >
                  <v-card-title class="text-subtitle-1 py-3 px-4"
                    >{{ list.name }}
                    <v-spacer></v-spacer>
                    <v-btn icon @click="deleteItem(list.name)"
                      ><v-icon>mdi-close</v-icon></v-btn
                    ></v-card-title
                  >

                  <v-card-text class="pa-3">
                    <v-text-field
                      v-model="list.quantity"
                      dense
                      type="number"
                      hide-details
                      single-line
                      error-count="2"
                      filled
                      rounded
                      hide-spin-buttons
                      prepend-icon="mdi-minus"
                      append-outer-icon="mdi-plus"
                      @click:prepend="minusQuantity(list.name)"
                      @click:append-outer="plusQuantity(list.name)"
                    ></v-text-field>
                  </v-card-text>
                </v-card>
              </v-card-text>
              <v-divider></v-divider>
              {{ total }}
              <v-card-text>
                총 상품 금액
                <span class="float-right"
                  >{{ totalPrice.toLocaleString() }} 원</span
                >
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row :no-gutters="!isMobile">
      <v-col cols="12">
        <v-tabs fixed-tabs v-model="tab">
          <v-tab>제품상세설명</v-tab>
          <v-tab>리뷰 3,300</v-tab>
          <v-tab>Q&A</v-tab>
          <v-tab>배송정보</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" :class="isMobile ?? 'mx-9'">
          <v-tab-item>
            <v-img src="../assets/ultra_facial_ceramide_gel_cream.jpg"></v-img
          ></v-tab-item>
          <v-tab-item> <reviewLists /></v-tab-item>
          <v-tab-item> <qnaLists /></v-tab-item>
          <v-tab-item>
            <v-img src="../assets/sidmool-detailinfo.jpg"></v-img
          ></v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import reviewLists from "../components/reviewLists.vue";
import qnaLists from "../components/qnaLists.vue";
export default {
  components: {
    reviewLists,
    qnaLists,
  },
  data: () => ({
    selected: null,
    tab: 0,
    items: [
      { name: "카렌듈라 더블 딥 클렌징 오일", price: 13900 },
      { name: "카렌듈라 더블 딥 클렌징 오일3", price: 13900 },
    ],
    total: [],
    quantitySnackbar: false,
    snackbarText: "스낵바다!",
    totalPrice: 0,
  }),
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return false;
      }
      return true;
    },
  },
  watch: {
    total: {
      handler() {
        this.totalPrice = 0;
        for (var list of this.total) {
          this.totalPrice += list.price * list.quantity;
        }
      },
      deep: true,
    },
    selected() {
      if (this.selected) {
        let findIndex = this.total.findIndex((val) => {
          console.log(val.name);
          return val.name === this.selected.name;
        });

        if (findIndex > -1) {
          this.quantitySnackbar = !this.quantitySnackbar;
          this.snackbarText = "이미 선택된 옵션입니다.";
          return (this.selected = 0);
        }
        this.total.push({
          name: this.selected.name,
          price: this.selected.price,
          quantity: 1,
        });

        this.selected = 0;
      }
    },
  },
  methods: {
    deleteItem(name) {
      let findIndex = this.total.findIndex((val) => {
        return val.name === name;
      });
      this.total.splice(findIndex, 1);
    },
    plusQuantity(name) {
      let findIndex = this.total.findIndex((val) => {
        return val.name === name;
      });
      if (this.total[findIndex].quantity >= 99) {
        this.quantitySnackbar = !this.quantitySnackbar;
        this.total[findIndex].quantity = 99;
        this.snackbarText = "선택할 수 있는 최대 수량을 초과했습니다.";
        return;
      }

      return this.total[findIndex].quantity++;
    },

    minusQuantity(name) {
      let findIndex = this.total.findIndex((val) => {
        return val.name === name;
      });
      if (this.total[findIndex].quantity == 1) {
        this.quantitySnackbar = !this.quantitySnackbar;
        this.snackbarText = "선택할 수 있는 최소 수량 입니다.";
        return;
      }
      return this.total[findIndex].quantity--;
    },
  },
};
</script>

<style>
.v-slide-group__prev {
  flex: 0 !important;
  min-width: 0 !important;
}
</style>
