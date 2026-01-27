'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChefHat, Wine, UtensilsCrossed, Loader2 } from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  price: string
  description: string
  color: string
  icon: React.ReactNode
}

interface ARMenuViewerProps {
  items?: MenuItem[]
}

export function ARMenuViewer({ items = defaultMenuItems }: ARMenuViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(items[0] || null)
  const [isLoading, setIsLoading] = useState(true)
  const modelRefs = useRef<Map<string, THREE.Group>>(new Map())

  useEffect(() => {
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
        scene.fog = new THREE.Fog(0x09090b, 10, 15)

        const camera = new THREE.PerspectiveCamera(
          75,
          width / height,
          0.1,
          1000
        )
        camera.position.z = 2.5

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(window.devicePixelRatio)
        containerRef.current.appendChild(renderer.domElement)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
      scene.add(ambientLight)

      const pointLight = new THREE.PointLight(0xffffff, 1)
      pointLight.position.set(5, 5, 5)
      scene.add(pointLight)

      // Create models for each menu item
      items.forEach((item) => {
        const group = createMenuItemModel(item)
        modelRefs.current.set(item.id, group)
        scene.add(group)
        group.visible = item.id === selectedItem?.id
      })

      // Animation loop
      let animationId: number
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        modelRefs.current.forEach((group) => {
          if (group.visible) {
            group.rotation.x += 0.005
            group.rotation.y += 0.008
            group.position.y = Math.sin(Date.now() * 0.001) * 0.3
          }
        })

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current) return
        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }

      window.addEventListener('resize', handleResize)
      setIsLoading(false)

      return () => {
        window.removeEventListener('resize', handleResize)
        cancelAnimationFrame(animationId)
        clearTimeout(timer)
        renderer.dispose()
        containerRef.current?.removeChild(renderer.domElement)
      }
      } catch (err) {
        console.error('Menu viewer initialization error:', err)
        setIsLoading(false)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  // Update visible model when selection changes
  useEffect(() => {
    modelRefs.current.forEach((group, id) => {
      group.visible = id === selectedItem?.id
    })
  }, [selectedItem])

  return (
    <div className="w-full space-y-4">
      <div
        ref={containerRef}
        className="w-full bg-linear-to-br from-slate-950 via-slate-900 to-black rounded-lg overflow-hidden border border-border/30"
        style={{ height: '400px' }}
      >
        {isLoading && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Loading AR Menu...</p>
            </div>
          </div>
        )}
      </div>

      <Tabs value={selectedItem?.id} onValueChange={(id) => setSelectedItem(items.find((i) => i.id === id)!)}>
        <TabsList className="grid w-full grid-cols-3">
          {items.map((item) => (
            <TabsTrigger key={item.id} value={item.id} className="text-xs">
              <span className="mr-1">{item.icon}</span>
              <span className="hidden sm:inline">{item.name.split(' ')[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {items.map((item) => (
          <TabsContent key={item.id} value={item.id}>
            <Card className="border-border/50 hover:border-primary/30 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.name}
                </CardTitle>
                <CardDescription>{item.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function createMenuItemModel(item: MenuItem): THREE.Group {
  const group = new THREE.Group()
  const color = parseInt(item.color.replace('#', ''), 16)

  switch (item.id) {
    case 'appetizer':
      // Sphere with bumps for appetizer
      const geometry1 = new THREE.IcosahedronGeometry(0.8, 4)
      const material1 = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.2,
      })
      const mesh1 = new THREE.Mesh(geometry1, material1)
      group.add(mesh1)
      break

    case 'beverage':
      // Cylinder for drink glass
      const geometry2 = new THREE.CylinderGeometry(0.5, 0.6, 1.2, 8)
      const material2 = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.15,
        transparent: true,
        opacity: 0.9,
      })
      const mesh2 = new THREE.Mesh(geometry2, material2)
      group.add(mesh2)

      const topGeometry = new THREE.CylinderGeometry(0.55, 0.5, 0.1, 8)
      const topMesh = new THREE.Mesh(topGeometry, material2)
      topMesh.position.y = 0.7
      group.add(topMesh)
      break

    case 'main':
      // Box for main course
      const geometry3 = new THREE.BoxGeometry(1.2, 0.8, 1)
      const material3 = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.25,
      })
      const mesh3 = new THREE.Mesh(geometry3, material3)
      group.add(mesh3)

      // Top accent
      const topGeometry3 = new THREE.ConeGeometry(0.7, 0.4, 8)
      const topMesh3 = new THREE.Mesh(topGeometry3, material3)
      topMesh3.position.y = 0.5
      group.add(topMesh3)
      break
  }

  // Add particle effects
  const particleCount = 20
  const particles = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 3
    positions[i + 1] = (Math.random() - 0.5) * 3
    positions[i + 2] = (Math.random() - 0.5) * 3
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const particleMaterial = new THREE.PointsMaterial({
    color: color,
    size: 0.05,
    sizeAttenuation: true,
  })

  const particleSystem = new THREE.Points(particles, particleMaterial)
  group.add(particleSystem)

  return group
}

const defaultMenuItems: MenuItem[] = [
  {
    id: 'appetizer',
    name: 'Appetizers',
    price: '$5-$12',
    description: 'Delicious starters to begin your culinary journey. From crispy spring rolls to fresh bruschetta.',
    color: '#ff6b6b',
    icon: <UtensilsCrossed className="w-4 h-4" />,
  },
  {
    id: 'beverage',
    name: 'Beverages',
    price: '$3-$8',
    description: 'Refreshing drinks and premium selections. Handcrafted cocktails and fine wines available.',
    color: '#4ecdc4',
    icon: <Wine className="w-4 h-4" />,
  },
  {
    id: 'main',
    name: 'Main Course',
    price: '$15-$35',
    description: 'Exquisite main dishes prepared by our award-winning chefs. Sourced with finest ingredients.',
    color: '#ffe66d',
    icon: <ChefHat className="w-4 h-4" />,
  },
]
