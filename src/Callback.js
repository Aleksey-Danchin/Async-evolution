import OwnMath from './OwnMath'
import Common from './Common'

const Callback = {}

for (const key of Object.keys(Common)) {
	Callback[key] = function (...args) {
		const callback = args.pop()
		const result = Common[key](...args)
		const timeout = OwnMath.getRandomBetween(500, 1000)

		setTimeout(() => callback(result), timeout)
	}
}

export default Callback