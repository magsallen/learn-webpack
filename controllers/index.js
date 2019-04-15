module.exports = (_, response, next) => {
  try {
		response.render('document') // document.html from ./views (default express location)
  } catch (error) {
    next(error)
  }
}
