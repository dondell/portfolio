<template>
  <main class="text-white bg-transparent flex">
    <div class="pt-4 mb-8 relative flex-1 w-full">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search for a city or state"
        class="py-2 px-1 text-black placeholder:text-gray-50 flex-1 w-full bg-transparent border-b focus:border-gray-200 focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
      <ul
        class="absolute bg-gray-600 text-white max-w-full shadow-md py-2 px-1 top-[66px]"
        v-if="mapboxSearchResults"
      >
        <p v-if="searchError">Sorry, something went wrong. Try again.</p>
        <p v-if="!searchError && mapboxSearchResults.length === 0">
          No result from the query. Try other keywords.
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>
<script setup>
import axios from "axios";
definePageMeta({
  layout: "search",
});

const mapboxAPIKey =
  "pk.eyJ1IjoiZG9uZGVsbGJhdGFjIiwiYSI6ImNrdzdzY2hmcTdnYnQydm10MXY0cWN0Z2YifQ.3Sk6JelaKQbn3FuYn03GYw";
const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResults = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
        console.log(mapboxSearchResults.value);
      } catch {
        searchError.value = true;
      }
      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};
</script>