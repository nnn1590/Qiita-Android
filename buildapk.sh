#!/bin/bash -e
cd "$(dirname ${0})"
echo Starting build...
ionic cordova build android --prod --release
echo Build done, signing apk...
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk spila
echo Signed, aligning apk...
read -p"Enter code name(apk file name): " codename
echo Starting with codename: "${codename}"
if [ -e "${codename}.apk" ]; then
	echo Deleting file...
	rm "${codename}.apk"
fi
zipalign -v 4 "$(dirname ${0})/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk" "${codename}.apk"
