<script>
    import logoPath from '$lib/assets/img/logo.svg'
</script>


	<div id="logo-place">
        <img src="{logoPath}" alt="">
    </div>

<style>
    img{
        max-width: 100%;
    }
    #logo-place{
		position: absolute;
        width: 100vw;
		left: 0;
        right: 0;
        margin: auto 0;
        display: grid;
        grid-gap: 4;
        content: center;
        padding: 2rem 1rem;
	}
</style>