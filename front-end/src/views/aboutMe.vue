<template>
    <div class="introduction">
      <h1>Hello, I'm {{ name }}!</h1>
      <p>I am a {{ profession }} based in {{ location }}.</p>
      <p>{{ bio }}</p>
      <p>Feel free to reach out: <a :href="'mailto:' + email">{{ email }}</a></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "Your Name",
        profession: "Your Profession", // e.g., Software Developer
        location: "Your Location", // e.g., New York, USA
        bio: "Brief introduction about yourself. For example, 'I am passionate about coding, creating innovative solutions, and continuously learning new skills.'",
        email: "youremail@example.com"
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
  