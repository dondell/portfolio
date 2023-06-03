<script setup>
const { sayHello } = useUtils();
sayHello();
</script>
<template>
    <div class="flex place-content-start justify-center items-center content-center bg-[#E3BDBD] w-screen h-screen m-0">
        <div class="flex flex-wrap flex-row text-white bg-[#E3BDBD] h-5/6 w-5/6">
            <!-- Menu -->
            <div class="menu basis-1/4 bg-[#3F5570] h-full px-2 pt-4">
                <div id="pl-2 pt-2">
                    <IconsBars />
                </div>
                <div class="h-full">
                    <div class="flex flex-col justify-center items-start h-full pb-20">
                        <div class="flex text-lg hover:underline">
                            <NuxtLink to="/events/1">CV</NuxtLink>
                        </div>
                        <div class="flex text-lg justify-items-center content-center hover:underline">
                            <NuxtLink to="/">Portfolio</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="break-inside-auto absolute top-1/3 left-1/3 transform -translate-x-2/3 -translate-y-2/4 md:z-50 font-sans text-[37px] leading-none">
                <img class="mx-auto hover:animate-pulse" src="/img/profile.png" />
                <div class="absolute top-1 left-12 translate-x-[11rem] translate-y-[0.3rem]">
                    <p class="text-center hover:animate-bounce">DONDELL</p>
                    <p class="text-center pl-6 text-[#E3BDBD]">BATAC</p>
                </div>
            </div>
            <!-- Content -->
            <!-- bg-cover bg-[url('/img/gradient_bg.png')] -->
            <div class="bg relative basis-1/2 flex-grow bg-no-repeat md:z-51">
                <div class="flex-col top-[1rem] left-[4rem] mr-[1rem] w-full pl-20">
                    <div class="relative flex-col float-left justify-start items-start top-[9rem] left-[4.7rem] mr-[12rem]">
                        <p class="text-start pl-1 w-[40rem] ">My name is Dondell and I am a freelance mobile developer
                            living in Cebu City, Philippines. I love building mobile apps.</p>
                        <br>
                        <p class="text-start pl-1">Skills: <br>Java, Kotlin, Flutter, PHP, Javascript</p>
                        <br>
                        <p class="text-start pl-1">Email: youremail@gmail.com</p>
                        <p class="text-start pl-1">Phone: 0926xxxxxx</p>
                    </div>
                    <div class="flex float-right justify-end items-center space-x-2 pr-2">
                        <div class="card">
                            <div class="card-title">2011-2015</div>
                            <div class="card-subtitle">DB Admin/MIS Staff</div>
                            <div class="card-body">Work for FirstTrubank Inc.</div>
                            <div class="text-sm hover:underline">
                                <NuxtLink to="/">View</NuxtLink>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">2015-2020</div>
                            <div class="card-subtitle">Freelance</div>
                            <div class="card-body">Work as mobile developer</div>
                            <div class="text-sm hover:underline">
                                <NuxtLink to="/">View</NuxtLink>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">2020-Present</div>
                            <div class="card-subtitle">Mobile developer</div>
                            <div class="card-body">Work for Universal Tech, Inc.</div>
                            <div class="text-sm hover:underline">
                                <NuxtLink to="/">View</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="divider relative"></div>
                </div>
                <div class="flex relative place-items-end align-bottom mb-2 mr-2"
                    style="position: absolute; bottom: 0; right: 0;">
                    <Socials class="hover:animate-bounce" />
                </div>
            </div>
        </div>
    </div>
</template>