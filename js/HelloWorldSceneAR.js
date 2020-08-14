import React from 'react';

import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroQuad,
  ViroNode,
} from 'react-viro';

const  HelloWorldSceneAR = () => {

    return (
      <ViroARScene>

        <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0,-1,-.2]}
          position={[0, 3, 1]}
          color="#aaaaaa"
          castsShadow={true}/>

        <ViroNode position={[-.5, -.5, -.5]} dragType="FixedToWorld" onDrag={()=>{}}>

          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0,-1,-.2]}
            position={[0, 3, 0]}
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={2}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7} />

          <Viro3DObject
            source={require('./res/Frau.obj')}
            type="OBJ"
            position={[0, .2, 0]}
            scale={[.2, .2, .2]}
            lightReceivingBitMask={3}
            shadowCastingBitMask={2}
            transformBehaviors={['billboardY']}
           />
          <ViroQuad
            rotation={[-90,0,0]}
            width={.5} height={.5}
            arShadowReceiver={true}
            lightReceivingBitMask={2} />

        </ViroNode>

      </ViroARScene>
    )
}

export default HelloWorldSceneAR;
