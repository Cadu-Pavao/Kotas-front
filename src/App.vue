<template>
  <div id="app">
    <b-navbar toggleable="lg" class="navbar display-none">
        <img src="./assets/logo.png" class="icons" alt="Logo Kotas" />

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <form action="#" class="nav-search">
              <img src="./assets/search.png" alt="">
              <input type="search" name="searchBar" id="searchBar" placeholder="O que você esta propcurando?"/>
            </form>
          </b-navbar-nav>
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="nav-right">
            <div class="navbar-item">
              <img src="./assets/plus.png"/>
              <h4>Criar grupo</h4>
            </div>

            <div class="navbar-item">
              <img src="./assets/Cube.png"/>
              <h4>Meus Grupos</h4>
            </div>

            <div class="navbar-item">
              <img src="./assets/Bell.png"/>
              <b-badge class="alert-badge" variant="danger">15</b-badge>
            </div>

            <div class="navbar-item">
              <img src="./assets/joao_xs.png"/>
            </div>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>