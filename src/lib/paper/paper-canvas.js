import { paper } from 'paper';

export default function newPaperCanvas(node) {
	// Get a reference to the canvas object
	const canvas = node;

	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	console.log(paper.view);
	var myPath = new paper.Path();
	myPath.strokeColor = 'black';

	createBackground();
	createEditor();
	createCircle();

	// Draw the view now:
	paper.view.draw();
}
function createBackground() {
	const rectangle = new paper.Rectangle(new paper.Point(0, 0), paper.view.viewSize);
	const pathRect = new paper.Path.Rectangle(rectangle);
	pathRect.fillColor = '#eee';
}

function createEditor(settings = {}) {
	if (!settings?.margin) {
		settings.margin = 10;
	}
	const rectangle = new paper.Rectangle(
		new paper.Point(settings.margin, settings.margin),
		new paper.Point(
			paper.view.viewSize.width - settings.margin,
			paper.view.viewSize.height - settings.margin
		)
	);
	const pathEditor = new paper.Path.Rectangle(rectangle);
	pathEditor.fillColor = '#fff';
}

function createCircle() {
	const circle = new paper.Path.Circle({
		center: paper.view.center,
		radius: 25,
		fillColor: 'black'
	});
	circle.strokeColor = 'black';
	circle.onMouseDown = function (event) {
		console.log(event);
		this.fillColor = 'red';
	};
}
