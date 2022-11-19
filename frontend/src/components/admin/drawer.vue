<template>
  <v-navigation-drawer permanent absolute app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> 시드물 관리자 </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list rounded nav>
      <!-- <v-list-group
        v-for="item in items"
        :key="item.title"
        link
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group> -->
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        exact
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "홈",
          icon: "mdi-home",
          to: "/admin",
        },
        {
          title: "제품 관리",
          icon: "mdi-bottle-tonic-outline",
          to: "/admin/product",
          items: [{ title: "wpeoei" }],
        },
        {
          title: "QnA 관리",
          icon: "mdi-frequently-asked-questions",
          to: "/admin/qna",
        },
        {
          title: "리뷰 관리",
          icon: "mdi-message-reply-text",
          to: "/admin/review",
        },
        { title: "사용자 관리", icon: "mdi-account", to: "/admin/user" },
        { title: "관리자 관리", icon: "mdi-account-cog", to: "/admin/manager" },
      ],
      right: null,
    };
  },
};
</script>
<style lang=""></style>
