<template>
  <v-app>
    <v-system-bar color="blue darken-3"></v-system-bar>
    <v-app-bar color="primary" dark class="flex-grow-0">
      <v-toolbar-title>Get Team Sports</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title @click="goToParent" class="mx-6">Parent</v-toolbar-title>
      <v-toolbar-title @click="goToCoach">Coach</v-toolbar-title>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    goToParent() {
      this.$router.push("/parentcpn");
    },
    goToCoach() {
      this.$router.push("/coachcpn");
    },
  },
};
</script>
