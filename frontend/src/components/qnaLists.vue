<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="qna in qnaDataList" :key="qna.id" cols="12">
            <v-item v-slot="{ active, toggle }">
              <v-card class="align-center" rounded="xl" @click="toggle">
                <v-card-title>
                  <v-chip
                    :color="qna.isAnswered ? 'green' : 'grey'"
                    class="mr-3"
                    text-color="white"
                  >
                    {{ qna.isAnswered ? "답변완료" : "답변대기" }}
                  </v-chip>
                  <span class="text-subtitle-1">
                    {{ qna.title }}
                  </span>
                  <v-spacer></v-spacer>
                  <span class="mr-3 text-body-1">
                    {{
                      qna.userId.substring(0, 4) +
                      qna.userId.replace(/.*/gi, "**")
                    }}
                  </span>
                  <span class="text-body-1">
                    {{ qna.date }}
                  </span>
                </v-card-title>
                <v-scroll-y-transition>
                  <v-card-text
                    v-if="active"
                    :class="isMobile ?? 'px-12'"
                    class="justify-center"
                  >
                    <v-row justify="center" align="center">
                      <v-col cols="3">
                        <v-icon size="65">mdi-alpha-q</v-icon>
                      </v-col>
                      <v-col>
                        <p class="text-subtitle-1 ma-0">
                          {{ qna.text }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-divider v-if="qna.answer"></v-divider>
                    <v-row v-if="qna.answer" justify="center" align="center">
                      <v-col cols="3">
                        <v-icon size="65">mdi-alpha-a</v-icon>
                      </v-col>
                      <v-col>
                        <p class="text-subtitle-1 ma-0">
                          {{ qna.answer }}
                        </p>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-pagination circle v-model="page" :length="4"> </v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      qnaDataList: [
        {
          isAnswered: false,
          title: "어쩌구저쩌구?",
          text: "djwjofijweof sdkf jwoeif slfej efj soeif ",
          answer: "",
          userId: "fjei32aso39",
          date: "2022.11.21",
        },
        {
          isAnswered: true,
          title: "어쩌구저쩌구?",
          text: "djwjofijweof sdkf jwoeif slfej efj soeif ",
          answer: "fsojefi soefi jsoeifjsoeifj soeifj soei fj",
          userId: "fjei32osdfsdf39",
          date: "2022.11.21",
        },
        {
          isAnswered: false,
          title: "어쩌구저쩌구?",
          text: "djwjofijweof sdkf jwoeif slfej efj soeif ",
          answer: "fsojefi soefi jsoeifjsoeifj soeifj soei fj",
          userId: "fjei3ds2o39",
          date: "2022.11.21",
        },
        {
          isAnswered: true,
          title: "어쩌구저쩌구?",
          text: "djwjofijweof sdkf jwoeif slfej efj soeif ",
          answer: "fsojefi soefi jsoeifjsoeifj soeifj soei fj",
          userId: "fjeasdfw3i32o39",
          date: "2022.11.21",
        },
      ],
    };
  },
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
.v-card--link::before {
  background-color: transparent !important;
}
</style>
