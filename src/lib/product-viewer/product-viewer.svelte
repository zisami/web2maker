<script>
  import SceneSetup from './scene-setup.svelte';

	import { Canvas, InteractiveObject, OrbitControls, T,  useLoader } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';

	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	import { Float } from '@threlte/extras'


	const scale = spring(0.001);
	const loader = useLoader(SVGLoader, () => new SVGLoader());
	let shapesFromPaths;
	loader.load('/src/lib/assets/img/sheep.svg', (svg) => {
		shapesFromPaths = svg.paths.map((path) => SVGLoader.createShapes(path));
	});
	const colors =['white', 'black']

	const model ={
		position: [0.75, 1.5, 0],
	}
</script>

<Canvas>
	<SceneSetup />

	<Float speed={1}  >
	<!-- sheep -->
	<T.Group scale={$scale*-1} position={model.position}  rotation.y={degToRad(35)} >
		{#if shapesFromPaths}
			{#each shapesFromPaths as shapesArray, index}
				{#each shapesArray as shape}
					<T.Mesh castShadow let:ref>
						<InteractiveObject
							object={ref}
							interactive
							on:pointerdown={() => ($scale = 0.00125)}
							on:pointerup={() => ($scale = 0.001)}
						/>
						<T.ExtrudeGeometry args={[shape, {depth:50}] } />
						<T.MeshStandardMaterial color={colors[index]} />
					</T.Mesh>
						
					{/each}
			{/each}
		{/if}
	</T.Group>
	

</Float>


	<!-- Floor -->
	<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
		<T.CircleGeometry args={[10, 72]} />
		<T.MeshStandardMaterial color="darkgreen" />
	</T.Mesh>

	<!-- Sky -->
	<T.Mesh receiveShadow rotation.z={degToRad(-90)}>
		<T.SphereGeometry args={[10, 36, 18]} />
		<T.MeshStandardMaterial color="#87ceeb" side={1}/>
	</T.Mesh>
</Canvas>
