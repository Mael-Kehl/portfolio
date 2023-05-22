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
        let rocketobject = {
            rotation: {
                z: 0
            }
        };

        let container = document.getElementById('container');
        this.gltfloader = new GLTFLoader();

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 2;

        this.scene = new Three.Scene();


        this.ambient = new Three.AmbientLight();
        this.scene.add(this.ambient);

        this.directionnal = new Three.PointLight(0xffffff, 1.0);
        this.directionnal.position.set(0,2,2);
        this.scene.add(this.directionnal);

        // this.helper = new Three.DirectionalLightHelper( this.directionnal, 1 );
        // this.scene.add(this.helper);

        this.cube = new Three.Mesh(
            new Three.BoxGeometry(0.1,0.1,0.1),
            new Three.MeshLambertMaterial({color: 0xff0000})
        )
        this.cube.position.set(0,0,0);
        // this.scene.add(this.cube);

        this.gltfloader.load('/assets/models/rocket.gltf', (rocket) => {
            rocket.scene.scale.set(1,1,1);
            this.rocketobject = rocket;
            this.rocketobject.scene.position.y = 0;
            this.rocketobject.scene.position.x = -0.5;
            this.rocketobject.scene.position.z = -1;
            this.rocketobject.scene.rotation.z = -30*(Math.PI/180);
            this.scene.add(rocket.scene);
        })


    
        this.renderer = new Three.WebGLRenderer({
            antialias: true, 
            alpha: true
        });

        // this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        // this.controls.update();

        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

    },
    animate: function() {
        requestAnimationFrame(this.animate);
        
        if (this.rocketobject)
            this.rocketobject.scene.children[0].rotation.z += 0.1;

        // this.controls.update();
        this.renderer.render(this.scene, this.camera);
    },
    onresize: function() {
        const w = this.container.clientWidth;
        const h = this.container.clientHeight;
        this.camera.aspect = w / h; 
        this.camera.updateProjectionMatrix();
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
        max-width: 100%;
        min-width: 50%;
        /* border: 2px solid red; */
    }

    @media screen and (max-width: 800px) {
        #container {
            min-height: 250px;
        }
    }
</style>