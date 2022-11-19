<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-xl">
          <v-card-title class="justify-center">쿠폰내역</v-card-title>
          <v-card-text
            >시드물에서사용가능한회원님의쿠폰내역을확인하실수있습니다 <br />
            할인/적립쿠폰은적립금할인등을제외한실제결제금액에적용됩니다.</v-card-text
          >
          <v-card-text v-for="i in 3" :key="i">
            <v-card class="rounded-xl mb-4">
              <v-row align="center" justify="center">
                <v-col>
                  <v-card-title>2022년 11월 출석체크 이벤트 쿠폰</v-card-title>
                  <v-card-text class="text-subtitle-1 font-weight-black"
                    >2022-11-23 (23시00분) ~2023-02-21 (23시59분)</v-card-text
                  >
                  <v-card-text>
                    쿠폰번호 : 28091618 <br />사용가능금액 : 제한없음 <br />
                    쿠폰전용품목 : 전상품
                  </v-card-text>
                </v-col>
                <v-col cols="4">
                  할인율
                  <div class="text-h1 font-weight-black">20%</div>
                </v-col>
              </v-row>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="rounded-xl">
          <v-card-title> 주문시 할인쿠폰 적용방법</v-card-title>
          <v-card-text>
            주문서 쿠폰 선택에서 고객님이 보유하신 [쿠폰번호]를 선택하시면
            할인금액(또는 적립금액)이 나타납니다. (정률할인(적립)의 경우,
            할인률(적립률)이 나타납니다.)
          </v-card-text>
          <v-card-title> 쿠폰 사용시 유의사항 </v-card-title>
          <v-card-text>
            1. 발급된 할인쿠폰은 타인에게 양도가 불가하며, 적립금/예치금으로
            전환되지 않습니다. 쿠폰 양도, 매매 관련 내용이 확인되면 삭제될 수
            있습니다.<br />
            2. 쿠폰마다 사용가능 금액과 사용기한이 정해져 있으며, 1개 주문서에
            1개의 쿠폰만을 사용하실 수 있습니다.<br />
            3. 쿠폰을 사용한 주문 후 반품/환불의 경우 한번 사용하신 쿠폰은 다시
            사용을 하실 수 없습니다.<br />
            4. 쿠폰 적용 품목 및 카테고리가 제한된 경우, 해당 품목 또는
            카테고리에서만 쿠폰을 사용하실 수 있습니다. <br />5. 할인/적립
            쿠폰은 적립금할인 등을 제외한 실제 결제금액에 적용됩니다.<br />
            <div class="red--text text-subtitle-1 font-weight-black">
              ※ 사용기간이 지난 쿠폰은 복구되지 않습니다.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
<style lang=""></style>
