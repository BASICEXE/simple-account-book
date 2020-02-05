<template>
  <div class="wrapper">
    <nav class="gnav">
      <ul class="gnav__inner">
        <li class="gnav__item">
          <nuxt-link class="gnav__link" to="/">TOP</nuxt-link>
        </li>
        <li class="gnav__item">
          <nuxt-link class="gnav__link" to="/main">簡易損益計算</nuxt-link>
        </li>
        <li class="gnav__item">
          <nuxt-link class="gnav__link" to="/about">このpageについて</nuxt-link>
        </li>
      </ul>
    </nav>
    <main class="contents">
      <nuxt />
    </main>
  </div>
</template>

