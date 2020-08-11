// 6. ovde cemo kreirati nase rute a kasnije cemo dodati lazy loading
// 7. prvo cemo importovati sve nase komponente koje ce koristiti router
import HomeComponent from './components/HomeComponent.vue';
import PortfoliosComponent from './components/portfolio/PortfoliosComponent.vue';
import StocksComponent from './components/stocks/StocksComponent.vue';

// 8. nakon importa definisacemo i eksportujemo nase rute - idemo u main.js da ih registrujemo

export const routes = [
  { path: '', component: HomeComponent, name: 'Home' },
  { path: '/portfolio', component: PortfoliosComponent },
  { path: '/stocks', component: StocksComponent },
  { path: '*', redirect: {name: 'Home'}}
]