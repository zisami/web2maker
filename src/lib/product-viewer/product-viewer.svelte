<script>
  import MeshInteractive from './mesh-interactive.svelte';
  import ShapesLooper from './shapes-looper.svelte';

	import WorldSetup from './world-setup.svelte';
	import SceneSetup from './scene-setup.svelte';

	import { Canvas, InteractiveObject,  T, useLoader } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';

	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	import { Float } from '@threlte/extras';

	import { state } from '$lib/stores/state.js';
	import { sheep } from '$lib/stores/sheep.js';

	import svgFilePath from '$lib/assets/img/sheep.svg';
	const scale = spring(0.001);
	const loader = useLoader(SVGLoader, () => new SVGLoader());
	let serializer;
	if (typeof window !== 'undefined') {
		serializer = new XMLSerializer();
	}
	let shapesFromPaths = false;
	$: $sheep, svgToShapes();
	loader.load(svgFilePath, (svg) => {
		shapesFromPaths = svg.paths.map((path) => SVGLoader.createShapes(path));
		console.log(shapesFromPaths);
	});

	const colors = ['white', 'black'];

	const model = {
		position: [0.75, 1.5, 0]
	};

	function toggleEditorPane() {
		$state.hideEditorPane = !$state.hideEditorPane;
	}
	function svgToShapes() {
		if ($sheep.svg) {
			//console.log($sheep.svg);

			const svg = $sheep.svg.outerHTML
			console.log(svg);
			shapesFromPaths = [loader.parse(svg)?.paths?.map((path) => path?.toShapes())];
			console.log(shapesFromPaths);
		}
	}
</script>

{#if shapesFromPaths}
	<Canvas>
		<SceneSetup />

		<Float speed={1}>
			<!-- sheep -->
			<T.Group scale={$scale * -1} position={model.position} rotation.y={degToRad(35)}>
				<ShapesLooper shapes={shapesFromPaths} />
			</T.Group>
		</Float>

		<WorldSetup />
	</Canvas>
{:else}
	<div class="container grid place-content-center h-screen w-screen bg-orange-300 ">
		<img src="/src/lib/assets/img/sheep.svg" alt="comic-sheep" class="w-8" />
		getting a sheep for you...
	</div>
{/if}
