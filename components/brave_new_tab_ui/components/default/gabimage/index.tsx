/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { StyledGabImageBlock } from './style' // StyledGabImage

class GabImage extends React.PureComponent<{}> {
  constructor (props: {}) {
    super(props)
  }

  render () {
    return (
      <StyledGabImageBlock>
        {/*<StyledGabImage src={'https://www.dailydebate.com/wp-content/uploads/2018/01/complicit.png'}></StyledGabImage>*/}
      </StyledGabImageBlock>
    )
  }
}

export default GabImage
