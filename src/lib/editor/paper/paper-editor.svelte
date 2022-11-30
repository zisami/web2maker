<script>
	import { onMount } from 'svelte';
	import paper from 'paper';
    import {tools} from '$lib/editor/paper/paper-tools.js';
	import DoubleRangeSlider from '$lib/editor/inputs/DoubleRangeSlider.svelte';

	let start;
	let end;
	const nice = (d) => {
		if (!d && d !== 0) return '';
		return d.toFixed(2);
	};
	
	onMount(() => {
        window.app = tools
		console.log('the component has mounted');
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		//createBackground();
		//createPaperSheat();
		paper.view.draw();
	});
	

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
	<DoubleRangeSlider bind:start bind:end class="hidden"/>
	<div class="labels">
		<div class="label">{nice(start)}</div>
		<div class="label">{nice(end)}</div>
	</div>
	<div id="tools">
		<a href="#" onclick="app.tool1.activate(); return false;">Clouds</a>
	</div>
</div>

<style>
</style>
