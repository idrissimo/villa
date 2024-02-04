<template>
  <div class="container">
    <header>
      <!-- Navigation menu -->
      <nav>
        <ul class="flex mb-4 border-2">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- Main content of the page -->
      <slot />
    </main>
    <footer>
      <!-- Footer content -->
      <p>&copy; Copyright 2023</p>
    </footer>
  </div>
</template>
