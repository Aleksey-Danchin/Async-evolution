import Common from './Common'
import OwnMath from './OwnMath'

const Sync = {}

for (const key of Object.keys(Common)) {
	Sync[key] = function (...args) {
		const result = Common[key](...args)
		const timeout = OwnMath.getRandomBetween(1000, 5000)
		const nowMomemnt = Date.now()

		while (true) {
			if (nowMomemnt + timeout < Date.now()) {
				break
			}
		}

		return result
	}
}

export default Sync