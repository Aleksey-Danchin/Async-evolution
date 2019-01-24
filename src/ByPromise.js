import OwnMath from './OwnMath'
import Common from './Common'

const ByPromise = {}

for (const key of Object.keys(Common)) {
	ByPromise[key] = function (...args) {
		return new Promise((resolve, reject) => {
			try {
				const result = Common[key](...args)
				const timeout = OwnMath.getRandomBetween(500, 1000)
				setTimeout(() => resolve(result), timeout)
			} catch (err) {
				reject(err)
			}
		})
	}
}

export default ByPromise