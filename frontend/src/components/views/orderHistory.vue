<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12"> 주문/배송 조회 </v-col>
      <v-item-group>
        <v-col cols="12" v-for="j in 3" :key="j">
          <v-item v-slot="{ active, toggle }">
            <v-card rounded="xl" class="my-4">
              <v-row align="center" justify="center">
                <v-col cols="3" class="text-center">
                  2022.11.21 <br />
                  Y2211217057705
                  <br />
                  <v-btn rounded class="elevation-0" @click="toggle"
                    >주문상세보기</v-btn
                  >
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <v-card-text v-for="i in 4" :key="i">
                    <v-row align="center" justify="center">
                      <v-col cols="2">
                        <v-img
                          src="../../assets/cream2.jpg"
                          aspect-ratio="1"
                          width="100"
                          contain
                        >
                          <template v-slot:placeholder>
                            <v-sheet>
                              <v-skeleton-loader type="image">
                              </v-skeleton-loader>
                            </v-sheet>
                          </template>
                        </v-img>
                      </v-col>
                      <v-col>
                        스킨소스 D-판테놀 앰플 12ml/32ml 제품선택 : 스킨소스
                        디판테놀 앰플 32ml(+12000)
                      </v-col>
                      <v-col cols="2" class="text-center">1개</v-col>
                      <v-col cols="2" class="text-center">15,300원</v-col>
                      <v-divider vertical></v-divider>
                      <v-col cols="3" class="text-center justify-center">
                        <v-card-text>배송완료</v-card-text>
                        <v-btn outlined rounded small link to="/createReview"
                          >리뷰작성하기</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>

              <v-row>
                <v-scroll-y-transition>
                  <v-card-text v-if="active" class="justify-center pt-0">
                    <v-divider></v-divider>
                    <v-row>
                      <v-col cols="6">
                        <v-card-title>배송지 정보</v-card-title>
                        <v-card-text>
                          <v-chip flat>받는분</v-chip>
                          <span class="ml-4">김찬희</span>
                        </v-card-text>
                        <v-card-text class="pt-0">
                          <v-chip flat>연락처</v-chip>
                          <span class="ml-4">010-2038-2048</span>
                        </v-card-text>
                        <v-card-text class="pt-0">
                          <v-chip flat>주소</v-chip>
                          <span class="ml-4"
                            >서울특별시 중구 세종대로 110 서울특별시청</span
                          >
                        </v-card-text>
                        <v-card-text class="pt-0">
                          <v-chip flat>배송메세지</v-chip>
                          <span class="ml-4">문앞에 놓아주세요</span>
                        </v-card-text>
                      </v-col>
                      <v-col cols="6">
                        <v-card-title>결제 정보</v-card-title>
                        <v-card-text class="pt-0">
                          <v-chip flat>총상품금액</v-chip>
                          <span class="ml-4">21,200원</span>
                        </v-card-text>
                        <v-card-text class="pt-0">
                          <v-chip flat>총배송비</v-chip>
                          <span class="ml-4">21,200원</span>
                        </v-card-text>
                        <v-card-text class="pt-0">
                          <v-chip flat>쿠폰할인금액</v-chip>
                          <span class="ml-4">21,200원</span>
                        </v-card-text>
                        <v-card-text class="pt-0">
                          <v-chip flat>포인트및기타결제</v-chip>
                          <span class="ml-4">21,200원</span>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                          <v-chip flat color="red lighten-3">총결제금액</v-chip>
                          <span class="ml-4">21,200원</span>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-scroll-y-transition>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-item-group>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      // loading: false,
    };
  },
  // created() {
  //   const readyHandler = () => {
  //     console.log(document.readyState);
  //     if (document.readyState == "complete") {
  //       this.loading = true;
  //       console.log(this.loading);
  //       document.removeEventListener("readystatechange", readyHandler);
  //     }
  //   };

  //   document.addEventListener("readystatechange", readyHandler);

  //   readyHandler(); // in case the component has been instantiated lately after loading
  // },
};
</script>
<style lang=""></style>
