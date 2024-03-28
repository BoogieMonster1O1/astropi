import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astro Pi",
  description: "Knowledge base for Raspberry Pi Astrophotography",
  themeConfig: {
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/BoogieMonster1O1/astropi/edit/main/:path'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'General', link: '/general/insns.md' },
      { text: 'Setup', link: '/setup/synopsis.md' },
      { text: 'Terminal', link: '/terminal/introduction.md' },      
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
	  { text: 'Internet connectivity', link: '/setup/internet-connection.md'},
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
