<div>
	<a href="/">Home</a>
	<a href="link">Links</a>
</div>

<slot />

<style>
	:global(body) {
		margin: 15px 0 0 25px;
	}

	:global(a) {
		text-decoration: inherit;
		color: inherit;
	}

	:global(a:hover) {
		text-decoration: underline;
		font-weight: bold;
	}
</style>
