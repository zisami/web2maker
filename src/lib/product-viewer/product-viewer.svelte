<script>
	import { Canvas, InteractiveObject, OrbitControls, T,  useLoader } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';

	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	import { ExtrudeGeometry, Group, ShapeGeometry } from 'three';
	const scale = spring(1);
	const loader = useLoader(SVGLoader, () => new SVGLoader());
	let shapesFromPaths;
	loader.load('/src/lib/assets/img/test.svg', (svg) => {
		console.log('svg', svg);
		shapesFromPaths = svg.paths.map((path) => SVGLoader.createShapes(path));
		console.log(shapesFromPaths);
	});
	const colors =['hotpink', 'green']
</script>

<Canvas>
	<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
		<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true} target={{ y: 1 }} />
	</T.PerspectiveCamera>

	<T.DirectionalLight castShadow position={[3, 10, 10]} />
	<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
	<T.AmbientLight intensity={0.2} />
	<T.DirectionalLight position={[3, -10, 10]} intensity={0.2} />

	<!-- sheep -->
	<T.Group scale={0.1}>
		{#if shapesFromPaths}
			{#each shapesFromPaths as shapesArray, index}
				{#each shapesArray as shape}
					{console.log('shape',colors[index], shape)}
					<T.Mesh castShadow let:ref>
						<T.ExtrudeGeometry args={[shape, {depth:10}]}/>
						<T.MeshStandardMaterial color={colors[index]}/>
					</T.Mesh>
						
					{/each}
			{/each}
		{/if}
	</T.Group>

	<!-- Floor -->
	<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
		<T.CircleGeometry args={[3, 72]} />
		<T.MeshStandardMaterial color="white" />
	</T.Mesh>
</Canvas>
