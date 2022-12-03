<script>
	import { onMount } from 'svelte';
	import paper from 'paper';
	import { sheep } from '$lib/stores/sheep.js';

	onMount(() => {

        console.log('mout wool');
		const tool = new paper.Tool();
		tool.name = 'wool';

		let path;
		let startPoint;
		let flipArc = true;
		tool.minDistance = 5;
		tool.maxDistance = 40;
		tool.onMouseDown = (event) => {
			console.clear();
			paper.project.activeLayer.children = [];
			path = new paper.Path();
			path.strokeColor = 'black';
			path.add(event.point);

			startPoint = event.point;
		};
		tool.onMouseDrag = function (event) {
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
		};
		tool.onMouseUp = function (event) {
			path.arcTo(event.point, flipArc);
			path.arcTo(startPoint, flipArc);
			path.closePath();
			const bounds = new paper.Path.Rectangle(path.getBounds());
			bounds.strokeColor = 'black';
			bounds.strokeWidth = 2;
			bounds.intersect(path);
			const outline = paper.project.activeLayer.lastChild;
			outline.fillColor = 'grey';
			paper.project.activeLayer.children = [outline];
			$sheep.svg = outline.exportSVG();
			console.log($sheep.svg);
		};
        tool.activate();
	});
	const onActivate = () => {
		console.log('onActivateWool', paper.tool);
		const tool = paper.tools.find((tool) => tool.name === 'wool');
		tool.activate();
	};
</script>

<div class="button" on:click={onActivate}>Wool Tool</div>
