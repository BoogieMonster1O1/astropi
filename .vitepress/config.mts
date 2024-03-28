import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astro π",
  description: "The Knowledge base",
  themeConfig: {
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    logo: '/icon.png',

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/BoogieMonster1O1/astropi/edit/main/:path'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'General', link: '/general/insns' },
      { text: 'Setup', link: '/setup/synopsis' },
      { text: 'Camera', link: '/camera/init' },
      { text: 'Terminal', link: '/terminal/introduction' },      
    ],

    sidebar: [
      {
        text: 'General',
	items: [
	  { text: 'Important Instructions', link: '/general/insns.md'},
	  { text: 'Backing up', link: '/general/backup.md'},
        ]
      },
      {
        text: 'Setup',
	items: [
	  { text: 'Synopsis', link: '/setup/synopsis.md'},
	  { text: 'Flashing the SD card', link: '/setup/flashing-sd.md'},
	  { text: 'Accessing the SD card', link: '/setup/accessing-sd.md'},
	  { text: 'Accessing the Raspberry Pi', link: '/setup/access-device.md'},
	  { text: 'Connecting to the Internet', link: '/setup/internet.md'},
        ]
      },
      {
        text: 'Camera',
	items: [
	  { text: 'Initializing the camera', link: '/camera/init.md'},
	  { text: 'Taking pictures', link: '/camera/taking-pictures.md'},
        ]
      },
      {
        text: 'Astroberry',
	items: [
	  { text: 'Using the Web Interface', link: '/astroberry/web-interface.md'},
        ]
      },
      {
        text: 'Terminal',
	items: [
	  { text: 'Introduction', link: '/terminal/introduction.md'},
	  { text: 'Basic commands', link: '/terminal/basic.md'},
	  { text: 'Neofetch', link: '/terminal/neofetch.md'},
	  { text: 'Editing files', link: '/terminal/editing.md'},
	  { text: 'Listing storage devices', link: '/terminal/lsblk.md'},
	  { text: 'Mounting / unmounting storage', link: '/terminal/mount-umount.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BoogieMonster1O1/astropi' }
    ]
  }
})
