<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-h4 text-center"> 상품 주문 및 결제</v-col>
      <v-col cols="12">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :single-select="singleSelect"
          item-key="name"
          show-select
          class="elevation-1 rounded-xl"
          :hide-default-footer="true"
        >
          <template v-slot:[`item.img`]="{ item }">
            <img
              class="rounded-xl ma-2"
              :src="require('@/assets/' + item.img)"
              aspect-ratio="1"
              width="100%"
            />
          </template>
          <template v-slot:[`item.delete`]="{ item }">
            <v-btn @click="deleteItem(item)" icon outlined
              ><v-icon> mdi-close </v-icon></v-btn
            >
          </template>
        </v-data-table>
      </v-col>
      <v-col cols="12">
        <v-card class="rounded-xl">
          <v-row align="center" justify="center">
            <v-col cols="3">
              <v-card-title class="justify-center">총 상품 금액</v-card-title>
              <v-card-title class="justify-center">34,500원</v-card-title>
            </v-col>
            <v-col cols="1">
              <v-icon x-large>mdi-plus</v-icon>
            </v-col>
            <v-col cols="3">
              <v-card-title class="justify-center">배송비</v-card-title>
              <v-card-title class="justify-center">3,000원</v-card-title>
            </v-col>
            <v-col cols="1">
              <v-icon x-large>mdi-equal</v-icon>
            </v-col>

            <v-col cols="3">
              <v-card-title class="justify-center">총 결제 금액</v-card-title>
              <v-card-title class="justify-center">37,500원</v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-btn block rounded outlined color="green" x-large>선택상품주문</v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn block rounded color="green" x-large elevation-0
          >전체상품주문</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        { text: "img", align: "center", value: "img", width: "20%" },
        {
          text: "상품정보",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "수량", value: "quantity" },
        { text: "적립금", value: "point" },
        { text: "가격", value: "price" },
        { text: "삭제", value: "delete" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          quantity: 1,
          point: 60,
          price: 24000,

          img: "cream2.jpg",
        },
        {
          name: "Ice cream sandwich",
          quantity: 1,
          point: 90,
          price: 37000,

          img: "cream2.jpg",
        },
        {
          name: "Eclair",
          quantity: 1,
          point: 100,
          price: 23000,
          img: "cream2.jpg",
        },
        {
          name: "Cupcake",
          quantity: 1,
          point: 30,
          price: 67000,
          img: "cream2.jpg",
        },
        {
          name: "Gingerbread",
          quantity: 1,
          point: 100,
          price: 49000,
          img: "cream2.jpg",
        },
        {
          name: "Jelly bean",
          quantity: 1,
          point: 40,
          price: 94000,
          img: "cream2.jpg",
        },
        {
          name: "Lollipop",
          quantity: 1,
          point: 20,
          price: 98000,
          img: "cream2.jpg",
        },
        {
          name: "Honeycomb",
          quantity: 1,
          point: 30,
          price: 87000,
          img: "cream2.jpg",
        },
        {
          name: "Donut",
          quantity: 1,
          point: 200,
          price: 51000,
          img: "cream2.jpg",
        },
        {
          name: "KitKat",
          quantity: 1,
          point: 200,
          price: 65000,
          img: "cream2.jpg",
        },
      ],
    };
  },
  methods: {
    deleteItem(item) {
      console.log(item);
    },
  },
};
</script>
<style lang=""></style>
