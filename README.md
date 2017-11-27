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
 Testing if java is running in your environment run the following in your terminal
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

Type source $HOME/.bash_profile to load the config into your current shell.Verify that ANDROID_HOME has been added to your path by running `echo $PATH`

### Running on Mobile Device
  [Click Here](https://facebook.github.io/react-native/docs/running-on-device.html)
### Using Emulator
Emulators  are useful cause they allow you to target multiple devices on yuor machine to run and these your application. You can download emulators via Android SDK.

 What version of Emulator to choose?
  It is important to take the android version/platform into account. You need to know which platform is mostly used and target that platform for your development instead of focusing on multiple platforms. This link provides some valid information about those type of metrics [Dashboard](https://developer.android.com/about/dashboards/index.html)

## Running the Project
 root into the application folder. 
  ### Android
      react-native run-android
# Concepts
## Platform Specific code
In react native there are two main ways off organizing your code when it comes to targeting platform specific functions:
* Using the Platform module
* Using platform-specific file extensions

### using Platform Module
`Platform.OS`

  When the platform (Operating system) is IOS, the Platform.OS will then be equal to `ios`. When the platform in which the app is running on is android Platform.ios will be equal to `android`
  
  `Platform.select`
   The `Platform.select` allows you to create specific stylesheets for specific Mobile platforms by passing in the `Platfrom.OS` specific key to the the class. See the following example
    
   ```  import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});
```

'Platform.Version`
In order to determine the version of the platform you can call the  `Platform.Version`. This will will bring back a string value stating the value.

### using Platform Specific extensions
React Native can determine which platform to target based on their file extension. For example when a file's extension includes the `.android.` in the file name react native will automatically handel it as android specific code. Likewise, when a file's extension includes `.ios.` in it the file will be used to target ios platform. 

## React Navigation
  React Navigation provides an easy to use navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both iOS and Android

  `NavigatorIOS`
    Targets the IOS platform to give a native look and feel with minimal configuration regarding the navigation platform for IOS. It is essentialy a wrapper class around `UINavigationController` 

 
# Libraries and Utilities
## Resources
* [Aweseome React Native](http://www.awesome-react-native.com/)
### Graph Library
[Victory Graph Library](https://formidable.com/open-source/victory/guides/brush-and-zoom)

## Redux 
* [Redux Module Builder](https://www.fullstackreact.com/articles/better-redux-module-management/) 
* [Setting Up React Native with Redux](https://medium.com/@jonlebensold/getting-started-with-react-native-redux-2b01408c0053)
 
## Text Editor
 ### Visual Studio Code
 ## Test Framework
 * [HTTP Test](https://github.com/visionmedia/supertest)
 * 

 configuration found in the .vscode
 * [React Native Tools](https://github.com/Microsoft/vscode-react-native)
# Front End UI Kit
 [Native Base](https://docs.nativebase.io/docs/CheatSheet.html)