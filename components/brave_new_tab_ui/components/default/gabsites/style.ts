/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledGabSites = styled<{}, 'div'>('div')`
  color: #FFFFFF;
  box-sizing: border-box;
  line-height: 1;
  user-select: none;
  display: inline-flex;
  -webkit-font-smoothing: antialiased;
  font-family: ${p => p.theme.fontFamily.heading};
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
`

export const StyledGabSite = styled<{}, 'span'>('span')`
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 200;
  color: inherit;
  display: inline-flex;
  text-decoration: none;
  margin-right: 30px;
`

export const StyledGabLink = styled<{}, 'a'>('a')`
  color: #FFFFFF;
`