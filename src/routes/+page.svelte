<script>
	import ProductViewer from "../lib/product-viewer/product-viewer.svelte";
	import SvgTest from "../lib/assets/svg-test.svelte";
</script>

<div id="wrapper-product-viewer">
	<ProductViewer />
	<img src="/src/lib/assets/img/test.svg" alt="sheep" />
</div>

<style>
	#wrapper-product-viewer {
		height: 500px;
		width: 100%;
		border: solid 1px black;
	}
</style>


