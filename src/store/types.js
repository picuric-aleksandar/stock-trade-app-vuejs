/** Types 1. Ovaj fajl sluzi da dodelimo namespace nasim akcijama,getterima
 * kako ne bi doslo do dupliranja naziva ako imamo veliku aplikaciju
 * sa vise modula koji cine store
 */

 /**Stock Module types */
 //akcija iz StocksModule
 export const SET_STOCKS = 'stocks/SET_STOCKS';
 export const BUY_STOCKS = 'stocks/BUY_STOCKS';
 // stock getter za vracanje stocks state-a
 //export const RETURN_STOCKS = 'stocks/RETURN_STOCKS';
 /*********************************************** */


 /**Portfolio module types */
 //akcija iz PortfolioModule
  export const SELL_STOCKS = 'portfolio/SELL_STOCKS';

  //geteri za fracanje iz portfolioModula
  export const RETURN_FUNDS = 'portfolio/RETURN_FUNDS';
  export const RETURN_PURCHASED_STOCKS = 'portfolio/RETURN_PURCHASED_STOCKS';

  /*********************************************** */
 