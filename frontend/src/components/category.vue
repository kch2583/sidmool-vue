<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-spacer v-if="!isMobile"></v-spacer>
      <v-col cols="12" sm="8">
        <v-tabs v-model="tab" centered color="green">
          <v-tab
            link
            to="/products"
            style="background-color: lightgreen"
            class="rounded-xl"
            >제품전체보기</v-tab
          >
          <v-tab class="rounded-xl">기능별</v-tab>
          <v-tab class="rounded-xl">고민별(피부타입별)</v-tab>
          <v-tab class="rounded-xl">성분라인별</v-tab>

          <v-tabs-items v-model="tab">
            <v-card flat>
              <v-tab-item v-for="i in category" :key="i.name" eager>
                <v-chip-group column>
                  <v-chip
                    v-for="list in i.lists"
                    :key="list"
                    :small="isMobile"
                    color="rgb(100,200,70,0.5)"
                  >
                    {{ list }}
                  </v-chip>
                </v-chip-group>
              </v-tab-item>
            </v-card>
          </v-tabs-items>
        </v-tabs>
      </v-col>
      <v-spacer v-if="!isMobile"></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: 1,
    category: [
      { name: "전체보기", lists: [] },
      {
        name: "기능별",
        lists: [
          "스킨토너미스트",
          "앰플",
          "에센스세럼",
          "로션",
          "수분젤",
          "수분크림",
          "크림",
          "썬스크린",
          "클렌징",
          "수제비누",
          "마스크팩",
          "화장소품",
          "바디",
          "헤어",
          "색조",
          "립&아이케어",
          "페이스&바디오일",
          "피부임상",
          "여드름임상",
          "제로마진",
          "시드물2",
          "민중기시리즈",
          "아로마테라피",
          "건강식품",
        ],
      },
      {
        name: "고민별(피부타입별)",
        lists: [
          "피지관리",
          "미백",
          "모공관리",
          "각질관리",
          "주름개선&탄력",
          "장벽강화",
          "AC스팟",
          "리페어관리",
          "속건성(수부지)",
          "건조&민감피부",
          "악건성",
          "붉은톤",
          "바디케어",
          "안티옥시",
          "탈모",
          "시카케어",
          "동물성프리",
        ],
      },
      {
        name: "성분라인별",
        lists: [
          "어성초",
          "무오일 다당류",
          "알로에",
          "봉독",
          "아하",
          "바하",
          "녹차(EGCG)",
          "카렌듈라",
          "아크바이",
          "레드큐어",
          "천연오일",
          "메가펩타이드",
          "콜라겐",
          "호호바",
          "휴먼올리고",
          "EGF, FGI",
          "프로폴리스",
          "히아루론산",
          "세라마이드",
          "티트리",
          "아스타잔틴",
          "사카로발효",
          "닥터트럽",
          "병풀(센텔라)",
          "징크",
          "동백",
          "스킨소스",
          "판테놀",
          "닥터갈라톡",
          "달팽이",
        ],
      },
    ],
  }),

  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style>
.v-slide-group__prev {
  flex: 0 !important;
  min-width: 0 !important;
}
/* .v-tab .v-tab--active {
  background-color: transparent !important;
} */

.v-tab::before {
  background-color: transparent !important;
}
</style>
