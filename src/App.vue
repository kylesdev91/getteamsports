<template>
  <v-app>
    <v-system-bar color="blue darken-3"></v-system-bar>
    <v-app-bar color="primary" dark class="flex-grow-0">
      <v-toolbar-title>Get Team Sports</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title class="mx-6">Parent</v-toolbar-title>

      <v-toolbar-title>Coach</v-toolbar-title>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
