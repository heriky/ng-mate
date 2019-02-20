
export function setByProps(props, value, ctx) {
	let context = ctx;
	const keys = props.split('.');
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (i === keys.length - 1) {
			context[key] = value;
			break;
		}

		context[key] == null && (context[key] = {});
		context = context[key];
	}
}

export function getByProps(props, ctx) {
	const keys = props.split('.');
	const v = keys.reduce((rs, key) => {
		return rs[key];
	}, ctx);
	return v;
}
