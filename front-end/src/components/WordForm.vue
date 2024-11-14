<template>
    <form action="#" @submit.prevent="onSubmit">
      <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
  
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="germany flag"></i> German
        </div>
        <input type="text" placeholder="Enter word..." v-model="localWord.german" />
      </div>
  
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i> English
        </div>
        <input type="text" placeholder="Enter word..." v-model="localWord.english" />
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="france flag"></i> French
        </div>
        <input type="text" placeholder="Enter word..." v-model="localWord.french" />
      </div>
  
      <button class="positive ui button">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'word-form',
    props: {
      word: {
        type: Object,
        required:false,
        default: () => {return { german: '', english: '',french:'' };} 
      }
    },
    data() {
      return {
        localWord: { ...this.word }, // Initialize local copy of word prop
        errorsPresent: false
      };
    },
    methods: {
      onSubmit() {
        if (this.localWord.english === '' || this.localWord.german === ''||this.localWord.french==='') {
          this.errorsPresent = true;
        } else {
          this.errorsPresent = false;
          this.$emit('createOrUpdate', this.localWord); // Emit localWord
        }
      }
    },
    watch: {
      word: {
        handler(newWord) {
          this.localWord = { ...newWord };
        },
        deep: true
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  