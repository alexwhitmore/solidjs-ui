<script setup lang="ts">
import { ref, nextTick, watch } from 'vue';
import { Accordion, AccordionItem, AccordionItemTrigger, AccordionItemContent } from '@ark-ui/vue';
import { ChevronDown } from 'lucide-vue-next';

const items = ref(['React', 'Solid', 'Vue']);
// Store active item index and content heights
const activeItem = ref(null);
const contentHeights = ref(items.value.map(() => '0px'));

// Watch for changes in active item and update height
watch(activeItem, async (newIndex) => {
  await nextTick(); // Wait for DOM update
  contentHeights.value = contentHeights.value.map((_, index) =>
    index === newIndex ? `${document.getElementById(`content-${index}`).scrollHeight}px` : '0px'
  );
});
</script>

<template>
  <div class="max-w-md mx-auto mt-10">
    <Accordion.Root collapsible v-model="activeItem">
      <Accordion.Item v-for="(item, index) in items" :key="item" :value="index" class="border-b">
        <div class="flex">
          <Accordion.ItemTrigger
            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
            What is {{ item }}?
            <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
          </Accordion.ItemTrigger>
        </div>
        <Accordion.ItemContent :id="`content-${index}`"
          class="overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down"
          :style="{ 'max-height': contentHeights[index] }">
          <div class="pb-4 pt-0">
            {{ item }} is a JavaScript library for building user interfaces.
          </div>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  </div>
</template>
