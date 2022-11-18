import { paper } from 'paper';

export default function newPaperCanvas(node) {
	// Get a reference to the canvas object
	const canvas = node;

	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	console.log(paper.view);

	createBackground();
	createEditor();
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
