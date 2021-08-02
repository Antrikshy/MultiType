<template>
  <h2>⸺ SarcasticType ⸺</h2>
  <p v-if="transformed">{{ transformed }}</p>
  <p v-else class="placeholder">Start typing.</p>
  <button :disabled="!transformed" @click="navigator.clipboard.writeText(transformed)">Copy</button>
</template>

<script>
  export default {
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
