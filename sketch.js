let classifier;

preLoad();

// Initialize the Image Classifier method with MobileNet 
// pretrained model
function preLoad() {
	classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}


function modelLoaded() {
	console.log('Model Loaded!');
}

// predict the result after uploaded
function detectImage() {
	var reader = new FileReader();
	reader.onload = function () {
		var output = document.getElementById('output_image');
		output.src = reader.result;
		classifier.classify(document.getElementById('output_image'), getResult);
	}

	reader.readAsDataURL(event.target.files[0]);

}

// result callback function
function getResult(err, results) {
	alert(JSON.stringify(results, null, 2));
}
