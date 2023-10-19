import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogs', () => {
  const blogs = ref([
    {
      id: crypto.randomUUID(),
      title: 'Blog 1',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium possimus cupiditate, nobis modi nisi asperiores repudiandae eum sunt laborum nemo.',
      slug: 'blog-1'
    },
    {
      id: crypto.randomUUID(),
      title: 'Blog 2',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium possimus cupiditate, nobis modi nisi asperiores repudiandae eum sunt laborum nemo.',
      slug: 'blog-2'
    },
    {
      id: crypto.randomUUID(),
      title: 'Blog 3',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium possimus cupiditate, nobis modi nisi asperiores repudiandae eum sunt laborum nemo.',
      slug: 'blog-3'
    }
  ])
  return { blogs }
})
