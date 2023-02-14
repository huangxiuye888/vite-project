<template>

</template>

<script setup lang="ts">

type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };

type Coordinate = [number, number]
type PromiseCoordinate = MapToPromise<Coordinate>;
//console.log(PromiseCoordinate);
console.log(123);

</script>

<style scoped>

</style>
