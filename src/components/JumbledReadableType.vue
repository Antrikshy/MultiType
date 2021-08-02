<template>
  <h2>⸺ JumbledReadableType ⸺</h2> 
  <p v-if="transformed">{{ transformed }}</p>
  <p v-else class="placeholder">Start typing.</p>
  <button :disabled="!transformed" @click="navigator.clipboard.writeText(transformed)">Copy</button>
</template>

<script>
  // Lifted from https://stackoverflow.com/a/46161940/2005759
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1))
      const tmp = array[i]
      array[i] = array[rand]
      array[rand] = tmp
    }
  }

  function jumbleWord(word) {
    word = word.trim()
    if (word.length < 4) {
      return word
    }
    const middleTeased = []
    for (let i = 1; i < word.length - 1; i++) {
      if (word[i] === word[i + 1]) {
        middleTeased.push(`${word[i]}${word[i]}`)
        i++
      } else {
        middleTeased.push(word[i])
      }
    }
    shuffleArray(middleTeased)
    return `${word[0]}${middleTeased.join("")}${word[word.length - 1]}`
  }

  export default {
    props: {
      input: String
    },
    computed: {
      transformed() {
        return this.input.split(/[\s,.\-_\"\'?!]+/).map(jumbleWord).join(" ")
      }
    }
  }
</script>
