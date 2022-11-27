<script>
	import EditorPane from '$lib/editor/editor-pane.svelte';
	import ProductViewer from '$lib/product-viewer/product-viewer.svelte';
	import Logo from '$lib/logo.svelte';
</script>

<Logo />
<div class="h-screen w-screen  relative">
	<ProductViewer />
</div>

<EditorPane />

<style>
</style>
