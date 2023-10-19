<script setup>
	import { RouterView } from 'vue-router'
</script>

<template>
	<nav class="py-4">
		<div class="container mx-auto flex items-center">
			<router-link to="/" class="mr-4">Home</router-link>
			<router-link to="/blogs">Blog</router-link>
		</div>
	</nav>
	<RouterView />
</template>


<style>

* {
	color: #f4fffa;
}
</style>