<script setup>
	import { useBlogStore } from '@/stores/blogs'

	const blogStore = useBlogStore()
</script>

<template>
	<div class="flex gap-4 container mx-auto">
		<router-link :to="{name: 'blog', params: {slug: blog.slug}}" v-for="blog in blogStore.blogs" :key="blog.id">
			{{ blog.title }}
		</router-link>
	</div>
</template>