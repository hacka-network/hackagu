<script setup>
const title = 'Hackagu 💻🤓🏝️ | Est. 2019 | Hacka* Network'
const description = 'A community-run group of indie makers / coders / designers / hardware hackers who build their own independent apps/startups.'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hackagu.org' },
    { property: 'og:image', content: 'https://hackagu.org/og.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://hackagu.org/og.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#000000' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hackagu.org' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Press+Start+2P&display=swap' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>



<template>
  <div class="w-full flex flex-col">
    <div class="p-8 mt-20 max-w-3xl mx-auto">
      <h1 class="text-center text-primary">Hackagu 💻🤓🏝️</h1>
      <h2 class="text-center text-primary text-base mt-8 mb-16">EST 2019. Part of <a href="https://hacka.network/?utm_source=hackagu" target="_blank" class="underline text-[#3872EC] hover:text-[#3872EC]/60">HACKA* NETWORK</a></h2>
      <p class=font-bold>A community-run group of indie makers / coders / designers / hardware hackers who build their own independent apps/startups, meeting up every Thursday for weekly co-working (and demos) in Canggu, Bali.</p>
      <p class="text-base italic font-bold">Not in Canggu? <a href="https://hacka.network/?utm_source=hackagu" target="_blank" class="underline text-[#3872EC] hover:text-[#3872EC]/60">More locations</a></p>
      
      <div class="mt-8 text-left">
        <p>If you code <span class="font-bold">your own projects</span> come and join us every Thursday from 9.15am at a co-working space in Canggu. We have a nice deal with the co-working space and they give us a day pass for 165k IDR (+ you get a free coffee).</p>
        
        <p>The usual schedule is:</p>
        <ul class="list-disc list-inside mb-4">
          <li><span class="font-bold">9.30am – Intros</span> (a little about yourself + what you're working on)</li>
          <li><span class="font-bold">12:30pm – Gojek lunch</span> together (if you want)</li>
          <li><span class="font-bold">4pm – Demos</span> (share what you made today, or just watch)</li>
          <li><span class="font-bold">5pm – Drinks</span> somewhere nearby 🍻🍷</li>
        </ul>
        
        <p class="font-semibold">Please fill out the form and we'll send you the details!</p>
      </div>
    </div>
    
    <div class="flex flex-col h-[800px]">
      <iframe class="flex-grow w-full" src="https://tally.so/r/wkZVbj" frameborder="0" marginheight="0" marginwidth="0" title="Hackagu Registration Form"></iframe>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}
</style>
