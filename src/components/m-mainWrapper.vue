<template>
  <div>
    <m-nav/>
    <div class="main">
    <m-forms/>
    </div>
  </div>
</template>

<script>
import MNav from "@/components/m-nav";
import MForms from "@/components/m-forms";

export default {
  name: "mainWrapper",
  components: {
    MForms,
    MNav,

  }
}
</script>

<style lang="scss">
.main{
  height: 90vh;
  background: aliceblue;
  width: 100%;
  margin: 0 auto;
}
</style>