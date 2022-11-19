<template>
  <v-card rounded="xl" elevation="10">
    <v-card-title class="text-center justify-center"> SIDMOOL </v-card-title>
    <v-card-title class="text-center justify-center">회원가입</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field rounded filled placeholder="이름"></v-text-field>
        <v-text-field rounded filled placeholder="이메일"></v-text-field>
        <v-text-field
          rounded
          filled
          type="password"
          placeholder="비밀번호"
        ></v-text-field>
        <v-text-field
          rounded
          filled
          type="password"
          placeholder="비밀번호 확인"
        ></v-text-field>
        <v-btn block rounded>확인</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
