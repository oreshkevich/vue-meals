<template>
  <div class="wrapper">
    <div class="container">
      <nav>
        <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-family: Noto Sans JP, sans-serif;
}
body {
  background-color: #3f3f3f;
  margin: 0;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}
.container {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
.content {
  min-height: calc(100vh - 180px);
}
.content-auth {
  min-height: 100vh;
}
</style>

