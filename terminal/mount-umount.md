# Mounting / Unmounting storage devices

## Mounting a device

To mount a device, [you need to know the device name and the mount point](/terminal/lsblk.md). The device name is usually something like `/dev/sda1` or `/dev/sdb1`. The mount point is a directory where the device will be mounted.

Make sure the mount point exists. If it doesn't, create it with [`mkdir`](/terminal/basic.md#mkdir-make-directory).

```bash
sudo mount /dev/sdb1 /mnt/usb
```

To go to the mount point, use the [`cd`](/terminal/basic.md#cd-change-directory) command.

## Unmounting a device

You can unmount a device with the `umount` command.

```bash
sudo umount /mnt/usb
```

If the device is in use, you can use the `-l` option to force the unmount.

```bash
sudo umount -l /mnt/usb
```

You can also use the `umount` command with the device name.

```bash
sudo umount /dev/sdb1
```
