<script setup lang="ts">
import { ref } from 'vue';
import { Accordion, AccordionItem, AccordionItemTrigger, AccordionItemContent } from '@ark-ui/vue';

const activeItem = ref(null);

const items = ['React', 'Solid', 'Vue']; // Static array for testing
</script>

<template>
  <div class="max-w-md mx-auto mt-10">
    <Accordion.Root v-model="activeItem">
      <Accordion.Item v-for="(item, index) in items" :key="item" :value="item">
        <Accordion.ItemTrigger>{{ item }}</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          Content for {{ item }}
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  </div>
</template>
