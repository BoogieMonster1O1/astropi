import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astro Pi",
  description: "Knowledge base for Raspberry Pi Astrophotography",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Setup', link: '/setup/synopsis.md' }
    ],

    sidebar: [
      {
        text: 'Setup',
	items: [
	  { text: 'Synopsis', link: '/setup/synopsis.md'},
	  { text: 'Flashing the SD card', link: '/setup/flashing-sd.md'},
	  { text: 'Accessing the SD card', link: '/setup/accessing-sd.md'},
	  { text: 'Accessing the device', link: '/setup/access-device.md'},
	  { text: 'Internet connectivity', link: '/setup/internet-connection.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BoogieMonster1O1/astropi' }
    ]
  }
})
