/**
 * Create loaded instance for Document ready state is complete.
 * @param  {Document | window} e
 */
export function DomReady (e = document) {
	let isLoaded = null;
	const main = e instanceof Document ? e : window;

	const changeLoadState = ({ target }) => {
		if (isLoaded != null) {
			return isLoaded;
		}

		isLoaded = target.readyState;

		return isLoaded === 'complete';
	};

	const waitLoadDone = () => {
		const event = main instanceof Document ? 'readystatechange' : 'load';

		return new Promise((resolve) =>
			main.addEventListener(event, (e) => {
				const ret = changeLoadState(e);

				if (ret) {
					return resolve(ret);
				}
			})
		);
	};
	/**
	 * set what are you do something after on load.
	 * @param  {Function} fn
	 */
	const afterOnLoaded = async (fn) => {
		if (typeof fn !== 'function') {
			throw new Error('argument 1 must be a function.');
		}

		const response = await waitLoadDone();

		if (response === true) {
			requestAnimationFrame(fn);
		}
	};

	return {
		afterOnLoaded
	};
}
