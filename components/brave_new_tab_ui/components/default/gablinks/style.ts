/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'brave-ui/theme'

export const StyledGabLinksItemContainer = styled<{}, 'ul'>('ul')`
  -webkit-font-smoothing: antialiased;
  display: block;
  align: bottom;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  width:420px;
`

export const StyledGabLinksItem = styled<{}, 'li'>('li')`
  list-style-type: none;
  font-size: inherit;
  font-family: inherit;
  margin: 10px 16px;

  &:first-child {
    color: #FB542B;
  }
  &:nth-child(2) {
    color: #A0A5EB;
  }
  &:last-child {
    color: #FFFFFF;
    margin-right: 0;
  }
`

export const StyledGabLinksItemText = styled<{}, 'span'>('span')`
  font-size: 24px;
  font-family: ${p => p.theme.fontFamily.heading};
  margin-left: 4px;
  display: inline;
  letter-spacing: 0;
`

export const StyledGabLinksItemDescription = styled<{}, 'div'>('div')`
  font-size: 16px;
  font-weight: 500;
  color: #DDDDDD;
  margin-top: 8px;
  font-family: ${p => p.theme.fontFamily.heading};
`
