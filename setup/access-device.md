# Accessing the Raspberry Pi

This page covers how to access the Raspberry Pi from your computer. So far, we know of five ways to interact with the Raspberry Pi.

[VNC](#vnc) and [Astroberry Server](#astroberry-server) is the recommended way to interact with the Raspberry Pi. [SSH](#ssh) is a good alternative if you're comfortable with the terminal.

## Prerequisites

On Windows, you will need to install [PuTTY](https://www.putty.org/) to use SSH or the Serial Console.

On macOS and Linux, you will need to install [minicom](https://www.google.com/search?q=minicom) to use the Serial Console.

## SSH

SSH stands for Secure Shell. It allows you to securely connect to and access a computer. It is the most common way to access a Raspberry Pi. When you SSH into Raspberry Pi, you get a [terminal](/terminal/introduction.md) that allows you to run commands.

Make sure SSH was enabled during the [flashing of the SD card](/setup/flashing-sd.md). If you're using the astroberry-installed image, SSH is enabled by default.

### Ethernet

Plug the Raspberry Pi into your computer using an Ethernet cable.

If you're using PuTTY on Windows, enter `astroberry.local` as the hostname.

If you're using the terminal, run

```bash
ssh astroberry@astroberry
```

You can add the -Y flag to enable X11 forwarding. This allows you to run graphical applications on the Raspberry Pi and have them displayed on your computer.

```bash
ssh -Y astroberry@astroberry
```

The default password is `astroberry`. The format is `ssh username@hostname`.


### Wi-Fi
You will first need to [connect the Raspberry Pi to a Wi-Fi network](/setup/internet.md).

You will need to find the IP address of the Raspberry Pi. You can do this by running

```bash
ipscan
```

You will need to install [angry ip scanner](https://angryip.org/download/) to use `ipscan`. Once you have the IP address, you can SSH into the Raspberry Pi by running

If you're using PuTTY on Windows, enter the IP address as the hostname.

If you're using the terminal, run

```bash
ssh astroberry@<ip-address>
```

You can add the -Y flag to enable X11 forwarding. This allows you to run graphical applications on the Raspberry Pi and have them displayed on your computer.

```bash
ssh -Y astroberry@<ip-address>
```

The default password is `astroberry`.	


## VNC <Badge text="Recommended" />

VNC stands for Virtual Network Computing. It allows you to view and interact with the Raspberry Pi's desktop. It is useful when you need to use the Raspberry Pi's graphical interface.

To use VNC, you will need to install a VNC viewer on your computer. [RealVNC](https://www.realvnc.com/en/connect/download/viewer/) and [TigerVNC](https://tigervnc.org/) are popular choices.

To install TigerVNC on Linux,  
Ubuntu - `sudo apt install tigervnc-viewer`  
Fedora - `sudo dnf install tigervnc`  
Arch   - `sudo pacman -S tigervnc`  
Gentoo - `sudo emerge --ask net-misc/tigervnc`  

### Ethernet
Similar to SSH, plug the Raspberry Pi into your computer using an Ethernet cable. Connect to `astroberry.local` using the VNC viewer.

### Wi-Fi
You will first need to [connect the Raspberry Pi to a network](/setup/internet.md). Similar to SSH, you will need to find the IP address of the Raspberry Pi, and connect to it using the VNC viewer.

## Astroberry Server <Badge text="Recommended" />

Astroberry Server provides a web-based interface that allows you to control the Raspberry Pi from a web browser. 

1. Connect your device to the `astroberry` Wi-Fi hotspot.
2. Open a web browser and navigate to `http://10.42.0.1`. You should see the Astroberry Server interface.
3. Enter the password (default `astroberry`) to log in.
4. You can now control the Raspberry Pi, similar to using VNC, from the web interface.

Note that you will not be able to access the internet through Wi-Fi while connected to the `astroberry` Wi-Fi hotspot. If you need to access the internet, you will need to connect the Raspberry Pi to a network using an Ethernet cable. 

## Serial Console <Badge type="warning" text="Needs testing" />

The Raspberry Pi has a serial console that allows you to interact with the Raspberry Pi using a serial connection. This is useful when you don't have access to a network. You will need to install [minicom](https://www.google.com/search?q=minicom) on your computer to use the Serial Console. See the [pin diagram](/setup/synopsis#pin-diagram) for the exact pins on the Raspberry Pi.

To begin, plug the Raspberry Pi into your computer using a USB to TTL serial cable.

### Serial connection using USB to TTL serial cable

Connect the USB to TTL serial cable to the Raspberry Pi. The connections are as follows:
1. Black wire - GND
2. Green wire - TX
3. White wire - RX

### Serial connection using Arduino UNO

You can also use an Arduino UNO to connect to the Raspberry Pi. The connections are as follows:
1. Arduino RESET - Arduino GND
2. Arduino TX - Raspberry Pi TX
3. Arduino RX - Raspberry Pi RX

Plug the Arduino into your computer using a USB cable. 

## Physical Access

This is not a viable solution as you will need a monitor, keyboard, and mouse. However, it is by far the most straightforward way to interact with the Raspberry Pi. Plug in the monitor (using a mini-HDMI cable), keyboard (USB), and mouse (USB) into the Raspberry Pi. The monitor should display the Raspberry Pi desktop.
