'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'
import { AlertCircle, Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export function BrandARViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const logoRef = useRef<THREE.Mesh | null>(null)
  const [isSupported, setIsSupported] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check WebXR support
    if (!navigator.xr) {
      setIsSupported(false)
      setIsLoading(false)
      return
    }

    if (!containerRef.current) {
      setIsLoading(false)
      return
    }

    // Wait for next frame to ensure dimensions are available
    const timer = setTimeout(() => {
      if (!containerRef.current) return

      try {
        // Get container dimensions
        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight
        
        if (width === 0 || height === 0) {
          throw new Error('Container has no dimensions')
        }
        
        // Scene setup
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x09090b)
        sceneRef.current = scene

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
          75,
          width / height,
          0.1,
          1000
        )
        camera.position.z = 3
        cameraRef.current = camera

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(window.devicePixelRatio)
        containerRef.current.appendChild(renderer.domElement)
        rendererRef.current = renderer

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0x4ade80, 1.2)
        pointLight.position.set(5, 5, 5)
        scene.add(pointLight)

        const pointLight2 = new THREE.PointLight(0x4ade80, 0.6)
        pointLight2.position.set(-5, -5, 5)
        scene.add(pointLight2)

        // Load logo texture and create 3D model
        const textureLoader = new THREE.TextureLoader()
        textureLoader.load('/images/gp.jpg', (texture) => {
          // Create a plane to display the logo with 3D effects
          const geometry = new THREE.PlaneGeometry(2, 1.2)
          
          const material = new THREE.MeshPhongMaterial({
            map: texture,
            emissive: 0x4ade80,
            emissiveIntensity: 0.1,
            shininess: 100,
          })
          
          const mesh = new THREE.Mesh(geometry, material)
          logoRef.current = mesh
          scene.add(mesh)

          // Add a glowing frame around the logo
          const frameGeometry = new THREE.BoxGeometry(2.2, 1.4, 0.05)
          const frameMaterial = new THREE.MeshPhongMaterial({
            color: 0x4ade80,
            emissive: 0x4ade80,
            emissiveIntensity: 0.3,
          })
          const frame = new THREE.Mesh(frameGeometry, frameMaterial)
          frame.position.z = -0.1
          scene.add(frame)

          setIsLoading(false)
        })

        // Animation loop
        let animationId: number

        const animate = () => {
          animationId = requestAnimationFrame(animate)

          if (logoRef.current) {
            logoRef.current.rotation.x += 0.003
            logoRef.current.rotation.y += 0.005
            logoRef.current.rotation.z += 0.001

            // Scale pulse effect
            const scale = 1 + Math.sin(Date.now() * 0.002) * 0.08
            logoRef.current.scale.set(scale, scale, scale)
          }

          renderer.render(scene, camera)
        }

        animate()

        // Handle window resize
        const handleResize = () => {
          if (!containerRef.current) return
          const width = containerRef.current.clientWidth
          const height = containerRef.current.clientHeight
          camera.aspect = width / height
          camera.updateProjectionMatrix()
          renderer.setSize(width, height)
        }

        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
          cancelAnimationFrame(animationId)
          clearTimeout(timer)
          renderer.dispose()
          containerRef.current?.removeChild(renderer.domElement)
        }
      } catch (err) {
        console.error('AR Scene initialization error:', err)
        setError(`Failed to initialize AR scene: ${err instanceof Error ? err.message : 'Unknown error'}`)
        setIsLoading(false)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  const handleEnterAR = async () => {
    if (!navigator.xr) return

    try {
      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.body },
      })

      // AR session handling
      const baseSpace = await session.requestReferenceSpace('viewer')
      const controller = session.inputSources[0]

      // Simple AR rendering loop
      const onFrame = (time: number, frame: XRFrame) => {
        if (rendererRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current!, cameraRef.current)
        }
        session.requestAnimationFrame(onFrame)
      }

      session.requestAnimationFrame(onFrame)
    } catch (err) {
      setError('AR session not available on this device')
    }
  }

  return (
    <div className="w-full flex flex-col">
      <div
        ref={containerRef}
        className="w-full bg-linear-to-b from-slate-950 via-slate-900 to-black rounded-lg overflow-hidden relative border border-border/30"
        style={{ height: '450px', minHeight: '450px' }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 animate-spin text-green-500" />
              <p className="text-sm text-gray-300">Initializing AR Scene...</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-3">
        {!isSupported && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              WebXR is not supported on your device. You can still view the 3D scene above.
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isSupported && !error && (
          <Button
            onClick={handleEnterAR}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            disabled={isLoading}
          >
            Enter AR Experience
          </Button>
        )}
      </div>
    </div>
  )
}
