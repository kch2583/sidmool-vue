<template>
  <v-card rounded="xl" elevation="10">
    <v-card-title class="text-center justify-center"> SIDMOOL </v-card-title>
    <v-card-title class="text-center justify-center">로그인</v-card-title>
    <v-card-text
      ><v-form>
        <v-text-field rounded filled placeholder="이메일"></v-text-field>
        <v-text-field rounded filled placeholder="비밀번호"></v-text-field>
        <v-btn block rounded>확인</v-btn>
      </v-form></v-card-text
    >
    <v-card-text class="text-center"
      ><v-btn text rounded>이메일로 회원가입</v-btn>
      <v-btn text rounded>이메일 찾기</v-btn>
      <v-btn text rounded>비밀번호 찾기</v-btn>
    </v-card-text>
    <v-card-text>
      <v-btn block rounded color="#2DB400"> 네이버로 로그인</v-btn>
      <v-btn block rounded color="#F7E600">카카오톡으로 로그인</v-btn>
      <v-btn block rounded color="#4285F4"
        ><v-icon>mdi-google</v-icon> Google로 로그인</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
