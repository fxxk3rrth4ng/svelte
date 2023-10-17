<script lang="ts">
	var input: string;
	var tmp: string;

	function charConvert() {
		tmp = input;
		input = input.replace(/[^A-Za-z]/g, "");
		input = input.replace(/[^aeiou]/g, function (match: string) {
			return match.toUpperCase();
		});
	}

	function charReturn () {
		input = tmp;
	}
</script>

<div>
	<h1>Char Converter</h1>
	<input type="text" placeholder="Input any text" bind:value={input} /><br /><br />
	<button on:click={charConvert}>Convert</button><button on:click={charReturn}>Return</button>
</div>

<style>
	@import url("https://cdn.jsdelivr.net/gh/fxxk3rrth4ng/utils/fonts.css");

	div {
		font-family: "Pretendard JP Variable", "Pretendard Variable";
	}
</style>
