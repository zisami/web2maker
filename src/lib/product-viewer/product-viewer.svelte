<script>
	import { Canvas, InteractiveObject, OrbitControls, T, useLoader } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';

	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	import sheep from '$lib/assets/img/sheep.svg';
	import { ShapeGeometry } from 'three';
	const scale = spring(1);
	console.log(sheep);

	const loader = useLoader(SVGLoader, () => new SVGLoader());
	loader.load(sheep, (obj) => {
		console.log(obj);
	});
</script>

<!--   
<img src={sheep} alt="sheep" />
-->
<Canvas>
	<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
		<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 1 }} />
	</T.PerspectiveCamera>

	<T.DirectionalLight castShadow position={[3, 10, 10]} />
	<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
	<T.AmbientLight intensity={0.2} />
	<T.DirectionalLight position={[3, -10, 10]} intensity={0.2} />
	<!-- sheep -->
	<T.Mesh position.y={1} castShadow let:ref>
		<!-- <T.ShapeGeometry args={[sheep]} /> -->
		<T.MeshStandardMaterial color="hotpink" />
	</T.Mesh>
	<!-- Floor -->
	<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
		<T.CircleGeometry args={[3, 72]} />
		<T.MeshStandardMaterial color="white" />
	</T.Mesh>
</Canvas>
