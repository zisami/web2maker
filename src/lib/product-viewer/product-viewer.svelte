<script>
	import { Canvas, InteractiveObject, OrbitControls, T,  useLoader } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';

	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	import svgPath from '$lib/assets/img/test.svg';
	import { ExtrudeGeometry, Group, ShapeGeometry } from 'three';
	const scale = spring(1);
	console.log(svgPath);
	const loader = useLoader(SVGLoader, () => new SVGLoader());
	let shapes;
	loader.load(svgPath, (svg) => {
		console.log('svg', svg);
		shapes = svg.paths.map((path) => SVGLoader.createShapes(path));
		console.log(shapes);
	});
</script>

<!--   
-->

<Canvas>
	<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
		<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true} target={{ y: 1 }} />
	</T.PerspectiveCamera>

	<T.DirectionalLight castShadow position={[3, 10, 10]} />
	<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
	<T.AmbientLight intensity={0.2} />
	<T.DirectionalLight position={[3, -10, 10]} intensity={0.2} />

	<!-- sheep -->
	<T.Group scale={1}>
		{#if shapes}
			{#each shapes as shapesArray, index}
				{#each shapesArray as shape, index}
					{console.log('shape', shape)}
						{#each shape.curves as curve}
							<T.Mesh position.y={1 + index * 2} castShadow let:ref>
								{console.log('curve', curve)}
								<T.ExtrudeGeometry args={curve}/>
								<T.MeshBasicMaterial color="hotpink" />
							</T.Mesh>
						{/each}
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
