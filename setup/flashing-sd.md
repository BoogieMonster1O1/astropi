---
editLink: true
---

# Flashing the SD card

This page describes how to flash the SD card with the latest version of Raspberry Pi OS (with or without Astroberry).

## Disclaimer

**Flashing the SD card will erase all data on it.** Make sure to backup your data before proceeding.

**Proceed with caution.**

## Prerequisites
- A computer with an SD card reader
- A microSD card with a capacity of at least 16GB
- A reliable internet connection

## Flashing the OS image

### Using Raspberry Pi Imager <Badge type="danger" text="Dangerous" />

1. Download and install [Raspberry Pi Imager](https://www.raspberrypi.org/software/)  
macOS  - `brew install rpi-imager`  
Ubuntu - `sudo apt install rpi-imager`  
Fedora - `sudo dnf rpi-imager`  
Arch   - `sudo pacman -S rpi-imager`  

2. Open Raspberry Pi Imager and click on `CHOOSE OS`. Select the appropriate OS image from the list.
3. Click on `CHOOSE STORAGE` and select the SD card.
4. Edit the settings for Wi-Fi, locale, and keyboard layout, if needed. You may want to enable SSH (if not already).
5. Click on `WRITE` to start flashing the SD card.
6. Remove the SD card once the process is complete.

### Using `dd` <Badge type="danger" text="Dangerous" />

You can use the `dd` command to flash the SD card. The command syntax is as follows:

```bash
sudo dd if=raspbian.img of=/dev/sdX bs=8M status=progress 
```
Replace `/dev/sdX` with the path to your SD card. You can find it [using this guide](/terminal/lsblk.md)
