<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          width="30"
          height="30"
          class="d-inline-block align-top"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul
          class="navbar-nav"
          style="width: 100%; display: flex; justify-content: center"
        >
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" active-class="active"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/interlock" class="nav-link" active-class="active"
              >Interlock</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/fencing" class="nav-link" active-class="active"
              >Fencing</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/decking" class="nav-link" active-class="active"
              >Decking</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" active-class="active"
              >About us</RouterLink
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="nav-item">
                <RouterLink
                  to="/about"
                  class="dropdown-item"
                  active-class="active"
                  >About1</RouterLink
                >
              </li>

              <li>
                <RouterLink
                  to="/contacts"
                  class="dropdown-item"
                  active-class="active"
                  >About2</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-menu-end">
        <button type="button" class="btn btn-primary">365-228-2280</button>
      </div>
    </div>
  </nav>

  <div class="main-content">
    <RouterView />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {},
};
</script>

<style scoped>
.navbar {
  background-color: gainsboro !important; /* 设置背景颜色为白色 */
  padding: 20px 0;
}
.navbar .navbar-nav .nav-link {
  color: black;
  background-color: gainsboro;
}
.navbar-toggler-icon {
  background-image: url("@/assets/menu.svg"); /* 指向你的图片路径 */
  background-size: cover; /* 覆盖整个元素，根据需要调整 */
  background-position: center; /* 确保图片居中显示 */
}

.nav-item .nav-link {
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 16px;
  align-items: center;
}
.nav-item .nav-link.active {
  background-color: #bd621e;
  color: white;
  border-radius: 0px;
  text-align: center;
  font-size: 16px;
  align-items: baseline;
}


.main-content {
  margin: 0 auto;
  margin-top: 0px;
  border-radius: 1px;
  width: 100%;
  height: 800px;
  border: 0.2px solid;
}
</style>
