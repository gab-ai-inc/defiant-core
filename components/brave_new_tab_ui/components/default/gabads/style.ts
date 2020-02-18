/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledGabAdsBox = styled<{}, 'div'>('div')`
  color: #FFFFFF;
  box-sizing: border-box;
  user-select: none;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  font-family: ${p => p.theme.fontFamily.heading};
  padding-top: 10px;
  padding-left: 30px;
`

export const StyledGabAdsSpan = styled<{}, 'span'>('span')`
  font-size: 14px;
  font-weight: 100;
  display: block;
  color: inherit;
  text-decoration: none;
  line-height: 1.6;
`

export const StyledGabAdsLink = styled<{}, 'a'>('a')`
  color: #00d177;
`