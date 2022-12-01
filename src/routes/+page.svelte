<script>
	import EditorPane from '$lib/editor/editor-pane.svelte';
	import ProductViewer from '$lib/product-viewer/product-viewer.svelte';
	import Logo from '$lib/logo.svelte';
	import PaperEditor from '$lib/editor/paper/paper-editor.svelte';
	import EditorTypeButtons from '$lib/editor/editor-type-buttons.svelte';
</script>

<Logo />

<ProductViewer />

<EditorPane>
	<PaperEditor />

	<EditorTypeButtons />
</EditorPane>

<style>
</style>
