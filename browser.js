
export const init = () => {
	const contentElements = document.querySelectorAll('.content-text')

	contentElements.forEach(element => element.innerHTML += `UPDATED: Text updated on the client`)
}

