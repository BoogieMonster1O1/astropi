# Taking pictures

The `rpicam-still` command is used to take pictures using the Raspberry Pi camera module. A variety of options can be passed to the command to control the camera settings. The basic syntax of the command is as follows:

```bash
rpicam-still [options]
```

## `-v` or `--verbose`

The `-v` or `--verbose` option is used to display verbose output. This option is useful for debugging purposes.

```bash
rpicam-still -v [options]
```

## `-o` or `--output`

The `-o` or `--output` option is used to specify the output file name. The file name can be specified with or without an extension. If no extension is specified, the file will be saved as a JPEG image.

```bash
rpicam-still -o image.jpg [options]
```

## `-t` or `--timeout`

The `-t` or `--timeout` option is used to specify the time in milliseconds before the picture is taken. The default value is 5 seconds.

```bash
rpicam-still -t 2s [options]
```
