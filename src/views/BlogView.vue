<script setup>
import { ref, computed } from "vue"
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blogs'

const blogStore = useBlogStore()
const route = useRoute()
const blogSlug = ref(route.params.slug)

const blog = computed(() => {
    return blogStore.blogs.find(blog => blog.slug === blogSlug.value)
})

</script>

<template>
    <div class="container mx-auto">
        <p>{{ blog.title }}</p>
    </div>
</template>