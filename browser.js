
export const init = () => {
	const contentElements = document.querySelectorAll('.content-text')
	contentElements.forEach(element => element.innerHTML += ` Text updated on the client`)
}
