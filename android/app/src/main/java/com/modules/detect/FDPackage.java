/**
* @Author: Mervyn
* @Date:   2016,May,12 22:58:43
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,14 23:34:35
*/

public class FDPackage implements ReactPackage {
    @Override
    public List<NativeModule> creatNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new FaceDetectionModule(reactContext));
        return modules;
    }
    
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}