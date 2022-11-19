<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-h5 text-center"> 리뷰작성하기 </v-col>
      <v-col cols="12">
        <v-card class="rounded-xl">
          <v-card-text class="text-center">
            <v-avatar tile rounded="xl" size="100">
              <v-img
                src="../../../src/assets/cream2.jpg"
                contain
                aspect-ratio="1"
                rounded="xl"
              >
              </v-img
            ></v-avatar>
            <strong class="text-h6">마다가스카르 수분크림 80g</strong>
          </v-card-text>
          <v-form>
            <v-card-text class="text-center">
              제품의 별점을 선택해주세요
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingEmpty"
                half-increments
                hover
                size="80"
              ></v-rating>
              {{ rating }} / 5

              <v-btn block rounded color="green" height="50">사진선택</v-btn>

              <v-textarea
                background-color="green lighten-4"
                rounded
                placeholder="리뷰를 작성해주세요"
                counter="1000"
                rows="10"
              >
              </v-textarea>
            </v-card-text>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-btn block rounded height="50">취소</v-btn></v-col
                >
                <v-col cols="6"
                  ><v-btn block rounded height="50" color="green lighten-2"
                    >리뷰등록하기</v-btn
                  ></v-col
                >
              </v-row>
            </v-card-text>
          </v-form></v-card
        ></v-col
      >
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    rating: 0,
  }),
};
</script>
<style>
textarea {
  margin: 24px 0px;
}
tbody tr:hover {
  background-color: transparent !important;
}
.v-data-table__selected {
  background-color: transparent !important;
}
</style>
