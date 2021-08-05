<template>
  <TypeCore header="SarcasticType" :transformed="this.transformed"/>
</template>

<script>
  import TypeCore from './TypeCore.vue'
  export default {
    components: {
      TypeCore
    },
    props: {
      input: String
    },
    computed: {
      transformed() {
        return this.input.split("").map((c, i) => i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()).join("")
      }
    }
  }
</script>
