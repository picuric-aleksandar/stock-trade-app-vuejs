<template>

  <!-- <ul class="nav nav-pills"> -->
    <!-- 11. preko router-linka kreiramo linkove koji ce nas voditi ka odredjenim rutama, idemo da registrujemo
          nasu headaer cmpt u app.vue -->
    <!-- <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
    <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
  </ul> --> 
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand" active-class="active" exact>Home</router-link>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <!-- dodajem query param kako bih eventualno na osnovu njega mogao da ucitam odredjeni templejt za pojedinacni stock (
          da li je Buy ili je Sell
        ) -->
        <router-link :to="{name: 'Portfolio', query: {view: 'portfolio'}}" tag="li" active-class="active"><a>Portfolio</a></router-link>
        <router-link :to="{name: 'Stocks', query: {view: 'stocks'}}" tag="li" active-class="active"><a>Stocks</a></router-link>
      </ul>
      <span class="navbar-text navbar-right">
        Funds: 0
      </span>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item"><a href="#">End Day</a></li>
        <li class="nav-item dropdown">
        <a 
          class="nav-link dropdown-toggle" 
          href="#" id="navbarDropdown" 
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>
      </ul>
    </div>
  </div>
</nav>
  
</template>