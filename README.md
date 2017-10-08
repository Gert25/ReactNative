# ReactNative Playground

## README.MD CHEATSHEET
 [MARKDOWN CHEAT SHEET](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

 # INSTALLATION

 ## INSTALLING ANDROID ON MACOSX
 Clone the repo: 
 
 `git clone git@github.com:Gert25/ReactNative.git`

 before using brew make sure that brew is updated by running the following command in the terminal 
 `brew update`

 ### installing node
   * `brew install node`
### installing watchman
   * `brew install watchman`
### installing React Native CLI
 **via node**
 `npm install -g react-native-cli`
 
 **via curl**
 `curl -0 -L https://npmjs.org/install.sh | sudo sh`

### installing JDK 8 or newer
 `brew update`

 `brew cask install java`   
 Testing if it is installed run the following in your terminal
  `javac -version` which should display something like `javac 1.8.0_131`

  ### installing Android Studio 
  [Install Android](https://developer.android.com/studio/index.html)

   Run the custom setup when prompted, Insure the folling modules are installed
   * Android SDK
   * Android SDK Platform
   * Performance (INtel HAXM)
   * Android Virtual Device

Open the Android Studio IDE and go to: **Apperance & Behavior** -> **System Settings** -> **Android SDK**

Under the SDK Platforms Select the followng:
 * Google APIs
 * Android SDK Platform 23
 * Intel x86 Atom_64 System Image
 * Google APIs Intel x86 Atom_64 System Image

### Set up Environmental Variables
add the following to your .bash_profile

`export ANDROID_HOME=$HOME/Library/Android/sdk`

`export PATH=$PATH:$ANDROID_HOME/tools`

`export PATH=$PATH:$ANDROID_HOME/platform-tools`

### Running on Mobile Device
  [Click Here](https://facebook.github.io/react-native/docs/running-on-device.html)




 
 
