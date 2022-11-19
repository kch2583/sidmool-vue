<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">마이페이지</v-col>
      <v-col cols="6">
        <p class="text-center">안녕하세요 ㅇㅇㅇ님</p>
        <v-card rounded="xl">
          <v-card-text>
            <p>가입일 : 2016.05.05 08:29:31</p>
            <p>적립금 : 2,210 | 총 주문금액 : 792,740 | 예치금 : 0</p>
            <p>* 총 주문금액은 배송 완료 기준 7일 이후 자동으로 변경됩니다.</p>
            <p class="mb-0">
              * 누적금액 = 총 주문금액 - 적립금 사용 금액
            </p></v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="6">
        <p class="text-center">ㅇㅇㅇ님의 현재 등급은 [에센스] 입니다.</p>
        <v-icon
          class="d-flex justify-center align-center"
          color="green"
          size="140"
          >mdi-sprout-outline</v-icon
        >
        <div class="d-flex justify-center align-center">
          <v-btn rounded class="elevation-0">등급별 혜택 안내</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="3" class="d-flex justify-center align-center">
        <v-badge overlap>
          <v-chip pill to="/orderHistory" link>주문내역</v-chip>
        </v-badge>
      </v-col>

      <v-col cols="3" class="d-flex justify-center align-center">
        <v-badge overlap>
          <v-chip to="/cart" link>장바구니</v-chip></v-badge
        ></v-col
      >
      <v-col cols="3" class="d-flex justify-center align-center">
        <v-badge overlap
          ><v-chip to="/coupon">쿠폰내역</v-chip>
        </v-badge></v-col
      >
      <v-col cols="3" class="d-flex justify-center align-center">
        <v-badge overlap> <v-chip>출석확인</v-chip> </v-badge></v-col
      >
    </v-row>
    <v-row>
      <v-col>
        <v-list rounded>
          <v-list-item-group>
            <v-list-item> 1:1 문의</v-list-item>
            <v-list-item>내가 쓴 리뷰</v-list-item>
            <v-divider class="mb-2"></v-divider>
            <v-list-item>관심상품</v-list-item>
            <v-list-item>최근 본 상품</v-list-item>
            <v-divider class="mb-2"></v-divider>
            <v-list-item>시드물페이 관리</v-list-item>
            <v-list-item>회원정보 수정</v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  // created() {
  //   this.$http.get("/api/mypage").then((response) => {
  //     console.log(response.data);
  //   });
  // },
  methods: {},
};
</script>
<style lang=""></style>
