<template>
  <v-footer padless app absolute>
    <v-card
      width="100%"
      flat
      tile
      style="background-color: #7ba237"
      class="white--text text-center"
    >
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-img
            src="../../src/assets/sidmool-logo.png"
            aspect-ratio="1"
          ></v-img>
        </v-col>

        <v-col>
          <v-row>
            <v-card-text>
              <v-btn
                v-for="sns in snsList"
                :key="sns.icon"
                class="mx-4 white--text"
                icon
                link
                target="_blank"
                :href="sns.href"
              >
                <v-icon size="24px">
                  {{ sns.icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
          </v-row>
          <v-row>
            <v-card-text class="white--text pt-0 text-start">
              <v-row>
                <v-col>
                  상호:주식회사시드물
                  <br />주소:우)35083대전광역시중구안영로42(안영동)
                  <br />전화:1577-9638(해외:+82-42-716-0227)
                  <br />팩스:042-367-7989
                  <br />
                  사업자등록번호:305-81-94469
                  <br />건강기능식품판매업:대전중구제503</v-col
                >
                <v-col
                  >통신판매업신고번호:제2008-대전증구-0247호
                  <br />화장품제조판매업등록필증제1163호
                  <br />
                  서비스개선:helpasidmool.com<br />대표:민병권<br />개인정보채임자:박소진</v-col
                >
              </v-row>
            </v-card-text>
          </v-row>
          <v-row>
            <v-btn rounded outlined class="white--text ma-1">회사소개</v-btn
            ><br />
            <v-btn rounded outlined class="white--text ma-1"
              >개인정보처리방침</v-btn
            >
            <v-btn rounded outlined class="white--text ma-1"
              >영상정보처리기기 운영/관리 방침</v-btn
            >
            <v-btn rounded outlined class="white--text ma-1">이용약관</v-btn>
            <v-btn rounded outlined class="white--text ma-1">이용안내</v-btn>
            <v-btn rounded outlined class="white--text ma-1">고객센터</v-btn>
            <v-btn rounded outlined class="white--text ma-1"
              >사업자정보확인</v-btn
            >
          </v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>SIDMOOL</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    snsList: [
      { icon: "mdi-facebook", href: "https://ko-kr.facebook.com/sidmool1/" },
      { icon: "mdi-twitter", href: "https://twitter.com/sidmool" },
      { icon: "mdi-youtube", href: "https://www.youtube.com/@sidmoolytb" },
      { icon: "mdi-instagram", href: "https://www.instagram.com/sidmool/" },
      { icon: "mdi-message", href: "https://pf.kakao.com/_VNktZ" },
    ],
  }),
};
</script>

<style></style>
