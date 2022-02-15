
  import * as THREE from 'https://cdn.skypack.dev/three@0.126.1/build/three.module.js';
  import * as dat from "dat.gui";
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000 )
  const renderer = new THREE.WebGLRenderer()

  const gui = new dat.GUI()
  const world = {
    plane:{
      width: 10,
      height:10
    }
  }
  gui.add(world.plane,'width',1,20).onChange(()=>{
   planeMesh.geometry.dispose()
   planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width,10,10,10)

   const {array} = planeMesh.geometry.attributes.position

   for (let i = 0; i < array.length; i += 3){
     const x = array[i]
     const y = array[i+1]
     const z = array[i+2]
 
     array[i + 2] = z + Math.random(5)
 
     console.log(array[i])
   }
  })

  gui.add(world.plane,'height',1,20).onChange(()=>{
    planeMesh.geometry.dispose()
    planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height,10,10)

    const {array} = planeMesh.geometry.attributes.position

    for (let i = 0; i < array.length; i += 3){
      const x = array[i]
      const y = array[i+1]
      const z = array[i+2]
  
      array[i + 2] = z + Math.random(5)
  
      console.log(array[i])
  }})


  renderer.setSize(innerWidth,innerHeight)
  renderer.setPixelRatio(devicePixelRatio)
  document.body.appendChild(renderer.domElement)

  // const boxGeometry = new THREE.BoxGeometry
  //   (1,1,1)
  // const material = new THREE.MeshBasicMaterial({color: 0x00FF})

  // const mesh = new THREE.Mesh(boxGeometry,material)

  const planeGeometry = new THREE.PlaneGeometry(5,5,10,10)
  
  const planeMaterial = new THREE.MeshPhongMaterial({color: 0xff0000,side:THREE.DoubleSide,flatShading:THREE.FlatShading})
  const planeMesh = new THREE.Mesh(planeGeometry,planeMaterial)
  scene.add(planeMesh)

  console.log(planeMesh.geometry.attributes.position.array)
  const {array} = planeMesh.geometry.attributes.position

  for (let i = 0; i < array.length; i += 3){
    const x = array[i]
    const y = array[i+1]
    const z = array[i+2]

    array[i + 2] = z + Math.random(5)

    console.log(array[i])
  }

  // scene.add(mesh)

  camera.position.z = 5

  const light = new THREE.DirectionalLight(0xfffff,1)
  light.position.set(0,0,1)
  scene.add(light)

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
    // // mesh.rotation.x += 0.01
    // // mesh.rotation.y += 0.01
    // planeMesh.rotation.x += 0.01
    // // planeMesh.rotation.y -= 0.01
  }
  
  renderer.render(scene,camera)

  animate()