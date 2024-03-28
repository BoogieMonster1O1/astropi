# Accessing the Raspberry Pi

This page covers how to access the Raspberry Pi from your computer. So far, we know of four ways to interact with the Raspberry Pi:
- SSH
- VNC
- Serial Console
- Physical Access

## Prerequisites

On Windows, you will need to install [PuTTY](https://www.putty.org/) to use SSH or the Serial Console.

On macOS and Linux, you will need to install [minicom](https://www.google.com/search?q=minicom) to use the Serial Console.

## SSH

SSH stands for Secure Shell. It allows you to securely connect to and access a computer. It is the most common way to access a Raspberry Pi. When you SSH into Raspberry Pi, you get a [terminal](/terminal/introduction.md) that allows you to run commands.

Make sure SSH was enabled during the [flashing of the SD card](/setup/flashing-sd.md). If you're using the astroberry-installed image, SSH is enabled by default.

### Ethernet

Plug the Raspberry Pi into your computer using an Ethernet cable.

To SSH into the Raspberry Pi, run

```bash
ssh astroberry@astroberry
```

The default password is `astroberry`. The format is `ssh username@hostname`.


### Wi-Fi
You will first need to [connect the Raspberry Pi to a Wi-Fi network](/setup/internet.md).

You will need to find the IP address of the Raspberry Pi. You can do this by running

```bash
ipscan
```

You will need to install [angry ip scanner](https://angryip.org/download/) to use `ipscan`. Once you have the IP address, you can SSH into the Raspberry Pi by running

```bash
ssh astroberry@<ip-address>
```

The default password is `astroberry`.	


## VNC

VNC stands for Virtual Network Computing. It allows you to view and interact with the Raspberry Pi's desktop. It is useful when you need to use the Raspberry Pi's graphical interface.

To use VNC, you will need to install a VNC viewer on your computer. [RealVNC](https://www.realvnc.com/en/connect/download/viewer/) and [TigerVNC](https://tigervnc.org/) are popular choices.

To install TigerVNC on Linux,
Ubuntu - `sudo apt install tigervnc-viewer`
Fedora - `sudo dnf install tigervnc`
Arch   - `sudo pacman -S tigervnc`
Gentoo - `sudo emerge --ask net-misc/tigervnc`


