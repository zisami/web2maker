import paper from 'paper';
var path;
let startPoint, lastPoint;
let flipArc = true;
export const tools = {
	tool1: new paper.Tool({
		minDistance: 5,
		maxDistance: 40,
		onMouseDown: (event) => {
			console.clear();
			paper.project.activeLayer.children = [];
			path = new paper.Path();
			path.strokeColor = 'black';
			path.add(event.point);
			lastPoint = event.point;
			startPoint = event.point;
		},
		onMouseDrag: function (event) {
			// Use the arcTo command to draw cloudy lines
			//console.log(event.point);

			if (!path.segments[1]) {
				flipArc = path.segments[0].point.x - event.point.x < 0;
				console.log(
					'first',
					path.segments[0].point.x,
					event.point.x,
					path.segments[0].point.x - event.point.x
				);
			}
			console.log(flipArc);
			path.arcTo(event.point, flipArc);
			lastPoint = event.point;
		},
		onMouseUp: function (event) {
			path.arcTo(event.point, flipArc);
			path.arcTo(startPoint, flipArc);
			path.closePath();
			const bounds = new paper.Path.Rectangle(path.getBounds());
			bounds.strokeColor = 'black';
			bounds.strokeWidth = 2;
			bounds.intersect(path);
			const outline = paper.project.activeLayer.lastChild;
			outline.fillColor = 'grey';
			paper.project.activeLayer.children = [paper.project.activeLayer.lastChild];
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
