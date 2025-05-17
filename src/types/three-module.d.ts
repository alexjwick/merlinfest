// src/types/three-module.d.ts

// Type definitions for Three.js examples
declare module 'three/examples/jsm/loaders/GLTFLoader.js' {
    import { AnimationClip, Camera, Group, Loader, LoadingManager, Object3D, Scene } from 'three';

    export interface GLTF {
        animations: AnimationClip[];
        scene: Group;
        scenes: Group[];
        cameras: Camera[];
        asset: {
            version: string;
            [key: string]: any;
        };
        parser: any;
        userData: any;
    }

    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (gltf: GLTF) => void,
            onProgress?: (event: { loaded: number; total: number }) => void,
            onError?: (event: ErrorEvent) => void
        ): void;

        parse(
            data: ArrayBuffer | string,
            path: string,
            onLoad: (gltf: GLTF) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
    }
}

declare module 'three/examples/jsm/controls/OrbitControls.js' {
    import { Camera, EventDispatcher, Vector3 } from 'three';

    export class OrbitControls extends EventDispatcher {
        constructor(camera: Camera, domElement?: HTMLElement);
        enabled: boolean;
        target: Vector3;
        enableDamping: boolean;
        dampingFactor: number;
        update(): void;
        dispose(): void;
        // Add other properties as needed
    }
  }