import { paper } from 'paper';

export default function newPaperCanvas(node) {
	// Get a reference to the canvas object
	const canvas = node;

	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	console.log(paper.view.viewSize);
	const rectangle = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(150, 100));
	const pathRect = new paper.Path.Rectangle(rectangle);
	pathRect.fillColor = '#e9e9ff';
	//pathRect.selected = true;

	// Create a Paper.js Path to draw a line into it:
	const path = new paper.Path();
	// Give the stroke a color
	path.strokeColor = 'black';
	const start = new paper.Point(100, 100);
	// Move to start and draw a line from there
	path.moveTo(start);
	// Note that the plus operator on Point objects does not work
	// in JavaScript. Instead, we need to call the add() function:
	path.lineTo(start.add([200, 250]));
	// Draw the view now:
	paper.view.draw();
}
