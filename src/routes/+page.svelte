<script>
	import EditorPane from '$lib/editor/editor-pane.svelte';
	import ProductViewer from '$lib/product-viewer/product-viewer.svelte';
	import Logo from '$lib/logo.svelte';
	import headIconPath from '$lib/assets/icons/head.svg'
	import bodyIconPath from '$lib/assets/icons/body.svg'
	import skeletonIconPath from '$lib/assets/icons/skeleton.svg'
		import PaperEditor from '$lib/editor/paper/paper-editor.svelte';
</script>

<Logo />

<ProductViewer />

<EditorPane>
	<div class="h-full flex flex-col justify-between ">
		<div class="cotainer">
			<PaperEditor/>
		</div>
		<div class="container flex justify-center ">
			<div class="w-12 h-12 bg-sky-600 rounded-t-lg mx-1"><img src={headIconPath} alt="Edit Head"></div>
			<div class="w-12 h-12 bg-sky-600 rounded-t-lg mx-1"><img src={bodyIconPath} alt="Edit Body"></div>
			<div class="w-12 h-12 bg-sky-600 rounded-t-lg mx-1"><img src={skeletonIconPath} alt="edit Skeleton"></div>
		</div>
	</div>
</EditorPane>

<style>
</style>
