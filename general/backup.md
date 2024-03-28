# Backing up the SD card

It is important to back up the SD card occasionally. This will allow you to restore the system to its previous state if something goes wrong.

## Linux and macOS
Use the `dd` command to create an image of the SD card. Connect the SD card to your computer and run the following command:

```bash
sudo dd if=/dev/sdX of=backup.img bs=8M status=progress
```

Replace `/dev/sdX` with the path to your SD card. This command will create a backup image named `backup.img`.

You can see a list of connected devices by running:

```bash
lsblk
```

## Windows

### Using Win32 Disk Imager
1. Download and install [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/)
2. Insert the SD card into your computer.
3. Open Win32 Disk Imager and select the drive letter corresponding to the SD card.
4. Click on the folder icon and choose a location to save the backup image.
5. Click on `Read` to create the backup image.
