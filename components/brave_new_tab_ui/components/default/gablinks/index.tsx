/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  StyledGabLinksItemContainer,
  StyledGabLinksItem,
  StyledGabLinksItemText,
  StyledGabLinksItemDescription
} from './style'

export interface GabLinksProps {
  testId?: string
  children?: React.ReactNode
}

/**
 * Styled container block around stat items used in new tab page
 * @prop {string} testId - the component's id used for testing purposes
 * @prop {React.ReactNode} children - the child elements
 */
export class GabLinksContainer extends React.PureComponent<GabLinksProps, {}> {
  render () {
    const { testId, children } = this.props
    return (
      <StyledGabLinksItemContainer data-test-id={testId}>{children}</StyledGabLinksItemContainer>
    )
  }
}

export interface GabLinksItemProps {
  testId?: string
  text?: string
  description: string
}

/**
 * Individual stat block used in new tab page
 * @prop {string} testId - the component's id used for testing purposes
 * @prop {string} text - descriptive text that goes along the stat
 * @prop {string} description - describes what the counter is showing
 */
export class GabLinksItem extends React.PureComponent<GabLinksItemProps, {}> {
  render () {
    const { testId, text, description } = this.props

    return (
      <StyledGabLinksItem data-test-id={testId}>
          {text && <StyledGabLinksItemText>{text}</StyledGabLinksItemText>}
        <StyledGabLinksItemDescription>{description}</StyledGabLinksItemDescription>
      </StyledGabLinksItem>
    )
  }
}
