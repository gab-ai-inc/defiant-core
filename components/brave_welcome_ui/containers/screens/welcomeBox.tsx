/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import { Content, Title, Paragraph, PrimaryButton } from '../../components'

// Shared components
import { ArrowRightIcon } from 'brave-ui/components/icons'

// Images
import { WelcomeLionImage } from '../../components/images'

// Utils
import { getLocale } from '../../../common/locale'

interface Props {
  index: number
  currentScreen: number
  onClick: () => void
}

export default class ThemingBox extends React.PureComponent<Props, {}> {
  render () {
    const { index, currentScreen, onClick } = this.props
    return (
      <Content
        zIndex={index}
        active={currentScreen === index}
        screenPosition={'1' + (index + 1) + '0%'}
        isPrevious={index <= currentScreen}
      >
        <WelcomeLionImage />
        <Title>Welcome to the Free Speech Internet</Title>
        <Paragraph>Dissenter is a user-rights focused web browser, which blocks ads and prevents Silicon Valley tech giants from tracking you.  It's fast because we've taken the upstream browser and removed unnecessary features and tracking systems.  Ready to speak freely?</Paragraph>
        <PrimaryButton
          level='primary'
          type='accent'
          size='large'
          text={getLocale('letsGo')}
          onClick={onClick}
          icon={{ position: 'after', image: <ArrowRightIcon /> }}
        />
      </Content>
    )
  }
}
