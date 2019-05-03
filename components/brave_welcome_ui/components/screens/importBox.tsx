/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import { Content, Title, Paragraph } from 'dissenter-ui/features/welcome'

// Shared components
import { Button } from 'dissenter-ui'

// Images
//import { WelcomeImportImage } from 'dissenter-ui/features/welcome/images'
import { WelcomeDissenterImage } from 'dissenter-ui/features/welcome/images'

// Utils
import { getLocale } from '../../../common/locale'

interface Props {
  index: number
  currentScreen: number
  onClick: () => void
}

export default class ImportBox extends React.PureComponent<Props, {}> {
  render () {
    const { index, currentScreen, onClick } = this.props
    return (
      <Content
        zIndex={index}
        active={index === currentScreen}
        screenPosition={'1' + (index + 1) + '0%'}
        isPrevious={index <= currentScreen}
      >
        <WelcomeDissenterImage />
        <Title>{getLocale('importFromAnotherBrowser')}</Title>
        <Paragraph>{getLocale('setupImport')}</Paragraph>
          <Button
            level='primary'
            type='accent'
            size='large'
            text={getLocale('import')}
            onClick={onClick}
          />
      </Content>
    )
  }
}
