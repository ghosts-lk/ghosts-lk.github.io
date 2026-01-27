'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'
import { RotateCcw, Maximize2, Pause, Play, Radio, Target, Waves } from 'lucide-react'

export function BrandARViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const lastTouchRef = useRef<{ x: number; y: number } | null>(null)
  const isMouseDownRef = useRef(false)
  
  const [isLoading, setIsLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [targets, setTargets] = useState(0)

  const resetRotation = useCallback(() => {
    mouseRef.current.targetX = 0
    mouseRef.current.targetY = 0
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    let time = 0
    let paused = false

    const init = setTimeout(() => {
      const w = container.clientWidth || 800
      const h = container.clientHeight || 600

      // Scene
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x050808)

      // Camera
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
      camera.position.set(0, 6, 4)
      camera.lookAt(0, 0, 0)

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.3
      container.appendChild(renderer.domElement)
      rendererRef.current = renderer

      // Lighting
      scene.add(new THREE.AmbientLight(0x4ade80, 0.2))
      const spotLight = new THREE.SpotLight(0x4ade80, 2, 20, Math.PI / 4, 0.5)
      spotLight.position.set(0, 10, 0)
      scene.add(spotLight)

      // Main group
      const radar = new THREE.Group()

      // === REALISTIC MILITARY RADAR SCREEN ===
      const screenMat = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          sweep: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float sweep;
          varying vec2 vUv;
          
          float rand(vec2 co) {
            return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
          }
          
          void main() {
            vec2 p = vUv - 0.5;
            float r = length(p) * 2.0;
            float a = atan(p.y, p.x);
            
            // Authentic military radar background
            vec3 base = vec3(0.005, 0.015, 0.008);
            
            // Range rings - realistic military style
            float rings = 0.0;
            for (float i = 1.0; i <= 5.0; i++) {
              float ringWidth = 0.002;
              float ring = smoothstep(ringWidth, 0.0, abs(r - i * 0.2));
              rings += ring * 0.6;
            }
            
            // Fine grid pattern - like actual radar screens
            float gridX = mod(p.x * 20.0, 1.0);
            float gridY = mod(p.y * 20.0, 1.0);
            float grid = smoothstep(0.02, 0.0, abs(gridX - 0.5)) + smoothstep(0.02, 0.0, abs(gridY - 0.5));
            grid *= 0.15 * (1.0 - r);
            
            // Azimuth crosshair with labels
            float cross = smoothstep(0.002, 0.0, abs(p.x)) * 0.25;
            cross += smoothstep(0.002, 0.0, abs(p.y)) * 0.25;
            cross *= smoothstep(0.08, 0.15, r);
            
            // Realistic sweep beam - narrow and intense
            float angleDiff = mod(a - sweep + 3.14159, 6.28318) - 3.14159;
            float sweepWidth = 0.04;
            float sweepLine = smoothstep(sweepWidth, 0.0, abs(angleDiff));
            sweepLine *= smoothstep(-0.004, 0.0, angleDiff);
            sweepLine *= pow(1.0 - r * 0.5, 1.5) * 2.0;
            
            // Sweep trail with fade
            float trail = smoothstep(1.5, 0.0, abs(angleDiff)) * 0.3;
            trail *= smoothstep(-0.004, 0.0, angleDiff);
            trail *= 0.15 * (1.0 - r * 0.4);
            
            // Radar noise/clutter effect
            float noise = rand(vUv + time * 0.1) * 0.08;
            noise *= (1.0 - r) * sin(time * 3.0);
            
            // Edge bloom
            float edge = smoothstep(1.0, 0.85, r) * 0.5;
            
            // Center scope
            float center = smoothstep(0.12, 0.0, r) * 0.6;
            
            // Scanlines - horizontal CRT effect
            float scanline = sin(vUv.y * 300.0) * 0.02 + 0.98;
            
            vec3 green = vec3(0.29, 0.87, 0.5);
            vec3 col = base;
            col += green * rings * 0.8;
            col += green * grid;
            col += green * cross;
            col += green * sweepLine;
            col += green * trail;
            col += green * noise;
            col += green * edge;
            col += green * center;
            col *= scanline;
            
            // Vignette
            float vig = smoothstep(1.0, 0.7, r);
            col *= vig;
            
            float alpha = smoothstep(1.0, 0.95, r);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true,
      })
      
      const screen = new THREE.Mesh(new THREE.CircleGeometry(3.5, 128), screenMat)
      screen.rotation.x = -Math.PI / 2
      radar.add(screen)

      // === MILITARY OUTER BEZEL ===
      const outerRing = new THREE.Mesh(
        new THREE.TorusGeometry(3.5, 0.08, 64, 256),
        new THREE.MeshPhysicalMaterial({
          color: 0x2a2a2a,
          metalness: 0.8,
          roughness: 0.4,
          emissive: 0x1a3a1a,
          emissiveIntensity: 0.08,
        })
      )
      outerRing.rotation.x = Math.PI / 2
      radar.add(outerRing)

      // === AZIMUTH MARKERS ===
      const markerGroup = new THREE.Group()
      for (let i = 0; i < 36; i++) {
        const angle = (i / 36) * Math.PI * 2
        const isCardinal = i % 9 === 0
        const height = isCardinal ? 0.12 : 0.06
        
        const markerGeo = new THREE.BoxGeometry(0.02, height, 0.01)
        const markerMat = new THREE.MeshBasicMaterial({ color: 0x4ade80 })
        const marker = new THREE.Mesh(markerGeo, markerMat)
        
        marker.position.x = Math.cos(angle) * 3.7
        marker.position.z = Math.sin(angle) * 3.7
        marker.rotation.y = angle
        markerGroup.add(marker)
      }
      radar.add(markerGroup)

      // === RANGE RINGS WITH LABELS ===
      const rangeGroup = new THREE.Group()
      for (let i = 1; i <= 5; i++) {
        const ringGeo = new THREE.BufferGeometry()
        const points: THREE.Vector3[] = []
        for (let j = 0; j <= 64; j++) {
          const angle = (j / 64) * Math.PI * 2
          const dist = i * 0.7
          points.push(new THREE.Vector3(Math.cos(angle) * dist, 0, Math.sin(angle) * dist))
        }
        ringGeo.setFromPoints(points)
        const ring = new THREE.Line(ringGeo, new THREE.LineBasicMaterial({ 
          color: 0x4ade80, 
          transparent: true, 
          opacity: 0.4,
          linewidth: 2
        }))
        rangeGroup.add(ring)
      }
      radar.add(rangeGroup)

      // === SWEEP ARM - Glowing line ===
      const sweepGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0.02, 0),
        new THREE.Vector3(3.4, 0.02, 0)
      ])
      const sweepArm = new THREE.Line(sweepGeo, new THREE.LineBasicMaterial({ 
        color: 0x4ade80, transparent: true, opacity: 0.9 
      }))
      radar.add(sweepArm)

      // === CENTER HUB - Minimal ===
      const hub = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 32, 32),
        new THREE.MeshPhysicalMaterial({
          color: 0x4ade80,
          metalness: 0.9,
          roughness: 0.1,
          emissive: 0x4ade80,
          emissiveIntensity: 0.5,
        })
      )
      hub.position.y = 0.06
      radar.add(hub)

      // === FLOATING HOLOGRAPHIC RINGS ===
      const holoRings: THREE.Mesh[] = []
      for (let i = 0; i < 3; i++) {
        const holo = new THREE.Mesh(
          new THREE.TorusGeometry(3.8 + i * 0.4, 0.008, 8, 128),
          new THREE.MeshBasicMaterial({ 
            color: 0x4ade80, 
            transparent: true, 
            opacity: 0.15 - i * 0.04 
          })
        )
        holo.position.y = 0.3 + i * 0.25
        holoRings.push(holo)
        radar.add(holo)
      }

      // === REALISTIC MILITARY TARGET BLIPS ===
      interface Blip {
        mesh: THREE.Mesh
        ring: THREE.Mesh
        trail: THREE.Line
        angle: number
        dist: number
        phase: number
        life: number
        maxLife: number
        speed: number
        velocity: { x: number; z: number }
        prevPos: THREE.Vector3[]
      }
      const blips: Blip[] = []

      const createBlip = (): Blip => {
        const angle = Math.random() * Math.PI * 2
        const dist = 0.5 + Math.random() * 3.0
        const speed = 0.0003 + Math.random() * 0.0008
        
        // Main target dot
        const dot = new THREE.Mesh(
          new THREE.CircleGeometry(0.08, 32),
          new THREE.MeshBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 1 })
        )
        dot.rotation.x = -Math.PI / 2
        dot.position.set(Math.cos(angle) * dist, 0.03, Math.sin(angle) * dist)
        
        // Target ring indicator
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.12, 0.14, 32),
          new THREE.MeshBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 0.6 })
        )
        ring.rotation.x = -Math.PI / 2
        ring.position.copy(dot.position)
        ring.position.y = 0.025
        
        // Trail history
        const trailGeo = new THREE.BufferGeometry()
        const trailMat = new THREE.LineBasicMaterial({ 
          color: 0x4ade80, 
          transparent: true, 
          opacity: 0.4,
          linewidth: 1
        })
        const trail = new THREE.Line(trailGeo, trailMat)
        trail.position.y = 0.02
        
        radar.add(dot)
        radar.add(ring)
        radar.add(trail)
        
        return {
          mesh: dot,
          ring,
          trail,
          angle,
          dist,
          phase: Math.random() * Math.PI * 2,
          life: 0,
          maxLife: 6 + Math.random() * 5,
          speed,
          velocity: { x: (Math.random() - 0.5) * 0.002, z: (Math.random() - 0.5) * 0.002 },
          prevPos: [],
        }
      }

      // Initial blips
      for (let i = 0; i < 6; i++) blips.push(createBlip())
      setTargets(blips.length)

      // === AMBIENT PARTICLES ===
      const particles = new THREE.Points(
        (() => {
          const geo = new THREE.BufferGeometry()
          const pos = new Float32Array(300 * 3)
          for (let i = 0; i < 300; i++) {
            const a = Math.random() * Math.PI * 2
            const r = 1 + Math.random() * 4
            pos[i * 3] = Math.cos(a) * r
            pos[i * 3 + 1] = Math.random() * 2
            pos[i * 3 + 2] = Math.sin(a) * r
          }
          geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
          return geo
        })(),
        new THREE.PointsMaterial({ 
          color: 0x4ade80, 
          size: 0.015, 
          transparent: true, 
          opacity: 0.4,
          blending: THREE.AdditiveBlending 
        })
      )
      scene.add(particles)

      scene.add(radar)
      setIsLoading(false)

      // Animation
      let sweepAngle = 0
      let lastSpawn = 0

      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate)
        if (paused) { renderer.render(scene, camera); return }

        time += 0.012
        sweepAngle += 0.015
        if (sweepAngle > Math.PI * 2) sweepAngle -= Math.PI * 2

        // Update shader
        screenMat.uniforms.time.value = time
        screenMat.uniforms.sweep.value = sweepAngle

        // Sweep arm
        sweepArm.rotation.y = -sweepAngle

        // Mouse interaction - fluid and responsive
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.15
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.15
        radar.rotation.x = mouseRef.current.y * 0.25
        radar.rotation.z = mouseRef.current.x * 0.2

        // Holographic rings
        holoRings.forEach((ring, i) => {
          ring.rotation.z = time * (0.1 + i * 0.05) * (i % 2 ? 1 : -1)
          ring.position.y = 0.3 + i * 0.25 + Math.sin(time + i) * 0.05
        })

        // Center hub pulse
        const pulse = 1 + Math.sin(time * 2) * 0.1
        hub.scale.setScalar(pulse)

        // Blips - realistic military target tracking
        blips.forEach((b, idx) => {
          b.life += 0.016
          
          // Velocity-based movement (realistic tracking)
          b.mesh.position.x += b.velocity.x
          b.mesh.position.z += b.velocity.z
          
          // Add to trail history
          if (b.prevPos) {
            b.prevPos.push(new THREE.Vector3(b.mesh.position.x, 0.02, b.mesh.position.z))
            if (b.prevPos.length > 20) b.prevPos.shift()
          }
          
          // Update trail
          if (b.prevPos && b.prevPos.length > 0) {
            (b.trail.geometry as THREE.BufferGeometry).setFromPoints(b.prevPos)
          }
          
          // Update ring position
          b.ring.position.x = b.mesh.position.x
          b.ring.position.z = b.mesh.position.z
          
          // Target pulse - realistic radar return
          const signalStrength = 0.5 + Math.cos(time * 4 + b.phase) * 0.5
          ;(b.mesh.material as THREE.MeshBasicMaterial).opacity = signalStrength
          ;(b.ring.material as THREE.MeshBasicMaterial).opacity = signalStrength * 0.5
          
          // Ring expansion
          const trackingDot = 1 + Math.sin(time * 3 + b.phase) * 0.2
          b.ring.scale.setScalar(trackingDot)
          
          // Check boundaries - targets leave the radar
          const dist = Math.sqrt(b.mesh.position.x ** 2 + b.mesh.position.z ** 2)
          if (dist > 3.5 || b.life > b.maxLife) {
            const fade = Math.max(0, 1 - (b.life - b.maxLife) / 1.5)
            ;(b.mesh.material as THREE.MeshBasicMaterial).opacity *= fade
            ;(b.ring.material as THREE.MeshBasicMaterial).opacity *= fade
            ;(b.trail.material as THREE.LineBasicMaterial).opacity = fade * 0.4
            
            if (fade <= 0) {
              radar.remove(b.mesh)
              radar.remove(b.ring)
              radar.remove(b.trail)
              blips.splice(idx, 1)
            }
          }
        })

        // Spawn new targets continuously
        if (time - lastSpawn > 1.5 && blips.length < 12) {
          blips.push(createBlip())
          lastSpawn = time
          setTargets(blips.length)
        }

        // Particles
        particles.rotation.y += 0.0005

        // Camera sway
        camera.position.x = Math.sin(time * 0.08) * 0.3
        camera.position.z = 4 + Math.cos(time * 0.06) * 0.2
        camera.lookAt(0, 0, 0)

        renderer.render(scene, camera)
      }
      animate()

      // Events
      const onDown = () => { isMouseDownRef.current = true }
      const onUp = () => { isMouseDownRef.current = false }
      const onMove = (e: MouseEvent) => {
        if (!isMouseDownRef.current) return
        mouseRef.current.targetX += e.movementX * 0.004
        mouseRef.current.targetY += e.movementY * 0.004
        mouseRef.current.targetX = Math.max(-0.6, Math.min(0.6, mouseRef.current.targetX))
        mouseRef.current.targetY = Math.max(-0.6, Math.min(0.6, mouseRef.current.targetY))
      }
      const onTouch = (e: TouchEvent) => {
        if (e.type === 'touchstart') isMouseDownRef.current = true
        if (e.type === 'touchend') isMouseDownRef.current = false
      }
      const onTouchMove = (e: TouchEvent) => {
        if (!isMouseDownRef.current || e.touches.length === 0) return
        const touch = e.touches[0]
        if (!lastTouchRef.current) {
          lastTouchRef.current = { x: touch.clientX, y: touch.clientY }
          return
        }
        const deltaX = touch.clientX - lastTouchRef.current.x
        const deltaY = touch.clientY - lastTouchRef.current.y
        mouseRef.current.targetX += deltaX * 0.004
        mouseRef.current.targetY += deltaY * 0.004
        mouseRef.current.targetX = Math.max(-0.6, Math.min(0.6, mouseRef.current.targetX))
        mouseRef.current.targetY = Math.max(-0.6, Math.min(0.6, mouseRef.current.targetY))
        lastTouchRef.current = { x: touch.clientX, y: touch.clientY }
      }

      container.addEventListener('mousedown', onDown)
      container.addEventListener('mouseup', onUp)
      container.addEventListener('mousemove', onMove)
      container.addEventListener('mouseleave', onUp)
      container.addEventListener('touchstart', onTouch)
      container.addEventListener('touchmove', onTouchMove)
      container.addEventListener('touchend', onTouch)

      const resize = () => {
        const nw = container.clientWidth
        const nh = container.clientHeight
        camera.aspect = nw / nh
        camera.updateProjectionMatrix()
        renderer.setSize(nw, nh)
      }
      window.addEventListener('resize', resize)

      return () => {
        window.removeEventListener('resize', resize)
        container.removeEventListener('mousedown', onDown)
        container.removeEventListener('mouseup', onUp)
        container.removeEventListener('mousemove', onMove)
        container.removeEventListener('mouseleave', onUp)
        container.removeEventListener('touchstart', onTouch)
        container.removeEventListener('touchmove', onTouchMove)
        container.removeEventListener('touchend', onTouch)
        if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
        renderer.dispose()
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      }
    }, 100)

    return () => clearTimeout(init)
  }, [])

  return (
    <div className="w-full space-y-4">
      {/* Sleek Container */}
      <div className="relative rounded-2xl overflow-hidden bg-[#050808] border border-primary/20 shadow-[0_0_80px_-20px_rgba(74,222,128,0.25)]">
        
      {/* Military HUD - Top Left */}
        <div className="absolute top-0 left-0 z-20 p-4 pointer-events-none font-mono text-[9px] text-primary">
          <div className="space-y-1 border border-primary/40 p-2 rounded bg-black/30">
            <div className="text-primary/60">MODE: SEARCH</div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              <span>TX: ACTIVE</span>
            </div>
            <div className="text-primary/70">FREQ: X-BAND</div>
            <div className="text-primary/70">PWR: 25 kW</div>
          </div>
        </div>

        {/* Military HUD - Top Right */}
        <div className="absolute top-0 right-0 z-20 p-4 pointer-events-none font-mono text-[9px] text-primary">
          <div className="space-y-1 border border-primary/40 p-2 rounded bg-black/30 text-right">
            <div className="text-primary/70">RANGE: 150 NM</div>
            <div className="text-primary/70">AZIMUTH: 360°</div>
            <div className="text-primary/60">TRK NUM:</div>
            <div className="text-lg font-bold">{targets.toString().padStart(2, '0')}</div>
          </div>
        </div>

        {/* Canvas */}
        <div
          ref={containerRef}
          className="w-full cursor-grab active:cursor-grabbing"
          style={{ height: '500px' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#050808] z-30">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border border-primary/20" />
                  <div className="absolute inset-0 rounded-full border border-transparent border-t-primary animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary/60" />
                  </div>
                </div>
                <div className="font-mono text-xs text-primary/60 tracking-widest">INITIALIZING</div>
              </div>
            </div>
          )}
        </div>

        {/* Military HUD - Bottom Left */}
        <div className="absolute bottom-16 left-0 z-20 p-4 pointer-events-none font-mono text-[8px] text-primary">
          <div className="space-y-0.5 border border-primary/40 p-2 rounded bg-black/30">
            <div>ANTENNA: ROTATING</div>
            <div>ROT RATE: 12 RPM</div>
            <div>ELEV: 2.5°</div>
            <div className="text-primary/60">SYS READY</div>
          </div>
        </div>

        {/* Military HUD - Bottom Right */}
        <div className="absolute bottom-16 right-0 z-20 p-4 pointer-events-none font-mono text-[8px] text-primary">
          <div className="space-y-0.5 border border-primary/40 p-2 rounded bg-black/30 text-right">
            <div>CLUTTER: LOW</div>
            <div>GAIN: AUTO</div>
            <div>SNR: 28 dB</div>
            <div className="text-primary/60">SYS: ONLINE</div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-0.5 p-1 rounded-full bg-black/50 backdrop-blur border border-primary/20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPaused(!isPaused)}
              className="h-8 w-8 rounded-full hover:bg-primary/10 text-primary/70 hover:text-primary"
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetRotation}
              className="h-8 w-8 rounded-full hover:bg-primary/10 text-primary/70 hover:text-primary"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="h-8 w-8 rounded-full hover:bg-primary/10 text-primary/70 hover:text-primary"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Minimal Badges */}
      <div className="flex items-center justify-center gap-6 text-[8px] font-mono tracking-widest text-primary/50">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          SURVEILLANCE
        </span>
        <span className="w-px h-2.5 bg-primary/20" />
        <span className="flex items-center gap-1.5">
          <Radio className="w-2.5 h-2.5" />
          MILITARY RADAR
        </span>
        <span className="w-px h-2.5 bg-primary/20" />
        <span className="flex items-center gap-1.5">
          <Waves className="w-2.5 h-2.5" />
          X-BAND
        </span>
        <span className="w-px h-2.5 bg-primary/20" />
        <span className="flex items-center gap-1.5">
          <Target className="w-2.5 h-2.5" />
          {targets} TRACKS
        </span>
      </div>
    </div>
  )
}
