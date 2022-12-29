export const callbackDelay = (callback: Function, delay?: number) => {
	let delayInterval = setInterval(
		() => {
			callback();
			clearInterval(delayInterval);
		},
		delay ? delay : 1000
	);
};
