---
editLink: true
---

# Editing files

## Using nano

Most Linux distributions come with a text editor called `nano`. You can use `nano` to create and edit text files in the terminal.

To open a file with `nano`, use the following command:

```bash
nano <file_name>
```

For example, to open a file named `file.txt`, you would run:

```bash
nano file.txt
```

![nano text editor](/nano.png)

To write text in `nano`, simply start typing. You can use the arrow keys to navigate the text. To save the changes and exit `nano`, press `Ctrl + O`, then press `Enter`. To exit `nano`, press `Ctrl + X`.


## Using emacs

Another popular text editor available on most Linux distributions is `emacs`. You can use `emacs` to create and edit text files in the terminal. Emacs is known for its extensibility and powerful features.

Similar to `nano`, you can open a file with `emacs` using the following command:

```bash
emacs <file_name>
```

For example, to open a file named `file.txt`, you would run:

```bash
emacs file.txt
```

![emacs text editor](/emacs.png)

To write text in `emacs`, simply start typing. You can use the arrow keys to navigate the text. To save the changes and exit `emacs`, press `Ctrl + X`, then press `Ctrl + S`. To exit `emacs`, press `Ctrl + X`, then press `Ctrl + C`.


## Using vim

`vim` is another popular text editor that is commonly found on Linux systems. It is known for its powerful features and efficiency. `vim` has a steeper learning curve compared to `nano` and `emacs`.

`vim` is a modal editor, which means it has different modes for editing text. The two primary modes are:
- **Normal mode**: Used for navigation and executing commands.
![vim normal mode](/vim-normal.png)
- **Insert mode**: Used for inserting and editing text.
![vim insert mode](/vim-insert.png)

Similar to the previous editors, to open a file with `vim`, use the following command:

```bash
vim <file_name>
```

For example, to open a file named `file.txt`, you would run:

```bash
vim file.txt
```

To write text in `vim`, press `i` to enter insert mode. You can then start typing. 

<Badge>
Tip: You can also use the Insert key on your keyboard to enter insert mode.
</Badge>

To save the changes and exit `vim`, press `Esc` to exit insert mode, then type `:wq` and press `Enter`. To exit `vim` without saving changes, press `Esc` to exit insert mode, then type `:q!` and press `Enter`.
