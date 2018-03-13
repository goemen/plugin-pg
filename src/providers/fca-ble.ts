import { Injectable } from "@angular/core";
import {Cordova, Plugin,  IonicNativePlugin} from '@ionic-native/core';
import { Observable } from "rxjs/Observable";

@Plugin({
    plugin: 'fcable',
    pluginName: 'FCABLE',
    platforms: ['Android']
})
@Injectable()
export class FcaBle extends IonicNativePlugin {

    @Cordova()
    coolMethod(message: string, success: Function, error: Function): any {return; }
}