# Connecting to the Internet

You can connect your Raspberry Pi to the internet using either an Ethernet cable or Wi-Fi.

## Wi-Fi

You can configure the Wi-Fi settings either directly from the SD card or from the Raspberry Pi itself.

### Directly from the SD card
This approach is recommended if you require Wi-Fi to connect to the Raspberry Pi. For an astroberry setup, this isn't the case as the astroberry image can be connected to via its hotspot. However it is still useful if you want to connect to a different network.

1. Insert the SD card into your computer and [mount the data partition](/setup/accessing-sd).
2. [Navigate](/terminal/basic.md#cd-change-directory) to the `/etc/NetworkManager/system-connections` directory.
2. [Edit](/terminal/editing) the `Wi-Fi.nmconnection` file. It may also be called `preconfigured.nmconnection`. 

![Wi-Fi.nmconnection](/wifi.png)
<small>The actual file path is not given in the image</small>

3. Change the `ssid` and `psk` fields to match your Wi-Fi network's name and password.
  - The SSID is the name of your Wi-Fi network. It is case-sensitive.
  - The PSK is a pre-shared key. Use [this tool](https://www.wireshark.org/tools/wpa-psk.html) to generate a PSK from your Wi-Fi password and SSID.
4. Save the file and unmount the SD card.

## Ethernet

Simply plug the Raspberry Pi into an access point using an Ethernet cable. It should automatically connect to the internet.

