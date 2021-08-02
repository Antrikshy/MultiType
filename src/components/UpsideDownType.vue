<template>
  <h2>⸺ UpsideDownType ⸺</h2> 
  <p v-if="transformed">{{ transformed }}</p>
  <p v-else class="placeholder">Start typing.</p>
  <button :disabled="!transformed" @click="navigator.clipboard.writeText(transformed)">Copy</button>
</template>

<script>
  const _replacements = {
    "a": "ɐ",
    "b": "q",
    "c": "ɔ",
    "d": "p",
    "e": "ǝ",
    "f": "ɟ",
    "g": "ƃ",
    "h": "ɥ",
    "i": "ᴉ",
    "j": "ɾ",
    "k": "ʞ",
    "l": "l",
    "m": "ɯ",
    "n": "u",
    "o": "o",
    "p": "d",
    "q": "b",
    "r": "ɹ",
    "s": "s",
    "t": "ʇ",
    "u": "n",
    "v": "ʌ",
    "w": "ʍ",
    "x": "x",
    "y": "ʎ",
    "z": "z",
    "A": "∀",
    "B": "B",
    "C": "Ɔ",
    "D": "D",
    "E": "Ǝ",
    "F": "Ⅎ",
    "G": "פ",
    "H": "H",
    "I": "I",
    "J": "ſ",
    "K": "K",
    "L": "˥",
    "M": "W",
    "N": "N",
    "O": "O",
    "P": "Ԁ",
    "Q": "Q",
    "R": "R",
    "S": "S",
    "T": "┴",
    "U": "∩",
    "V": "Λ",
    "W": "M",
    "X": "X",
    "Y": "⅄",
    "Z": "Z",
    ",": "'",
    ".": "˙",
    "?": "¿",
    "!": "¡",
    "\"": ",,",
    "'": ",",
    "`": ",",
  }

  export default {
    props: {
      input: String
    },
    computed: {
      transformed() {
        return this.input.split("").reverse().map(c => {
          if (_replacements[c] == undefined)
            return c
          else {
            return _replacements[c]
          }
        }).join("")
      }
    }
  }
</script>
