import paper from 'paper';
var path;
let startPoint;
export const tools = {
	tool1: new paper.Tool({
		minDistance: 5,
		maxDistance: 40,
		onMouseDown: (event) => {
			console.log(paper.project.activeLayer.children.length);
			paper.project.activeLayer.children = [];
			path = new paper.Path();
			console.log(paper.project.activeLayer.children.length);

			path.strokeColor = 'black';
			path.add(event.point);
			startPoint = event.point;
		},
		onMouseDrag: function (event) {
			// Use the arcTo command to draw cloudy lines
			console.log(event.point);
			path.arcTo(event.point);
		},
		onMouseUp: function (event) {
			// Use the arcTo command to draw cloudy lines
			console.log(path.closed);
			path.arcTo(event.point);
			path.arcTo(startPoint);
			path.closePath();
			const bounds = new paper.Path.Rectangle(path.getBounds());
			bounds.strokeColor = 'blue';
			bounds.intersect(path);
			paper.project.activeLayer.children = [paper.project.activeLayer.lastChild];
			console.log(bounds);
			console.log(paper.project.activeLayer.lastChild);
		}
	}),
	tool2: new paper.Tool({
		onMouseDown: (event) => {
			path = new paper.Path();
			path.strokeColor = 'black';
			path.add(event.point);
			startPoint = event.point;
		},

		onMouseDrag: function (event) {
			path.add(event.point);
		}
	}),

	tool3: new paper.Tool({
		minDistance: 20,
		onMouseDown: (event) => {
			startPoint = event.point;
		},
		onMouseUp: function (event) {
			// Use the arcTo command to draw cloudy lines
			path = new paper.Path.Rectangle(startPoint, event.point);
			path.strokeColor = 'blue';
			path.fillColor = 'blue';
		}
	})
};
