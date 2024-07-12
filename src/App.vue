<template>
  <main class="catalog">
    <router-view />
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 62.5%;
}
body {
  font-family: "Lato", sans-serif;
  box-sizing: border-box;
}

.catalog {
}
</style>
