/** Types 1. Ovaj fajl sluzi da dodelimo namespace nasim akcijama,getterima
 * kako ne bi doslo do dupliranja naziva ako imamo veliku aplikaciju
 * sa vise modula koji cine store
 */

 // setStock akcija iz StocksModule
 export const SET_STOCKS = 'stocks/SET_STOCKS';
 // stock getter za vracanje stocks state-a
 export const RETURN_STOCKS = 'stocks/RETURN_STOCKS';
 
 