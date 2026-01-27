// WebXR Type Definitions
declare global {
  interface Navigator {
    xr?: XRSystem
  }

  interface XRSystem {
    requestSession(mode: string, options?: XRSessionInit): Promise<XRSession>
    isSessionSupported(mode: string): Promise<boolean>
  }

  interface XRSessionInit {
    requiredFeatures?: string[]
    optionalFeatures?: string[]
    domOverlay?: { root: Element }
  }

  interface XRSession {
    requestReferenceSpace(type: string): Promise<XRReferenceSpace>
    requestAnimationFrame(callback: XRFrameRequestCallback): number
    end(): Promise<void>
    inputSources: XRInputSource[]
  }

  interface XRReferenceSpace {
    getOffsetReferenceSpace(transform: XRRigidTransform): XRReferenceSpace
  }

  interface XRFrame {
    session: XRSession
    getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | null
    getPose(space: XRSpace, baseSpace: XRSpace): XRPose | null
  }

  interface XRViewerPose extends XRPose {
    views: XRView[]
  }

  interface XRPose {
    transform: XRRigidTransform
    emulatedPosition: boolean
  }

  interface XRView {
    eye: 'left' | 'right' | 'none'
    projectionMatrix: Float32Array
    transform: XRRigidTransform
  }

  interface XRRigidTransform {
    position: DOMPointReadOnly
    orientation: DOMPointReadOnly
    matrix: Float32Array
    inverse: XRRigidTransform
  }

  interface DOMPointReadOnly {
    x: number
    y: number
    z: number
    w: number
  }

  interface XRInputSource {
    handedness: 'left' | 'right' | 'none'
    targetRayMode: 'gaze' | 'tracked-pointer' | 'screen'
    targetRaySpace: XRSpace
    gripSpace?: XRSpace
    gamepad?: Gamepad
    profiles: string[]
  }

  interface XRSpace {
    // Intentionally empty - base interface
  }

  type XRFrameRequestCallback = (time: number, frame: XRFrame) => void
}

export {}
