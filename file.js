var count = 0.0;
var flag = true;
var interval;

document.getElementById('Start').addEventListener('click', Start);
document.getElementById('Record').addEventListener('click', Record);
document.getElementById('Reset').addEventListener('click', Reset);

function Start() {
	if (flag) {
		flag  = false;
		interval = setInterval(function () {
			count += 0.01
			document.getElementById("Time").innerHTML = count.toFixed(2);
		}, 100);
	}
	else {
		clearInterval(interval);
		flag = true;
	}
}

function Reset() {
	clearInterval(interval);
	flag = true;
	count = 0.0;
	document.getElementById("Time").innerHTML = count.toFixed(2);
	document.getElementById("PastTimes").innerHTML = "";
}

function Record() {
	var Record = document.createElement('div');

	Record.class = "Record";
	Record.innerHTML = count.toFixed(2);
	document.getElementById("PastTimes").appendChild(Record)
}

document.addEventListener('keypress', function(event){

	var key = event.key;

	if (key == 's'){
		Start();
	}
	else if (key == 'r'){
		Reset();
	}
	if (key == 't'){
		Record();
	}
});