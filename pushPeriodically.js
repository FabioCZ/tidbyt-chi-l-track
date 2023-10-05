const { exec } = require("child_process");

const token = ""
const deviceId = ""

function pushPixlet() {
	exec("pixlet render chi_l_track.star", (err, out, stderr) => {
		exec("pixlet push --api-token " + token + " --installation-id chiltrack " + deviceId + " chi_l_track.webp", (err1, out1, stderr1) => {

		})
	})
}

pushPixlet()
setInterval(pushPixlet, 1000 * 30)
