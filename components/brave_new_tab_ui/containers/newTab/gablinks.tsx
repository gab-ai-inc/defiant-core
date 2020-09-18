/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { GabLinksContainer, GabLinksItem, createWidget } from '../../components/default'


interface Props {
}

class GabLinks extends React.Component<Props, {}> {

  render () {

    return (
      <GabLinksContainer>
        <GabLinksItem
          description={"Help us defend liberty, go GabPRO at "}          
        />
      </GabLinksContainer>
    )
  }
}

export default createWidget(GabLinks)
