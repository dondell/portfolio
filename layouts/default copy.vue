<script setup>
</script>

<template>
  <body>
    <div class="container text-white clearfix">
      <div id="menu">
        <!-- Content for the left column -->
        <Menu />
      </div>
      <div id="column">
        <!-- Content for the right column -->
        <slot />
      </div>
      <!-- Card content goes here -->
      <!-- <div class="name">
                                                        <h1 style="color: white;">DONDELL</h1>
                                                        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BATAC</h1>
                                                    </div> -->
    </div>
  </body>
</template>