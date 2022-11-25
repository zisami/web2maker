<script>
	import { Canvas, InteractiveObject, OrbitControls, T, useLoader } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';

	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	import sheep from '$lib/assets/img/sheep.svg';
	import { ExtrudeGeometry, Group, ShapeGeometry } from 'three';
	const scale = spring(1);
	console.log(sheep);

	const loader = useLoader(SVGLoader, () => new SVGLoader());
	let shapes;
	loader.load(sheep, (svg) => {
		console.log(svg);
		shapes = svg.paths.map((path) => path.toShapes(true));
		console.log(shapes);
	});
</script>

<!--   
<img src={sheep} alt="sheep" />
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
		<T.Mesh position.y={1} castShadow let:ref>
			{#if shapes}
				{#each shapes as shapesArray}
					{#each shapesArray as shape, index}
						{console.log(shape)}
						<T.ExtrudeGeometry
							args={shape}
							depth={2}
							bevelEnabled={false}
							position={[0, 1 + index, 0]}
						/>
					{/each}
				{/each}
			{/if}
			<T.MeshStandardMaterial color="hotpink" />
		</T.Mesh>
	</T.Group>
	<!-- Floor -->
	<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
		<T.CircleGeometry args={[3, 72]} />
		<T.MeshStandardMaterial color="white" />
	</T.Mesh>
</Canvas>
