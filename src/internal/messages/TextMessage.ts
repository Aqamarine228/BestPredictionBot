export default abstract class TextMessage {
	abstract text: string;

	public parse(toReplace: { [key: string]: string }) {
		let { text } = this;
		Object.keys(toReplace).forEach((key) => {
			text = text.replaceAll(`$${key}$`, toReplace[key]);
		});

		return text;
	}
}
