/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { StyledGabAdsBox, StyledGabAdsSpan, StyledGabAdsLink } from './style'

class GabAds extends React.PureComponent<{}> {
  constructor (props: {}) {
    super(props)
  }

  render () {
    return (
      <StyledGabAdsBox>
        <StyledGabAdsSpan>
          Gab's free speech software is user supported, you can help by&nbsp;
          <StyledGabAdsLink href={'https://pro.gab.com'}>upgrading to Pro</StyledGabAdsLink>
          , purchasing&nbsp;
          <StyledGabAdsLink href={'https://shop.dissenter.com'}>Dissenter merch</StyledGabAdsLink>
          , or by&nbsp;
          <StyledGabAdsLink href={'https://shop.dissenter.com/category/donations'}>donating</StyledGabAdsLink>
          .
        </StyledGabAdsSpan>
      </StyledGabAdsBox>
    )
  }
}

export default GabAds
