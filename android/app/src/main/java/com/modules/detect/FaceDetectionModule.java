/**
* @Author: Mervyn
* @Date:   2016,May,12 22:58:28
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,16 17:03:22
*/

package com.modules.detect;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

// import java.util.HashMap;
// import java.util.Map;

public class FaceDetectionModule extends ReactContextBaseJavaModule {
    public FaceDetectionModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "GetFaceDetect";
    }
    
    @ReactMethod
    public void measureLayout(Callback errorCallback,
                              Callback successCallback){
        try {
            successCallback.invoke(100, 100, 100, 100);
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}