<template>
  <div class="bg-orange-200 h-screen text-white pl-5">
    <header>
      <div class="bg-gray-700 h-screen text-white pl-5">
        ------From layout content-----
        <Menu />
        <div>
          <p>----from index---</p>
          <div class="pl-1">
            <h1>DONDELL</h1>
            <h1>BATAC</h1>
            <img src="/img/profile.png" alt="Image" class="rounded-full" />
            <p>Mobile Developer</p>
            <br />
            <p>My name is Dondell and I am a freelance mobile developer</p>
            <p>
              living in Cebu City, Philippines. I love building mobile apps,
            </p>
            <br />
            <p>Skills<br />Java, Kotlin, Flutter, PHP, Javascript</p>
            <br />
            <br />
            <p>Email: youremail@gmail.com</p>
            <p>Phone: 0926xxxxxxx</p>
          </div>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>