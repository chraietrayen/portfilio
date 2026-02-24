/* ============================================================
   THREE.JS PREMIUM 3D SCENE v2 � RAYEN CHRAIET PORTFOLIO
   Nebula Particles, DNA Helix, Interactive Warp,
   Flowing Ribbons, Mouse-reactive Lighting
   ============================================================ */

(function () {
  'use strict';

  const container = document.getElementById('three-bg');
  if (!container) return;
  if (typeof THREE === 'undefined') return;

  const C = {
    particles: window.innerWidth < 768 ? 800 : 2000,
    branches: 6,
    radius: 10,
    spin: 1.5,
    floaters: window.innerWidth < 768 ? 4 : 10,
    dust: window.innerWidth < 768 ? 100 : 300,
    ribbons: 3,
    pal: {
      cyan: 0x00f0ff,
      pink: 0xff2d78,
      purple: 0xb24dff,
      gold: 0xe8b84b,
      green: 0x00ff88,
      orange: 0xff6b35,
    },
  };
  const PAL_ARR = Object.values(C.pal);

  /* ---- RENDERER ---- */
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  /* ---- SCENE ---- */
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030014, 0.045);

  /* ---- CAMERA ---- */
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 120);
  camera.position.set(0, 2, 16);

  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  /* ---- MOUSE ---- */
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener('mousemove', function(e) {
    mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  /* ============ NEBULA / GALAXY PARTICLES ============ */
  function buildGalaxy() {
    var count = C.particles;
    var pos = new Float32Array(count * 3);
    var col = new Float32Array(count * 3);
    var sz  = new Float32Array(count);
    var rnd = new Float32Array(count);

    var cIn  = new THREE.Color(C.pal.cyan);
    var cMid = new THREE.Color(C.pal.pink);
    var cOut = new THREE.Color(C.pal.purple);

    for (var i = 0; i < count; i++) {
      var i3 = i * 3;
      var r = Math.random() * C.radius;
      var branch = ((i % C.branches) / C.branches) * Math.PI * 2;
      var spinVal = r * C.spin;

      var rx = Math.pow(Math.random(), 3) * (Math.random() < .5 ? 1 : -1) * 2.0;
      var ry = Math.pow(Math.random(), 3) * (Math.random() < .5 ? 1 : -1) * 1.0;
      var rz = Math.pow(Math.random(), 3) * (Math.random() < .5 ? 1 : -1) * 2.0;

      pos[i3]     = Math.cos(branch + spinVal) * r + rx;
      pos[i3 + 1] = ry + Math.sin(r * 0.5) * 0.8;
      pos[i3 + 2] = Math.sin(branch + spinVal) * r + rz;

      var t = r / C.radius;
      var mc = cIn.clone();
      if (t < 0.4) mc.lerp(cMid, t / 0.4);
      else mc.lerp(cOut, (t - 0.4) / 0.6);

      col[i3]     = mc.r;
      col[i3 + 1] = mc.g;
      col[i3 + 2] = mc.b;

      sz[i]  = Math.random() * 1.8 + 0.3;
      rnd[i] = Math.random();
    }

    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
    geo.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1));

    var mat = new THREE.ShaderMaterial({
      vertexShader: [
        'attribute float aSize;',
        'attribute float aRand;',
        'varying vec3 vCol;',
        'varying float vA;',
        'uniform float uTime;',
        'uniform vec2 uMouse;',
        'void main(){',
        '  vCol = color;',
        '  vec3 p = position;',
        '  p.y += sin(uTime*0.4 + aRand*6.283)*0.2;',
        '  p.x += cos(uTime*0.25 + aRand*6.283)*0.12;',
        '  p.z += sin(uTime*0.3 + aRand*3.14)*0.08;',
        '  float mx = uMouse.x * 1.5;',
        '  float my = uMouse.y * 1.0;',
        '  float d = length(vec2(p.x - mx*5.0, p.y - my*3.0));',
        '  p.x += mx * 0.3 / (d*0.5 + 1.0);',
        '  p.y += my * 0.2 / (d*0.5 + 1.0);',
        '  vec4 mv = modelViewMatrix * vec4(p, 1.0);',
        '  gl_PointSize = aSize * (180.0 / -mv.z);',
        '  gl_Position = projectionMatrix * mv;',
        '  float dist = length(p.xz);',
        '  vA = smoothstep(11.0, 1.5, dist) * (0.25 + 0.2*sin(uTime*0.8 + aRand*6.283));',
        '}'
      ].join('\n'),
      fragmentShader: [
        'varying vec3 vCol;',
        'varying float vA;',
        'void main(){',
        '  float d = length(gl_PointCoord - vec2(0.5));',
        '  if(d > 0.5) discard;',
        '  float a = smoothstep(0.5, 0.05, d);',
        '  float core = smoothstep(0.18, 0.0, d) * 0.2;',
        '  gl_FragColor = vec4(vCol + core, a * vA);',
        '}'
      ].join('\n'),
      uniforms: { uTime: { value: 0 }, uMouse: { value: new THREE.Vector2() } },
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    var pts = new THREE.Points(geo, mat);
    worldGroup.add(pts);
    return { pts: pts, mat: mat };
  }
  var galaxy = buildGalaxy();

  /* ============ AMBIENT DUST ============ */
  function buildDust() {
    var n = C.dust;
    var pos = new Float32Array(n * 3);
    var szArr = new Float32Array(n);
    for (var i = 0; i < n; i++) {
      pos[i*3]   = (Math.random() - .5) * 40;
      pos[i*3+1] = (Math.random() - .5) * 25;
      pos[i*3+2] = (Math.random() - .5) * 40;
      szArr[i] = Math.random() * 1.0 + 0.1;
    }
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(szArr, 1));

    var mat = new THREE.ShaderMaterial({
      vertexShader: [
        'attribute float aSize;',
        'varying float vA;',
        'uniform float uTime;',
        'void main(){',
        '  vec3 p = position;',
        '  p.y += sin(uTime*0.15 + p.x*0.3)*0.5;',
        '  p.x += cos(uTime*0.12 + p.z*0.2)*0.3;',
        '  p.z += sin(uTime*0.1 + p.y*0.15)*0.2;',
        '  vec4 mv = modelViewMatrix * vec4(p,1.0);',
        '  gl_PointSize = aSize * (80.0 / -mv.z);',
        '  gl_Position = projectionMatrix * mv;',
        '  vA = smoothstep(20.0, 3.0, length(p)) * 0.1;',
        '}'
      ].join('\n'),
      fragmentShader: [
        'varying float vA;',
        'void main(){',
        '  float d = length(gl_PointCoord - vec2(0.5));',
        '  if(d > 0.5) discard;',
        '  gl_FragColor = vec4(0.7, 0.8, 1.0, smoothstep(0.5,0.0,d)*vA);',
        '}'
      ].join('\n'),
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    var pts = new THREE.Points(geo, mat);
    worldGroup.add(pts);
    return { pts: pts, mat: mat };
  }
  var dust = buildDust();

  /* ============ FLOATING GEOMETRIES ============ */
  var floaters = [];
  function buildFloaters() {
    var geos = [
      function(){ return new THREE.IcosahedronGeometry(.45, 0); },
      function(){ return new THREE.OctahedronGeometry(.38, 0); },
      function(){ return new THREE.TetrahedronGeometry(.42, 0); },
      function(){ return new THREE.TorusGeometry(.32, .1, 8, 24); },
      function(){ return new THREE.TorusKnotGeometry(.22, .07, 64, 8, 2, 3); },
      function(){ return new THREE.DodecahedronGeometry(.32, 0); },
      function(){ return new THREE.ConeGeometry(.25, .5, 6); },
      function(){ return new THREE.RingGeometry(.2, .4, 6); },
    ];

    for (var i = 0; i < C.floaters; i++) {
      var geo = geos[i % geos.length]();
      var color = PAL_ARR[i % PAL_ARR.length];

      var wireMat = new THREE.MeshBasicMaterial({
        color: color, wireframe: true, transparent: true, opacity: 0.08,
      });
      var wire = new THREE.Mesh(geo, wireMat);

      var edgesGeo = new THREE.EdgesGeometry(geo);
      var edgeMat = new THREE.LineBasicMaterial({
        color: color, transparent: true, opacity: 0.15,
      });
      var edges = new THREE.LineSegments(edgesGeo, edgeMat);

      var grp = new THREE.Group();
      grp.add(wire);
      grp.add(edges);

      var theta = Math.random() * Math.PI * 2;
      var phi = Math.acos(2 * Math.random() - 1);
      var rad = 5 + Math.random() * 9;

      grp.position.set(
        rad * Math.sin(phi) * Math.cos(theta),
        (Math.random() - .5) * 7,
        rad * Math.sin(phi) * Math.sin(theta)
      );
      grp.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);

      worldGroup.add(grp);
      floaters.push({
        mesh: grp, wireMat: wireMat, edgeMat: edgeMat,
        rx: (Math.random()-.5)*.012,
        ry: (Math.random()-.5)*.016,
        rz: (Math.random()-.5)*.009,
        fSpeed: .25 + Math.random()*.5,
        fOff: Math.random()*Math.PI*2,
        baseY: grp.position.y,
        pSpeed: .4 + Math.random()*1.2,
        pOff: Math.random()*Math.PI*2,
        baseScale: .7 + Math.random()*.6,
      });
    }
  }
  buildFloaters();

  /* ============ CENTRAL HERO � Multi-layer Polyhedron ============ */
  function buildHero() {
    var grp = new THREE.Group();

    var coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    var coreMat = new THREE.ShaderMaterial({
      vertexShader: [
        'varying vec3 vPos;',
        'varying vec3 vNorm;',
        'void main(){',
        '  vPos = position;',
        '  vNorm = normal;',
        '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '}'
      ].join('\n'),
      fragmentShader: [
        'varying vec3 vPos;',
        'varying vec3 vNorm;',
        'uniform float uTime;',
        'void main(){',
        '  float fresnel = 1.0 - abs(dot(normalize(vNorm), vec3(0.0, 0.0, 1.0)));',
        '  fresnel = pow(fresnel, 2.5);',
        '  vec3 c1 = vec3(0.0, 0.94, 1.0);',
        '  vec3 c2 = vec3(1.0, 0.18, 0.47);',
        '  vec3 col = mix(c1, c2, fresnel + sin(uTime + vPos.y*2.0)*0.2);',
        '  float alpha = fresnel * 0.25 + 0.02;',
        '  gl_FragColor = vec4(col, alpha);',
        '}'
      ].join('\n'),
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
      wireframe: true,
      blending: THREE.AdditiveBlending,
    });
    var core = new THREE.Mesh(coreGeo, coreMat);
    grp.add(core);

    var shellGeo = new THREE.IcosahedronGeometry(2.2, 0);
    var shellMat = new THREE.MeshBasicMaterial({
      color: C.pal.purple, wireframe: true, transparent: true, opacity: 0.1,
    });
    var shell = new THREE.Mesh(shellGeo, shellMat);
    grp.add(shell);

    var innerGeo = new THREE.OctahedronGeometry(0.9, 0);
    var innerMat = new THREE.MeshBasicMaterial({
      color: C.pal.gold, wireframe: true, transparent: true, opacity: 0.15,
    });
    var inner = new THREE.Mesh(innerGeo, innerMat);
    grp.add(inner);

    var r1Geo = new THREE.TorusGeometry(2.8, 0.018, 16, 120);
    var r1Mat = new THREE.MeshBasicMaterial({
      color: C.pal.cyan, transparent: true, opacity: 0.08,
    });
    var ring1 = new THREE.Mesh(r1Geo, r1Mat);
    ring1.rotation.x = Math.PI * 0.45;
    grp.add(ring1);

    var r2Geo = new THREE.TorusGeometry(3.3, 0.012, 16, 100);
    var r2Mat = new THREE.MeshBasicMaterial({
      color: C.pal.pink, transparent: true, opacity: 0.1,
    });
    var ring2 = new THREE.Mesh(r2Geo, r2Mat);
    ring2.rotation.x = Math.PI * 0.7;
    ring2.rotation.z = Math.PI * 0.25;
    grp.add(ring2);

    var r3Geo = new THREE.TorusGeometry(3.8, 0.008, 16, 80);
    var r3Mat = new THREE.MeshBasicMaterial({
      color: C.pal.gold, transparent: true, opacity: 0.06,
    });
    var ring3 = new THREE.Mesh(r3Geo, r3Mat);
    ring3.rotation.x = Math.PI * 0.3;
    ring3.rotation.y = Math.PI * 0.6;
    grp.add(ring3);

    var orbCount = 20;
    var orbPos = new Float32Array(orbCount * 3);
    for (var i = 0; i < orbCount; i++) {
      var a = (i / orbCount) * Math.PI * 2;
      var rVal = 2.8 + Math.random() * 1.0;
      orbPos[i*3]   = Math.cos(a) * rVal;
      orbPos[i*3+1] = (Math.random()-.5) * 1.5;
      orbPos[i*3+2] = Math.sin(a) * rVal;
    }
    var orbGeo = new THREE.BufferGeometry();
    orbGeo.setAttribute('position', new THREE.BufferAttribute(orbPos, 3));
    var orbMat = new THREE.PointsMaterial({
      color: C.pal.cyan, size: 2, transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    var orbs = new THREE.Points(orbGeo, orbMat);
    grp.add(orbs);

    grp.position.set(5, 0.5, -3);
    worldGroup.add(grp);

    return { grp: grp, core: core, coreMat: coreMat, shell: shell, shellMat: shellMat, inner: inner, innerMat: innerMat, ring1: ring1, ring2: ring2, ring3: ring3, orbs: orbs };
  }
  var hero = buildHero();

  /* ============ FLOWING RIBBONS / ENERGY STREAMS ============ */
  var ribbons = [];
  function buildRibbons() {
    for (var r = 0; r < C.ribbons; r++) {
      var pts = [];
      var segments = 100;
      var yBase = (Math.random() - .5) * 8;
      var zBase = -3 + Math.random() * -6;
      for (var i = 0; i <= segments; i++) {
        var t = i / segments;
        pts.push(new THREE.Vector3(
          (t - .5) * 30,
          yBase + Math.sin(t * Math.PI * 3) * 1.5,
          zBase + Math.cos(t * Math.PI * 2) * 2
        ));
      }
      var curve = new THREE.CatmullRomCurve3(pts);
      var cPts = curve.getPoints(segments);
      var geo = new THREE.BufferGeometry().setFromPoints(cPts);

      var color1 = PAL_ARR[r % PAL_ARR.length];
      var color2 = PAL_ARR[(r + 2) % PAL_ARR.length];
      var c1 = new THREE.Color(color1);
      var c2 = new THREE.Color(color2);

      var mat = new THREE.ShaderMaterial({
        vertexShader: [
          'varying float vT;',
          'uniform float uTime;',
          'void main(){',
          '  vT = (position.x + 15.0) / 30.0;',
          '  vec3 p = position;',
          '  p.y += sin(uTime*2.0 + vT*8.0)*0.15;',
          '  p.z += cos(uTime*1.5 + vT*6.0)*0.1;',
          '  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);',
          '}'
        ].join('\n'),
        fragmentShader: [
          'varying float vT;',
          'uniform float uTime;',
          'uniform vec3 uC1;',
          'uniform vec3 uC2;',
          'void main(){',
          '  float pulse = sin(uTime*3.0 - vT*15.0)*0.5 + 0.5;',
          '  float edge = smoothstep(0.0, 0.15, vT) * smoothstep(1.0, 0.85, vT);',
          '  vec3 col = mix(uC1, uC2, vT + sin(uTime)*.15);',
          '  gl_FragColor = vec4(col, pulse * edge * 0.07);',
          '}'
        ].join('\n'),
        uniforms: {
          uTime: { value: 0 },
          uC1: { value: c1 },
          uC2: { value: c2 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      var line = new THREE.Line(geo, mat);
      worldGroup.add(line);
      ribbons.push({ line: line, mat: mat });
    }
  }
  buildRibbons();

  /* ============ DNA HELIX ACCENT ============ */
  function buildDNA() {
    var grp = new THREE.Group();
    var segments = 80;
    var pts1 = [], pts2 = [];

    for (var i = 0; i <= segments; i++) {
      var t = i / segments;
      var y = (t - .5) * 14;
      var angle = t * Math.PI * 6;
      var rVal = 1.2;
      pts1.push(new THREE.Vector3(Math.cos(angle) * rVal, y, Math.sin(angle) * rVal));
      pts2.push(new THREE.Vector3(Math.cos(angle + Math.PI) * rVal, y, Math.sin(angle + Math.PI) * rVal));
    }

    var mat1 = new THREE.LineBasicMaterial({
      color: C.pal.cyan, transparent: true, opacity: 0.05,
      blending: THREE.AdditiveBlending,
    });
    var mat2 = new THREE.LineBasicMaterial({
      color: C.pal.pink, transparent: true, opacity: 0.05,
      blending: THREE.AdditiveBlending,
    });

    var geo1 = new THREE.BufferGeometry().setFromPoints(pts1);
    var geo2 = new THREE.BufferGeometry().setFromPoints(pts2);
    grp.add(new THREE.Line(geo1, mat1));
    grp.add(new THREE.Line(geo2, mat2));

    for (var j = 0; j < segments; j += 5) {
      var bridgeGeo = new THREE.BufferGeometry().setFromPoints([pts1[j], pts2[j]]);
      var bridgeMat = new THREE.LineBasicMaterial({
        color: C.pal.gold, transparent: true, opacity: 0.06,
      });
      grp.add(new THREE.Line(bridgeGeo, bridgeMat));
    }

    grp.position.set(-8, 0, -6);
    worldGroup.add(grp);
    return grp;
  }
  var dna = buildDNA();

  /* ============ NEURAL CONNECTIONS ============ */
  var lineGrp = new THREE.Group();
  worldGroup.add(lineGrp);

  var LINE_POOL_SIZE = 50;
  var linePool = [];
  for (var li = 0; li < LINE_POOL_SIZE; li++) {
    var lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(6), 3));
    var lMat = new THREE.LineBasicMaterial({
      color: C.pal.cyan, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    var ln = new THREE.Line(lGeo, lMat);
    ln.visible = false;
    lineGrp.add(ln);
    linePool.push(ln);
  }

  function updateLines(time) {
    var idx = 0;
    for (var i = 0; i < floaters.length && idx < LINE_POOL_SIZE; i++) {
      for (var j = i + 1; j < floaters.length && idx < LINE_POOL_SIZE; j++) {
        var a = floaters[i].mesh.position;
        var b = floaters[j].mesh.position;
        var d = a.distanceTo(b);
        if (d < 7) {
          var curLn = linePool[idx++];
          var posArr = curLn.geometry.attributes.position.array;
          posArr[0] = a.x; posArr[1] = a.y; posArr[2] = a.z;
          posArr[3] = b.x; posArr[4] = b.y; posArr[5] = b.z;
          curLn.geometry.attributes.position.needsUpdate = true;
          curLn.material.opacity = (1 - d/7) * .08 * (0.5 + 0.5 * Math.sin(time * 2 + i));
          curLn.visible = true;
        }
      }
    }
    for (var k = idx; k < LINE_POOL_SIZE; k++) {
      linePool[k].visible = false;
    }
  }

  /* ---- LIGHTS ---- */
  var light1 = new THREE.PointLight(C.pal.cyan, 0.15, 15);
  light1.position.set(5, 3, 5);
  scene.add(light1);

  var light2 = new THREE.PointLight(C.pal.pink, 0.1, 15);
  light2.position.set(-5, -2, 3);
  scene.add(light2);

  /* ---- CAMERA TARGETS ---- */
  var camTargets = {
    home:       { x: 0,  y: 2,  z: 16,  lx: 0,  ly: 0,  lz: 0  },
    scanner:    { x:-3,  y: 3,  z: 13,  lx: 0,  ly: 1,  lz:-2  },
    about:      { x: 3,  y: 1,  z: 14,  lx: 1,  ly: 0,  lz: 0  },
    skills:     { x:-2,  y: 3.5,z: 12,  lx: 0,  ly: 0,  lz:-1  },
    experience: { x: 4,  y: 2,  z: 14,  lx: 1,  ly: 0,  lz:-2  },
    projects:   { x:-1,  y: 1,  z: 13,  lx:-1,  ly: 0,  lz:-1  },
    hobbies:    { x: 2,  y: 3,  z: 15,  lx: 0,  ly: 1,  lz: 0  },
    contact:    { x: 0,  y: 1,  z: 11,  lx: 0,  ly: 0,  lz:-3  },
  };
  var curTarget = camTargets.home;

  window.addEventListener('sectionChange', function(e) {
    curTarget = camTargets[e.detail && e.detail.section] || camTargets.home;
  });

  /* ---- RESIZE ---- */
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ============ ANIMATION LOOP ============ */
  var clock = new THREE.Clock();
  var frame = 0;

  function tick() {
    requestAnimationFrame(tick);
    var t = clock.getElapsedTime();
    frame++;

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    camera.position.x += (curTarget.x + mouse.x * 2.0 - camera.position.x) * 0.018;
    camera.position.y += (curTarget.y + mouse.y * 1.0 - camera.position.y) * 0.018;
    camera.position.z += (curTarget.z - camera.position.z) * 0.018;
    camera.lookAt(
      curTarget.lx + mouse.x * 2.5,
      curTarget.ly + mouse.y * 1.2,
      curTarget.lz
    );

    worldGroup.rotation.y = t * 0.015 + mouse.x * 0.08;

    galaxy.pts.rotation.y = t * 0.04;
    galaxy.mat.uniforms.uTime.value = t;
    galaxy.mat.uniforms.uMouse.value.set(mouse.x, mouse.y);

    dust.mat.uniforms.uTime.value = t;

    for (var fi = 0; fi < floaters.length; fi++) {
      var f = floaters[fi];
      f.mesh.rotation.x += f.rx;
      f.mesh.rotation.y += f.ry;
      f.mesh.rotation.z += f.rz;
      f.mesh.position.y = f.baseY + Math.sin(t * f.fSpeed + f.fOff) * 0.6;
      var p = 0.12 + 0.18 * Math.sin(t * f.pSpeed + f.pOff);
      f.wireMat.opacity = p + 0.08;
      f.edgeMat.opacity = p * 1.5 + 0.1;
      var s = f.baseScale + Math.sin(t * f.pSpeed * 0.5 + f.pOff) * 0.08;
      f.mesh.scale.setScalar(s);
    }

    hero.core.rotation.y = t * 0.12;
    hero.core.rotation.x = t * 0.08;
    hero.coreMat.uniforms.uTime.value = t;
    hero.shell.rotation.y = -t * 0.06;
    hero.shell.rotation.z = t * 0.04;
    hero.inner.rotation.y = t * 0.25;
    hero.inner.rotation.x = -t * 0.18;
    hero.ring1.rotation.z = t * 0.08;
    hero.ring2.rotation.y = t * 0.1;
    hero.ring3.rotation.z = -t * 0.06;
    hero.orbs.rotation.y = t * 0.15;

    var hp = 0.18 + 0.14 * Math.sin(t * 1.2);
    hero.shellMat.opacity = hp * 0.6;
    hero.innerMat.opacity = hp + 0.2;

    hero.grp.rotation.y = mouse.x * 0.35;
    hero.grp.rotation.x = mouse.y * 0.2;
    hero.grp.position.y = 0.5 + Math.sin(t * 0.5) * 0.3;

    dna.rotation.y = t * 0.08;

    for (var ri = 0; ri < ribbons.length; ri++) {
      ribbons[ri].mat.uniforms.uTime.value = t;
    }

    if (frame % 4 === 0) updateLines(t);

    light1.position.x = 5 + mouse.x * 4;
    light1.position.y = 3 + mouse.y * 3;
    light2.position.x = -5 - mouse.x * 3;
    light2.position.y = -2 + mouse.y * 2;

    var dark = document.documentElement.getAttribute('data-theme') !== 'light';
    scene.fog.color.setHex(dark ? 0x030014 : 0xf0f0f8);
    scene.fog.density = dark ? 0.045 : 0.06;

    renderer.render(scene, camera);
  }
  tick();

  document.addEventListener('visibilitychange', function() {
    document.hidden ? clock.stop() : clock.start();
  });

  window.threeScene = {
    scene: scene,
    camera: camera,
    renderer: renderer,
    hero: hero,
    setSection: function(s) { curTarget = camTargets[s] || camTargets.home; },
  };
})();
