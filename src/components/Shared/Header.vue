<template>
  <div id="header">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-container>
        <b-navbar-brand href="#">
          MUHAMMAD
          <sub>Tahseen</sub> ur REHMAN
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item-dropdown text="Skills" right>
              <b-dropdown-item href="#">Html 5</b-dropdown-item>
              <b-dropdown-item href="#">Css 3</b-dropdown-item>
              <b-dropdown-item href="#">Bootstrap</b-dropdown-item>
              <b-dropdown-item href="#">Jquery</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
        <div class="ml-5">
          <b-button variant="outline-primary"> Sign in</b-button>
          <b-button variant="outline-dark"> Sign up</b-button>
        </div>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "app-header"
};
</script>
<style lang="scss" scoped>
#header .navbar-expand-lg .navbar-nav .nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
}
#header .navbar-expand-lg .navbar-nav .nav-link.dropdown-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #007bff;
  padding: 10px;
}
</style>