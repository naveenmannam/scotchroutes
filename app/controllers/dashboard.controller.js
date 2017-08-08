module.exports = {
	showDash: showDash
};

function showDash(req, res){
	res.send("<h1>Dash board controller.</h1>")
}