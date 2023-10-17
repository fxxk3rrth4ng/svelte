<script lang="ts">
	var input : string;
	var playCount : number = 0;
	var answerCount : number = 0;
	var answer : string = genRandText();

	function genRandText() {
		return Math.random().toString(36).substring(2, 12);
	}

	function check() {
		playCount += 1;
		if (input == answer) {
			answerCount += 1;
		}
		input = '';
		answer = genRandText();
	}
</script>

<div>
	<h1>Type Practice</h1>
	<h2>{answer}</h2>
	<h3>Accuracy: {answerCount} / {playCount}</h3>
	<input type="text" bind:value={input}>
	<button on:click={check}>Check</button>
</div>

<style>
	@import url('https://cdn.jsdelivr.net/gh/fxxk3rrth4ng/utils/fonts.css');

	div {
		font-family: 'Pretendard JP Variable', 'Pretendard Variable';
	}
</style>