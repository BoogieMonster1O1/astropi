# Flashing the SD card

This page describes how to flash the SD card with the latest version of Raspberry Pi OS (with or without Astroberry).

## Disclaimer

Flashing the SD card will erase all data on it. Make sure to backup your data before proceeding.

Proceed with caution. You will be responsible for any damage to your hardware or loss of data that may result from following these instructions.

## Prerequisites
- A computer with an SD card reader
- A microSD card with a capacity of at least 16GB
- A reliable internet connection

## Flashing the OS image

### Using Raspberry Pi Imager

1. Download and install [Raspberry Pi Imager](https://www.raspberrypi.org/software/)
macOS  - `brew install rpi-imager`
Ubuntu - `sudo apt install rpi-imager`
Fedora - `sudo dnf rpi-imager`
Arch   - `sudo pacman -S rpi-imager`

2. Open Raspberry Pi Imager and click on `CHOOSE OS`. Select the appropriate OS image from the list.
3. Click on `CHOOSE STORAGE` and select the SD card.
4. Edit the settings for Wi-Fi, locale, and keyboard layout, if needed.
5. Click on `WRITE` to start flashing the SD card.
6. Remove the SD card once the process is complete.
