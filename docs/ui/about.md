# About Millennium

## What is Millennium?
Millennium is an open-source low-code modding framework to create, manage and use themes/plugins for the desktop Steam Client without any low-level internal interaction or overhead. 

## How does Millennium work?
Millennium is based off vulnerabilities inside the Steam Client that allow its functioning.

The steam client has support for remote CEF debugging, which locally exposes the chrome developer tools to your system. Millennium piggy backs off this feature and uses it as a passage way to interact with the client.

as unofficially documented [here](https://chromedevtools.github.io/devtools-protocol/) we can programmatically interact with the steam client without having to modify its internal memory. This allows us to create a SDK for injecting CSS and JS into context windows.

## Why is Millennium a DLL?
As mentioned above about the patching method, this means we need to have a thread/process running on the system at all times to keep windows under control. We strongly disagree with the basis of running standalone applications in the background with the Steam Client so we've opted for other methods.

**User32.dll**, the main library binary that encapsulates Millennium, loads itself into the Steam Client under a single thread and not as a standalone process. No, it doesn't use any method of DLL injection, and no, it does not permanently alter the state of the Steam Client. It involves using something the Steam Developers forgot to remove from the app from a long time ago. Steam attempts to load user32.dll (the main Windows API library) to work with a color interface that has since been deprecated but not removed. This means if we create our own library and mimic the Windows API entry point, we can hijack this connection and start our own threads within the Steam process.