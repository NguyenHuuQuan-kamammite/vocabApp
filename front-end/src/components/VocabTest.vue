<template>
    <div>
      <h2>Score: {{ score }} out of {{ this.words.length }}</h2>
  
      <form action="#" @submit.prevent="onSubmit">
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="germany flag"></i> German
          </div>
          <input type="text" readonly :disabled="testOver" :value="currWord.german" />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="united kingdom flag"></i> English
          </div>
          <input type="text" placeholder="Enter English word..." v-model="english" :disabled="testOver" autocomplete="off" />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="france flag"></i> French
          </div>
          <input type="text" placeholder="Enter French word..." v-model="french" :disabled="testOver" autocomplete="off" />
        </div>
  
        <button class="positive ui button" :disabled="testOver">Submit</button>
      </form>
  
      <p :class="['results', resultClass]">
        <span v-html="result"></span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'vocab-test',
    props: {
      words: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        randWords: [...this.words.sort(() => 0.5 - Math.random())],//Danh sách từ ngẫu nhiên
        incorrectGuesses: [],
        result: '',
        resultClass: '',
        english: '',
        french: '',
        score: 0,
        testOver: false
      };
    },
    computed: {
      currWord() {
        return this.randWords.length ? this.randWords[0] : '';
      }
    },
    methods: {
      onSubmit() {
        // Check if both English and French inputs are correct
        const isEnglishCorrect = this.english.toLowerCase() === this.currWord.english.toLowerCase();
        const isFrenchCorrect = this.french.toLowerCase() === this.currWord.french.toLowerCase();
        
  
        if (isEnglishCorrect && isFrenchCorrect) {
          this.flash('Correct!', 'success', { timeout: 1000 });
          this.score += 1;
        } else {
          this.flash('Wrong!', 'error', { timeout: 1000 });
          this.incorrectGuesses.push(`${this.currWord.german} (Expected: German -${this.currWord.german}, English - ${this.currWord.english}, French - ${this.currWord.french})`);
        }
  
        // Reset input fields and move to the next word
        this.english = '';
        this.french = '';
        this.randWords.shift();
        
        // Check if the test is over
        if (this.randWords.length === 0) {
          this.testOver = true;
          this.displayResults();
        }
      },
      displayResults() {
        if (this.incorrectGuesses.length === 0) {
          this.result = 'You got everything correct. Well done!';
          this.resultClass = 'success';
        } else {
          const incorrect = this.incorrectGuesses.join(', ');
          this.result = `<strong>You got the following words wrong:</strong> ${incorrect}`;
          this.resultClass = 'error';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .results {
    margin: 25px auto;
    padding: 15px;
    border-radius: 5px;
  }
  
  .error {
    border: 1px solid #ebccd1;
    color: #a94442;
    background-color: #f2dede;
  }
  
  .success {
    border: 1px solid #d6e9c6;
    color: #3c763d;
    background-color: #dff0d8;
  }
  </style>
  