<script>
	import ProductViewer from "../lib/product-viewer/product-viewer.svelte";
	import Logo from "../lib/logo.svelte";
</script>

<div id="wrapper-product-viewer">
<Logo/>
	<ProductViewer />
</div>

<style>
	#wrapper-product-viewer {
		height: 100vh;
		width: 100vw;
		border: solid 1px black;
		position: relative;
	}
	
</style>


