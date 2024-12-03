<template>
    <div class="introduction">
      <h1>Hello, I'm {{ name }}!</h1>
      
      <p>{{ bio }}</p>
      <p>Feel free to reach out: <a :href="'mailto:' + email">{{ email }}</a></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "Nguyen Huu Quan",
        
        bio: "This is a coursework in Course 	Web Programming 2(COMP1842) ",
        email: "quannhgcs220513@fpt.edu.vn"
      };
    }
  };
  </script>
  
  <style scoped>
  .introduction {
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  
  p {
    font-size: 1.1em;
    margin: 0.2em 0;
  }
  
  a {
    color: #42b983;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  