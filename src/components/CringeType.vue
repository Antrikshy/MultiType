<template>
  <h2>⸺ CringeType ⸺</h2>
  <p v-if="transformed">{{ transformed }}</p>
  <p v-else class="placeholder">Start typing.</p>
  <button :disabled="!transformed" @click="navigator.clipboard.writeText(transformed)">Copy</button>
</template>

<script>
  const _replacements = {
    "!": ["!", "1"],
    "a": ["a", "A", "@", "4"],
    "b": ["b", "B", "6", "8"],
    "c": ["c", "C"],
    "d": ["d", "D"],
    "e": ["e", "E", "3", "€"],
    "f": ["f", "F"],
    "g": ["g", "G", "6", "9"],
    "h": ["h", "H"],
    "i": ["i", "I", "1"],
    "j": ["j", "J"],
    "k": ["k", "K"],
    "l": ["l", "L", "1"],
    "m": ["m", "M"],
    "n": ["n", "N"],
    "o": ["o", "O", "0"],
    "p": ["p", "P"],
    "q": ["q", "Q"],
    "r": ["r", "R"],
    "s": ["s", "S", "5", "$"],
    "t": ["t", "T"],
    "u": ["u", "U"],
    "v": ["v", "V"],
    "w": ["w", "W"],
    "x": ["x", "X"],
    "y": ["y", "Y"],
    "z": ["z", "Z"]
  }

  export default {
    props: {
      input: String
    },
    computed: {
      transformed() {
        return this.input.split("").map(c => {
          c = c.toLowerCase()
          if (_replacements[c] == undefined)
            return c
          else {
            return _replacements[c][Math.floor((Math.random() * _replacements[c].length) + 0)]
          }
        }).join("")
      }
    }
  }
</script>
