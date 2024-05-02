<template>
  <FixedLeftColumn>
    <template #fixed>
      <div class="block orders">
        <InputDate :model-value="selectedDate" @update:model-value="setSelectedDate" />
        <Search
          select-display-value="icon"
          :search-types="currentOptions"
          :search-type="searchType"
          :search-query="searchQuery"
          @update:search-query="setSearchQuery"
          @update:search-type="setSelectedOption"
        />
        <ul class="list orders__list">
          <!-- индекс для ключа - плохо, но в данном случае у нас иммутабельный массив -->
          <li v-for="({ color, icon, altText }, index) in ordersToggles" :key="index">
            <Toggle class="orders__toggle" :color="color">
              <span v-if="altText">{{ altText }}</span>
              <i v-else :class="icon" />
            </Toggle>
          </li>
        </ul>
      </div>
    </template>
  </FixedLeftColumn>
</template>
<script setup lang="ts">
import { FixedLeftColumn } from "~/shared/ui/templates";
import { InputDate } from "~/shared/ui/inputs/input-date";
import { Search } from "~/shared/ui/search";
import { Toggle } from "~/shared/ui/toggle";

import { currentOptions } from "~/shared/constants/currentOptions";
import { ordersToggles } from "~/shared/constants/ordersToggles";

const selectedDate = ref("");
const searchType = ref(Object.keys(currentOptions)[0]);
const searchQuery = ref("");

const setSelectedDate = (value: string) => {
  selectedDate.value = value;
};

const setSearchQuery = (value: string) => {
  searchQuery.value = value;
};

const setSelectedOption = (value: string) => {
  searchType.value = value;
};
</script>
<style lang="scss">
@import "~/shared/assets/styles/components/orders/orders";
</style>
