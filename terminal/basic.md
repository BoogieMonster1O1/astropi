---
editLink: true
---

# Basic commands

This page covers basic commands that you can use in the terminal. These commands are essential for navigating the file system, managing files, and executing programs.

## Definitions
- A directory is a folder that contains files and other directories. The root directory is the top-level directory in the file system. Directories can contain files and other directories, creating a hierarchical structure.
- A file is a collection of data stored on a computer. Files can contain text, images, programs, or other types of data.
- A path is a string of characters that specifies the location of a file or directory in the file system. There are two types of paths: absolute paths and relative paths.
  - An absolute path specifies the full location of a file or directory from the root directory. For example, `/home/user/Documents/file.txt` is an absolute path.
  - A relative path specifies the location of a file or directory relative to the current working directory. For example, `Documents/file.txt` is a relative path that refers to a file named `file.txt` in the `Documents` directory in the current working directory.

## `pwd` - Print working directory

The `pwd` command is used to print the full path of the current working directory. The working directory is the folder you are currently in. It shows you where you are in the file system.

When you open a terminal, you start in your home directory. You can use the `pwd` command to see the full path to your home directory.

```bash
pwd
```

Example output:

Linux:
```bash
/home/dhruva
```

macOS:
```bash
/Users/dhruva
```

## `ls` - List files

The `ls` command lists the files and directories in the current directory. By default, it displays the names of files and directories in a single column.

```bash
ls
```

To display detailed information about files and directories, you can use the `-l` option:

```bash
ls -l
```

## `cd` - Change directory

The `cd` command is used to change the current directory (folder). You can specify the directory you want to change to as an argument.

```bash
cd <directory_name>
```

Example:

```bash
cd Documents
```

## `mkdir` - Make directory

The `mkdir` command is used to create a new directory. You can specify the name of the directory you want to create as an argument.

```bash
mkdir <directory_name>
```

## `cp` and `mv` - Copy and move files

The `cp` command is used to copy files from one location to another. You need to specify the source file and the destination directory as arguments.

```bash
cp <source_path> <destination_directory>
```

Example:

```bash
cp file.txt Documents/file.txt
```

The `mv` command is used to move files from one location to another. It works similarly to the `cp` command but removes the original file after moving it.

```bash
mv <source_path> <destination_path>
```

Example:

```bash
mv file.txt Documents/file.txt
```


## `rm` - Remove files

The `rm` command is used to remove files. You need to specify the file you want to delete as an argument.

```bash
rm <file_path>
```


## `sudo` - Superuser do <Badge text="Caution" type="warning"/>

<Badge type="warning">
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.

</Badge>

The `sudo` command is used to run a command with superuser (administrative) privileges. It allows you to perform tasks that require elevated permissions. Use it with caution.

```bash
sudo <command>
```

