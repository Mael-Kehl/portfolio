<template>
    <div id="container"></div>
</template>

<script>
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  data() {
    return {
    }
  },
  methods: {
    init: function() {
        const meshesInitialPos = new Three.Vector3(0.5, 0, 0);
        const meshesInitialRot = new Three.Vector3(0, 1.1, 0);


        let container = document.getElementById('container');
        this.gltfloader = new GLTFLoader();

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 2;

        this.scene = new Three.Scene();

        this.pickableMesh = [];
        this.heliceID = 1;

        this.ambient = new Three.AmbientLight({intensity: 1});
        this.scene.add(this.ambient);

        this.gltfloader.load('/src/assets/models/biplan.gltf', (plane) => {
            plane.scene.scale.set(0.01,0.01,0.01);
            plane.scene.rotation.y += meshesInitialRot.y;
            plane.scene.position.x += meshesInitialPos.x;
            this.scene.add(plane.scene);

            this.gltfloader.load('/src/assets/models/helice.gltf', (helice) => {
                helice.scene.scale.set(0.01,0.01,0.01);
                helice.scene.rotation.y += meshesInitialRot.y;
                helice.scene.position.x += meshesInitialPos.x;

                helice.scene.traverse((child) => {
                    if (child instanceof Three.Mesh) {
                        let m = child;
                        m.userData.id = this.heliceID;
                        this.pickableMesh.push(m);
                    }
                })
                this.scene.add(helice.scene);
            })
        })

        this.renderer = new Three.WebGLRenderer({
            antialias: true, 
            alpha: true
        });

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.update();

        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        this.pickableMesh.forEach(mesh => {
            if (mesh.userData.id == this.heliceID) {
                mesh.rotation.z += 0.5;
            }
        });
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>

<style scoped>
    #container {
        height: 100%;
        width: 100%;
        border: 2px solid red;
    }
</style>