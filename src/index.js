import Sync from './Sync'
import Callback from './Callback'
import ByPromise from './ByPromise'

console.group()
console.log('By Aleksey Danchin http://vk.com/aleksey_danchin')
console.log('Github rep: https://github.com/Aleksey-Danchin/Async-evolution')
console.groupEnd()

// console.info('Start')
// let basket = null

// const products = Sync.getProducts()
// console.table(products)

// basket = Sync.getBasket()
// console.table(basket)

// basket = Sync.addProductToBasket(products[0])
// console.table(basket)

// basket = Sync.addProductToBasket(products[1])
// console.table(basket)

// basket = Sync.removeProductToBasket(products[0])
// console.table(basket)





// console.info('Start')

// Callback.getProducts(products => {
// 	console.table(products)

// 	Callback.getBasket(basket => {
// 		console.table(basket)

// 		Callback.addProductToBasket(products[0], basket => {
// 			console.table(basket)

// 			Callback.addProductToBasket(products[1], basket => {
// 				console.table(basket)

// 				Callback.removeProductToBasket(products[0], basket => {
// 					Callback.removeProductToBasket(products[0], basket => {
// 						Callback.removeProductToBasket(products[0], basket => {
// 							Callback.removeProductToBasket(products[0], basket => {
// 								console.table(basket)
// 							})
// 						})
// 					})
// 				})
// 			})
// 		})
// 	})
// })

// console.log('Flag')






// console.log('Start')

// let basket = null
// let products = null

// ByPromise.getProducts()
// 	.then(_products => {
// 		products = _products

// 		console.table(products)

// 		return ByPromise.getBasket()
// 	})
// 	.then(_basket => {
// 		basket = _basket

// 		console.table(basket)

// 		return ByPromise.addProductToBasket(products[0])
// 	})
// 	.then(_basket => {
// 		basket = _basket

// 		console.table(basket)

// 		return ByPromise.removeProductToBasket(products[0])
// 	})
// 	.then(_basket => {
// 		basket = _basket

// 		console.table(basket)
// 	})

// console.log('Flag')




// console.log('Flag 1')

// main()

// async function main () {
// 	console.log('Start')

// 	const products = await ByPromise.getProducts()
// 	console.table(products)

// 	let basket = await ByPromise.getBasket()
// 	console.table(basket)

// 	basket = await ByPromise.addProductToBasket(products[0])
// 	console.table(basket)

// 	basket = await ByPromise.clearBasket()
// 	console.table(basket)

// 	basket = await ByPromise.addProductToBasket(products[0])
// 	console.table(basket)
// }

// console.log('Flag 2')

Object.assign(window, { Sync, Callback, ByPromise })