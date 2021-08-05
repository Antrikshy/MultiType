<template>
  <TypeCore header="JumbledReadableType" :transformed="this.transformed">
    <template v-slot:description>
      Inspired by <a href="https://www.mrc-cbu.cam.ac.uk/people/matt.davis/cmabridge/">this</a>.
    </template>
  </TypeCore>
</template>

<script>
  import TypeCore from './TypeCore.vue'

  function shuffleArray(array) {
    // Lifted from https://stackoverflow.com/a/46161940/2005759
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
      if (word[i] === word[i + 1] && i + 1 != word.length - 1) {
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
    components: {
      TypeCore
    },
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
