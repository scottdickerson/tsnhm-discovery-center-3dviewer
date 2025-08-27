# Project Setup

This project requires `git lfs` to be installed. If you don't have it installed, you can install it by following the instructions [here](https://git-lfs.github.com/). and Vercel to be [configured](https://vercel.com/docs/projects/overview#git-large-file-storage-lfs) to support it.

## Building

By default this builds a static site to the `/dist` directory than can be served with `nginx` using the sample `nginx.conf` or by using the `serve -s dist` command.

```bash
npm run build
sudo cp -r ./dist/* /var/www/html
systemctl restart nginx
```

### Build targets

There are different build targets for each version of this project.
"build:body_fossils", "build:tracks_and_traces", and "build:putting_it_together".
Each builds a different version of the site for a specific kiosk.

## Deploying to Vercel

If you want to automatically deploy to Vercel instead on push to main, you can comment in the lines of the `astro.config.mjs` file related to vercel, or overwrite the `astro.config.mjs` file with the `astro.config.vercel.mjs` file.

## Setting up Ubuntu

- Startup in Windows mode and copy the license key down and make a label and put it on the underside of the computer
- Enter the bios and under Chipset set the system power loss power resume to on
- Perform the default Ubuntu desktop install from the usb drive
- Choose to replace Windows Boot entirely with Gnome
- Select MP4/MP3 download and graphics driver downloads
- turn off screen lock and power down
- After reboot
- Install Google Chrome
- Login to github and download the `./scripts/setup-ubuntu.sh` script from the repo and chmod it
- Run the `./scripts/setup-ubuntu.sh` script to install the necessary packages
- Open the gnome-extensions site in Firefox and download the [disable-gestures 2021 ](https://extensions.gnome.org/extension/4049/disable-gestures-2021/) extension
- Open the Extensions app in Gnome desktop and disable all UI features except the Desktop Icons one and enable the disable-gestures extension and tiling assistant
- Disable the keyring prompt in [Gnome](https://askubuntu.com/questions/867/how-can-i-stop-being-prompted-to-unlock-the-default-keyring-on-boot)
- Add Chrome to the "Startup Applications" app in Gnome with these cli parameters by copying the `chrome.desktop` file to the `~/.config/autostart` directory.
- Firefox disable tab detach: https://www.reddit.com/r/firefox/comments/1j896fb/is_there_any_fix_for_browsertabsallowtabdetach/
- Disable edge tiling on Ubuntu https://strugglers.net/~andy/mothballed-blog/2017/12/14/disabling-edge-tiling-on-gnome-3-26/
