/**
* @Author: Mervyn
* @Date:   2016,May,12 22:58:28
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,19 23:13:48
*/

package com.modules.screen;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

// import java.util.HashMap;
// import java.util.Map;
import java.io.FileOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

import android.app.Activity;
import android.graphics.Bitmap;
import android.view.WindowManager;
import android.view.View;
import android.view.Display;
import android.os.Environment;


public class ScreenModule extends ReactContextBaseJavaModule {
    public ScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "Screen";
    }
    
    @ReactMethod
    public void screenShot() {
        Activity currentActivity = getCurrentActivity();
        
        View view = currentActivity.getWindow().getDecorView();
        view.buildDrawingCache();
        view.setDrawingCacheEnabled(true);
        
        Display display = currentActivity.getWindowManager().getDefaultDisplay();
        int widths = display.getWidth();
        int heights = display.getHeight();
        
        Bitmap Bmp = Bitmap.createBitmap(view.getDrawingCache(), 0, 0, widths, heights);
   
        String filename = "ScreenShot-" + UUID.randomUUID().toString() + ".png";
        File path = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES);
        File file = new File(path, filename);
        
        try {
            FileOutputStream fos = new FileOutputStream(file);
            Bmp.compress(Bitmap.CompressFormat.PNG, 90, fos);  
            fos.flush();
            fos.close();
 
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
    }
}