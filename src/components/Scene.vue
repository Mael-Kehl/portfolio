<template>
  <Renderer ref="renderer" antialias alpha :orbit-ctrl="{ enableDamping: true, target }" resize shadow>
    <Camera :position="{ x: 100, y: 200, z: 300 }" />
    <Scene ref="scene">
      <HemisphereLight />

      <DirectionalLight
        :position="{ x: 0, y: 200, z: 100 }"
        cast-shadow :shadow-camera="{ top: 180, bottom: -120, left: -120, right: 120 }"
      />
      
      <FbxModel src="/src/assets/models/samba.fbx" @load="onLoad" />

    </Scene>
  </Renderer>
</template>

<script>
// Model from mixamo.com
import { AnimationMixer, Clock, Fog, Vector3 } from 'three';
import {
  AmbientLight,
  Camera,
  DirectionalLight,
  FbxModel,
  HemisphereLight,
  Renderer,
  PhongMaterial,
  Plane,
  Scene,
} from 'troisjs';
export default {
  components: {
    AmbientLight,
    Camera,
    DirectionalLight,
    FbxModel,
    HemisphereLight,
    Renderer,
    PhongMaterial,
    Plane,
    Scene,
  },
  data() {
    return {
      target: new Vector3(0, 100, 0),
      action: null
    };
  },
  mounted() {
    const scene = this.$refs.scene.scene;
    scene.fog = new Fog(0xa0a0a0, 200, 1000);
  },
  methods: {
    onLoad(object) {
      this.mixer = new AnimationMixer(object);
      this.action = this.mixer.clipAction(object.animations[0]);
      this.action.play();
      // object.traverse(function (child) {
      //   if (child.isMesh) {
      //     child.castShadow = true;
      //     child.receiveShadow = true;
      //   }
      // });
      this.clock = new Clock();
      this.$refs.renderer.onBeforeRender(this.updateMixer);
    },
    updateMixer() {
      this.mixer.update(this.clock.getDelta());
    },
  },
};
</script>
  
  <style>
  body {
    margin: 0;
  }
  canvas {
    height: 80%;
    width: 50%;
    border: solid 2px red;
  }

  @media screen and (max-width:800px) {
    canvas {
      width: 80%;
    }
  }
  </style>