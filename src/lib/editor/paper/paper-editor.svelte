<script>
	import { onMount } from 'svelte';
	import paper from 'paper';
	var path;
	let startPoint;
	onMount(() => {
		console.log('the component has mounted');
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		createBackground();
		createPaperSheat();
		paper.view.draw();
		console.log(paper.project);
	});
    window.app = {
        tool1: new paper.Tool({
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

        tool2: new paper.Tool({
            minDistance: 30,
            maxDistance: 40,
            onMouseDown: (event) => {
                path = new paper.Path();
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

	function createBackground() {
		const rectangle = new paper.Rectangle(new paper.Point(0, 0), paper.view.viewSize);
		const pathRect = new paper.Path.Rectangle(rectangle);
		pathRect.fillColor = '#eee';
	}

	function createPaperSheat(settings = {}) {
		if (!settings?.margin) {
			settings.margin = 50;
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
</script>
<div class="w-full h-fit ">
    <canvas id="myCanvas" class="w-fit h-fit" />
    <div id="tools">
        <a href="#" onclick="app.tool2.activate(); return false;">Clouds</a>
        <a href="#" onclick="app.tool1.activate(); return false;">Lines</a>
        <a href="#" onclick="app.tool3.activate(); return false;">Rect</a>
    </div>
</div>

<style>

</style>