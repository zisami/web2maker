<script>
	import ProductViewer from "../lib/product-viewer/product-viewer.svelte";
		import svgPath from '$lib/assets/img/test.svg';
</script>

<div id="wrapper-product-viewer">
	<ProductViewer />
	<img src={svgPath} alt="sheep" />
</div>

<style>
	#wrapper-product-viewer {
		height: 500px;
		width: 100%;
		border: solid 1px black;
	}
</style>


