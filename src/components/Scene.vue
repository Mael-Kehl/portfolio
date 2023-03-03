<template>
  <Renderer ref="renderer" antialias alpha :orbit-ctrl="{ enableDamping: true, target }" resize>
    <PerspectiveCamera :aspect="2" :position="{ x: 100, y: 200, z: 300 }" />
    <Scene ref="scene" >
      

      <DirectionalLight
        :position="{ x: 0, y: 200, z: 100 }"
         
      />
      <AmbientLight color="#ffffff" />
      
      <!-- <FbxModel src="/src/assets/models/samba.fbx" @load="onLoad" /> -->
      <GltfModel src="src//assets/models/biplan.gltf" 
      :position="{x: 70, y: 150, z:70}"
      />

    </Scene>
  </Renderer>
</template>

<script>
// Model from mixamo.com
import { AnimationMixer, Clock, Fog, Vector3 } from 'three';
import {
  AmbientLight,
  PerspectiveCamera,
  DirectionalLight,
  FbxModel,
  GltfModel,
  HemisphereLight,
  Renderer,
  PhongMaterial,
  Plane,
  Scene,
} from 'troisjs';
export default {
  components: {
    AmbientLight,
    PerspectiveCamera,
    DirectionalLight,
    FbxModel,
    GltfModel,
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
  
  <style scoped>
  body {
    margin: 0;
  }
  canvas {
    width: 100%;
    height: 100%;
    border: solid 2px red;
  }

  @media screen and (max-width:800px) {
    canvas {
      width: 100%;
    }
  }
  </style>