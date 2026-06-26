# Samsung Virtual Remote

This tauri desktop app is a virtualization of a Samsung remote that works in conjunction with the samsung-tv-ws-api wrapper (https://github.com/xchwarze/samsung-tv-ws-api) to create a visual interface to interact with.

To be frank... this thing is not really faster or better than your remote, and hell it's pretty slow for modern day programming. I'm chalking this up to Samsung (or potentially just my Samsung TV (it's a 2020 version)). But, it is fun and cute to play with nonetheless, especially if you have a TV in your room and want to be a cool programmer guy!!11!!1!

# Setup

This app assumes that you have a Samsung Smart TV and that you have configured it as such to have a consistent IP Address that will not change. There are guides on how to do this, or AI can help you figure that out.

## Linux

1. Create .env

Create a `.env` file in root and follow the example of `.env.example` but leave your variables blank.

2. Set the TV Address .env variable

Assuming you have your TV's IP Address set to a specific, static address, you can set that address there. For example:

```
VITE_TV_HOST=1.0.0.1
```
(That is not a real TV Address)

3. After doing your first command with `samsungtv`, save the Auth token

Once you have installed the `samsungtv` wrapper and tried a command (`samsungtv --host IP_HERE device-info`), you'll recieve an Auth Token after the command. We need to save this token to a file that we can regularly access and that the TV will accept.

From root (or wherever you would prefer):
```
mkdir -p ~/.config/samsungtvws
echo "YOUR_TOKEN_HERE" > ~/.config/samsungtvws/token.txt
```

Now that we have this file, take the absolute path (don't use "~") to that file and place that path in the .env variable **VITE_TV_TOKEN_FILE**.

4. Enjoy!

This tutorial is obviously not with a downloadable executable, so it's not terribly easy to set up for all, but that is coming soon.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
