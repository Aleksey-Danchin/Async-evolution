import Cookies from './Cookies'

let data = getData()

const Common = {
	getBasket () {
		return data
	},

	clearBasket () {
		data = []
		saveData()
		return Common.getBasket()
	},

	getProducts () {
		return products
	},

	addProductToBasket (product) {
		let isExist = false

		for (const item of data) {
			if (item.type === product.type) {
				isExist = true
				item.count += 1
				break
			}
		}

		if (!isExist) {
			data.push({
				...product,
				count: 1
			})
		}

		saveData()
		return Common.getBasket()
	},

	removeProductToBasket (product) {
		let currentProduct = null

		for (const item of data) {
			if (item.type === product.type) {
				currentProduct = item
				break
			}
		}

		if (currentProduct) {
			currentProduct.count -= 1

			if (currentProduct.count <= 0) {
				const index = data.indexOf(currentProduct)
				data.splice(index, 1)
			}
		}

		saveData()
		return Common.getBasket()
	}
}

const products = [
	{ type: 'PC mouse', price: 500 },
	{ type: 'Flash drive', price: 1000 },
	{ type: 'Keyboard', price: 1700 },
	{ type: 'Webcam', price: 750 }
]

export default Common

function getData () {
	const data = Cookies.getCookie('data') || getDefaultJSONData()
	return JSON.parse(data)
}

function saveData () {
	const options = {
		expires: 1e10
	}

	Cookies.setCookie('data', JSON.stringify(data), options)
}

function getDefaultJSONData () {
	const dataDefault = JSON.stringify([])

	return dataDefault
}