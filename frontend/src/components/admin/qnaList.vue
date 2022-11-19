<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          v-model="selected"
          :items="items"
          :items-per-page="5"
          class="elevation-1 rounded-xl"
          show-select
          :single-select="singleSelect"
        ></v-data-table>
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
        {
          text: "no.",
          align: "start",

          value: "number",
        },
        { text: "제품명", value: "name" },
        { text: "재고 수량", value: "fat" },
        { text: "정가", value: "carbs" },
        { text: "판매가", value: "protein" },
        { text: "업로드 날짜", value: "iron" },
        { text: "수정/삭제", value: "iron" },
      ],
      items: [{ name: "hi" }],
    };
  },
};
</script>
<style lang=""></style>
