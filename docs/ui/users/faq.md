---
description: A variety of frequently asked questions. 
---
# FAQ

### Antivirus detections?

Due to the nature of Millennium, especially on Windows, some antivirus software may mistakenly identify it as a virus. This is particularly true for Windows Defender, which often flags Millennium (user32.dll) as malicious, despite it being harmless. This detection is attributable to one of Millennium's core assets, namely user32.dll. Millennium's core file is named user32.dll to trick Steam into loading it instead of the actual user32.dll shipped by windows, therefor forcing Steam to load Millennium, instead of the Windows USER32 [Learn more...](https://en.wikipedia.org/wiki/Microsoft_Windows_library_files) This method allows Millennium to run and safely modify Steam's appearance without altering any of its files or interfering with its process memory. As you might have imagined, Windows detects this as a threat because it notices a file named user32.dll that isn't owned by the operating system, which it sees as harmful (ex. A virus that tries to hide itself as a Windows file). 

This detection most notably occurs with Windows Defender, and other AV's don't have an issue with it. Run it through virus total and you'll see for yourself.

It's important to approach everything you read online with caution, including this information. We encourage you to verify it yourself—compile, test, and audit Millennium's source code, and you'll find that it behaves exactly as described here.

Remember, the best antivirus is a smart end-user!

### Can I Get Banned?

No, in short, you will not get banned for using Millennium as it doesn't violate any of Steam's policies. With that said, Millennium, and any of its developers are not responsible for any of your actions, or the potential repercussions nonetheless. Learn more about MIT Licensing [here](https://github.com/SteamClientHomebrew/Millennium/blob/main/LICENSE)

---

### Is Millennium against the Steam® Terms of Service (ToS)?

No, Millennium alone does not modify Steam® in a way that gives individuals an unfair advantage, nor does it change the intended function of the service.

> Your license to the Services is expressly conditioned on your agreement not to do any of the following (the “Prohibitions”):
> Create, develop, modify, distribute, or use any unauthorized software programs to gain any advantage or alter the intended operation of the Services;

[Steam EULA Reference...](https://store.steampowered.com/eula/471710_eula_0#:~:text=Create%2C%20develop%2C%20modify%2C%20distribute%2C%20or%20use%20any%20unauthorized%20software%20programs%20to%20gain%20any%20advantage%20or%20alter%20the%20intended%20operation%20of%20the%20Services%3B)

---

### Is Millennium against the Steam® Privacy Policy?

No, Millennium does not store or log any form of user data and ensures that approved plugins do not store user data without consent.

---

### Where does Millennium save data?

Refer to the [uninstaller guide](/users/uninstalling), which has information regarding where binaries are installed

---

### How do I uninstall Millennium?

Refer to the [uninstaller guide](/users/uninstalling). There you will find documentation on how to uninstall Millennium's components