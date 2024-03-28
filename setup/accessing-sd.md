---
editLink: true
---

# Accessing the SD card

This page covers how to access the SD card from your computer.

## Prerequisites

- A computer with an SD card reader
- The SD card you want to access

## Raspberry Pi

The Raspberry Pi SD card has two partitions:
1. The first partition is the boot partition. It is accessible on all operating systems. It contains boot parameters, the initial configuratio, and other files necessary for the Raspberry Pi to boot. 
2. The second partition contains the root filesystem and is usually formatted with the ext4 filesystem, **which is not natively supported on Windows or macOS**. This partition is where the operating system and all data are stored.

## Steps

1. To begin, insert the SD card into the SD card reader on your computer. If your computer does not have an SD card reader, you can use an external USB card reader, or an SD to microSD adapter.
2. If you're on Linux, you may have to [mount the SD card](/terminal/mount-umount.md) to access its contents. If you're on macOS or Windows, the SD card should be automatically detected and mounted as a new drive.
3. Once the SD card is mounted, you can access its contents through your file manager or terminal.


## Safely eject

**Make sure to safely eject the SD card before removing it from your computer.**

Windows
- Right-click on the SD card in the file explorer and select "Eject".

macOS
- Drag the SD card icon to the trash.

Linux
- See [this page](/terminal/mount-umount.md) for instructions.
