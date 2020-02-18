/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { StyledGabSite, StyledGabSites, StyledGabLink } from './style'

class GabSites extends React.PureComponent<{}> {
  constructor (props: {}) {
    super(props)
  }

  render () {
    return (
      <StyledGabSites>
        <StyledGabSite><StyledGabLink href={'https://trends.gab.com'}>Trends</StyledGabLink></StyledGabSite>
        <StyledGabSite><StyledGabLink href={'https://chat.gab.com'}>Chat</StyledGabLink></StyledGabSite>
        <StyledGabSite><StyledGabLink href={'https://gab.com'}>Social</StyledGabLink></StyledGabSite>
      </StyledGabSites>
    )
  }
}

export default GabSites
