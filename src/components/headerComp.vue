<template>

    <div class="headerClass">
      <h1>Ax-Group</h1>
      <div class="links">
      <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/signup">Signup</router-link>
</nav>

</div>
<div class="dropdown">
    <img src="@/assets/me.png" v-on:click="myFunction()" class="dropbtn" alt="LA">
    <div id="myDropdown" class="dropdown-content">
      <router-link to="/">John Doe</router-link> 
      <router-link to="/">john.doe@ut.ee</router-link> 
      <router-link to="/signup">Sign up</router-link>
    </div>
  </div> 

</div>
</template>

<script>
export default {
  name: "headerName",
  methods: {
    myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
    }
}
</script>