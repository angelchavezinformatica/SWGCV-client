<template>
  <div class="Products-product">
    <img :src="product.image" :alt="product.name" />
    <div class="Products-product-content">
      <div class="Products-product-tags">
        <span> #{{ product.category }} </span>
        <span> #{{ product.subcategory }} </span>
      </div>
      <h2 class="Products-product-title">{{ product.name }}</h2>
      <p class="Products-product-available">
        <span>{{ product.stock }}</span> disponibles (<span
          >S/. {{ product.price }}</span
        >)
      </p>
      <details class="Products-product-details">
        <summary>Descripción</summary>
        <p>{{ product.description }}</p>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ProductI } from "~/interfaces/product";

interface Props {
  product: ProductI;
}
defineProps<Props>();
</script>

<style scope lang="sass">
.Products-product
  @include flex--start()
  flex-direction: column
  width: 250px
  background-color: $color-3
  border-radius: 20px
  overflow: hidden
  img
    width: 250px
    height: 150px
    object-fit: cover
  .Products-product-content
    padding: .5rem
    .Products-product-tags
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      gap: .3rem
      span
        cursor: pointer
        color: $bg-color
        border: 1px solid $bg-color
        font-size: .9rem
        padding: .2rem .5rem
        text-align: center
        border-radius: 30px
    .Products-product-title
      font-size: 1.2rem
      color: $bg-color
      text-align: center
    .Products-product-available
      font-size: .95rem
      margin: .2rem 0
      color: $bg-color
      text-align: center
      span
        font-weight: 700
    .Products-product-details
      margin-top: .5rem
      color: $bg-color
      text-align: center
      summary
        cursor: pointer
</style>
