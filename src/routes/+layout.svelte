<script>
	import { navigating } from '$app/stores';

	import { loading } from '$lib/stores/loading';
	import Loading from '$lib/page-loader/page-loader.svelte';
	import '../app.css';

  //Setting the Loading Store to the Navigationstate
  $: $loading = !!$navigating
</script>

<slot />
