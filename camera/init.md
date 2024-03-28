# Initializing the camera

## Enabling the camera

On Raspbian 10, the camera is disabled by default. To enable the camera, follow these steps:
1. Open the Raspberry Pi Configuration tool by running `sudo raspi-config` in the terminal.
2. Navigate to `Interfacing Options` and select `Camera`.
3. Select `Yes` to enable the camera.

You can also enable the camera from the graphical interface:
1. Open the Raspberry Pi Configuration tool from the main menu.
2. Navigate to `Interfaces` and select `Camera`.
3. Select `Enabled` to enable the camera.

![Camera interface](/interfaces.png)

## Verifying if the camera is enabled

To verify if the camera is enabled, run the following command in the terminal:
```bash
vcgencmd get_camera
```

If the camera is enabled, you will see the following output:
```
supported=1 detected=1
```

If the camera is not detected, you will see the following output:
```
supported=0 detected=0
```
In this case, check the camera connection and try again.

