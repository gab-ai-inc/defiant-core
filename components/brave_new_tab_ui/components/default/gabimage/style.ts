/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledGabImageBlock = styled<{}, 'div'>('div')`
  color: #FFFFFF;
  box-sizing: border-box;
  line-height: 1;
  user-select: none;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
`

export const StyledGabImage = styled<{}, 'img'>('img')`
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 200;
  color: inherit;
  display: inline-flex;
`
