<script>
	import ProductViewer from "../lib/product-viewer/product-viewer.svelte";
	import Logo from "../lib/logo.svelte";
	import {state} from "$lib/stores/state.js"
</script>

<Logo/>
<div class="h-screen w-screen  relative">
	<ProductViewer />
</div>

<div class="w-screen  absolute bottom-0 h-1/2 bg-slate-500" hidden={$state.hideEditorPane}>
{$state.hideEditorPane}
</div>

<style>

</style>


