package com.playwithrn;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import com.imagepicker.ImagePickerPackage; // react-native-image-picker
import com.github.xinthink.rnmk.ReactMaterialKitPackage; // react-native-material-kit
import com.modules.screen.ScreenPackage; // face detection module
import com.RNFetchBlob.RNFetchBlobPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "playwithrn";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new ImagePickerPackage(), // react-native-image-picker
            new ReactMaterialKitPackage(), // react-native-material-kit
            new ScreenPackage(), // screen module
            new RNFetchBlobPackage()
        );
    }
}
