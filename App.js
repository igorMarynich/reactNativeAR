import React, { useState } from 'react';
import {
  ViroARSceneNavigator
} from 'react-viro';

import InitialARScene from '././js/HelloWorldSceneAR'

const ViroSample = () => {
  const sharedProps = {
    apiKey:"API_KEY_HERE",
  }
  const UNSET = "AR";
  const defaultNavigatorType = UNSET;

  const [navigatorType, setNavigatorType] = useState(defaultNavigatorType)
  return (
    <>
        {navigatorType === UNSET &&
          <ViroARSceneNavigator
            {...sharedProps}
            initialScene={{scene: InitialARScene}} />}
    </>
  )
}

export default ViroSample
