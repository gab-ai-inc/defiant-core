// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

import * as React from 'react'

// Components
import Stats from './stats'
import TopSitesGrid from './gridSites'
import FooterInfo from './footerInfo'
import SiteRemovalNotification from './notification'
import {
  ClockWidget as Clock
} from '../../components/default'
import * as Page from '../../components/default/page'
//import BrandedWallpaperLogo from '../../components/default/brandedWallpaper/logo'

// Helpers
import arrayMove from 'array-move'
import { isGridSitePinned } from '../../helpers/newTabUtils'

// Types
import { SortEnd } from 'react-sortable-hoc'
import * as newTabActions from '../../actions/new_tab_actions'
import * as gridSitesActions from '../../actions/grid_sites_actions'
import { getLocale } from '../../../common/locale'

// NTP features
import Settings from './settings'

interface Props {
  newTabData: NewTab.State
  gridSitesData: NewTab.GridSitesState
  actions: typeof newTabActions & typeof gridSitesActions
  saveShowBackgroundImage: (value: boolean) => void
  saveShowClock: (value: boolean) => void
  saveShowTopSites: (value: boolean) => void
  saveShowStats: (value: boolean) => void
}

interface State {
  onlyAnonWallet: boolean
  showSettingsMenu: boolean
  backgroundHasLoaded: boolean
  focusMoreCards: boolean
}

function GetBackgroundImageSrc (props: Props) {
  if (!props.newTabData.showBackgroundImage &&
      (!props.newTabData.brandedWallpaperData || props.newTabData.brandedWallpaperData.isSponsored)) {
    return undefined
  }
  /*
  if (props.newTabData.brandedWallpaperData) {
    const wallpaperData = props.newTabData.brandedWallpaperData
    if (wallpaperData && wallpaperData.wallpaperImageUrl) {
      return wallpaperData.wallpaperImageUrl
    }
  }
  */
  if (props.newTabData.backgroundImage && props.newTabData.backgroundImage.source) {
    return props.newTabData.backgroundImage.source
  }
  return undefined
}

class NewTabPage extends React.Component<Props, State> {
  state = {
    onlyAnonWallet: false,
    showSettingsMenu: false,
    backgroundHasLoaded: false,
    focusMoreCards: false
  }
  imageSource?: string = undefined

  componentDidMount () {
    // if a notification is open at component mounting time, close it
    this.props.actions.showGridSiteRemovedNotification(false)
    this.imageSource = GetBackgroundImageSrc(this.props)
    this.trackCachedImage()
  }

  componentDidUpdate (prevProps: Props) {
    const oldImageSource = GetBackgroundImageSrc(prevProps)
    const newImageSource = GetBackgroundImageSrc(this.props)
    this.imageSource = newImageSource
    if (newImageSource && oldImageSource !== newImageSource) {
      this.trackCachedImage()
    }
    if (oldImageSource &&
      !newImageSource) {
      // reset loaded state
      this.setState({ backgroundHasLoaded: false })
    }

  }

  trackCachedImage () {
    if (this.imageSource) {
      const imgCache = new Image()
      imgCache.src = this.imageSource
      console.timeStamp('image start loading...')
      imgCache.onload = () => {
        console.timeStamp('image loaded')
        this.setState({
          backgroundHasLoaded: true
        })
      }
    }
  }

  onSortEnd = ({ oldIndex, newIndex }: SortEnd) => {
    const { gridSitesData } = this.props
    // Do not update topsites order if the drag
    // destination is a pinned tile
    const gridSite = gridSitesData.gridSites[newIndex]
    if (!gridSite || isGridSitePinned(gridSite)) {
      return
    }
    const items = arrayMove(gridSitesData.gridSites, oldIndex, newIndex)
    this.props.actions.gridSitesDataUpdated(items)
  }

  toggleShowBackgroundImage = () => {
    this.props.saveShowBackgroundImage(
      !this.props.newTabData.showBackgroundImage
    )
  }

  toggleShowClock = () => {
    this.props.saveShowClock(
      !this.props.newTabData.showClock
    )
  }

  toggleShowStats = () => {
    this.props.saveShowStats(
      !this.props.newTabData.showStats
    )
  }

  toggleShowTopSites = () => {
    this.props.saveShowTopSites(
      !this.props.newTabData.showTopSites
    )
  }

  closeSettings = () => {
    this.setState({ showSettingsMenu: false })
  }

  toggleSettings = () => {
    if (this.state.showSettingsMenu) {
      this.setState({ focusMoreCards: false })
    }
    this.setState({
      showSettingsMenu: !this.state.showSettingsMenu
    })
  }

  render () {
    const { newTabData, gridSitesData, actions } = this.props
    const { showSettingsMenu } = this.state

    if (!newTabData) {
      return null
    }

    const hasImage = this.imageSource !== undefined
    const showTopSites = !!this.props.gridSitesData.gridSites.length && newTabData.showTopSites

    return (
      <Page.App dataIsReady={newTabData.initialDataLoaded}>
        <Page.PosterBackground
          hasImage={hasImage}
          imageHasLoaded={this.state.backgroundHasLoaded}
        >
          {hasImage &&
            <img src={this.imageSource} />
          }
        </Page.PosterBackground>
        {hasImage &&
          <Page.Gradient
            imageHasLoaded={this.state.backgroundHasLoaded}
          />
        }
        <Page.Page
            showClock={newTabData.showClock}
            showStats={newTabData.showStats}
            showRewards={false}
            showTogether={false}
            showBinance={false}
            showTopSites={showTopSites}
            showAddCard={false}
            showBrandedWallpaper={true}
        >
          {newTabData.showStats &&
          <Page.GridItemStats>
            <Stats
              widgetTitle={getLocale('statsTitle')}
              textDirection={newTabData.textDirection}
              stats={newTabData.stats}
              hideWidget={this.toggleShowStats}
              menuPosition={'right'}
            />
          </Page.GridItemStats>
          }
          {newTabData.showClock &&
          <Page.GridItemClock>
            <Clock
              widgetTitle={getLocale('clockTitle')}
              textDirection={newTabData.textDirection}
              hideWidget={this.toggleShowClock}
              menuPosition={'left'}
            />
          </Page.GridItemClock>
          }
          {
            showTopSites
              ? (
              <Page.GridItemTopSites>
                <TopSitesGrid
                  actions={actions}
                  widgetTitle={getLocale('topSitesTitle')}
                  gridSites={gridSitesData.gridSites}
                  menuPosition={'right'}
                  hideWidget={this.toggleShowTopSites}
                  textDirection={newTabData.textDirection}
                />
              </Page.GridItemTopSites>
              ) : null
          }
          {
            gridSitesData.shouldShowSiteRemovedNotification
            ? (
            <Page.GridItemNotification>
              <SiteRemovalNotification actions={actions} />
            </Page.GridItemNotification>
            ) : null
          }
          <Page.Footer>
            <Page.FooterContent>            
            <FooterInfo
              textDirection={newTabData.textDirection}
              onClickSettings={this.toggleSettings}
              backgroundImageInfo={newTabData.backgroundImage}
              showPhotoInfo={false}
            />
            </Page.FooterContent>
          </Page.Footer>
        </Page.Page>
        <Settings
          textDirection={newTabData.textDirection}
          showSettingsMenu={showSettingsMenu}
          onClickOutside={this.closeSettings}
          toggleShowBackgroundImage={this.toggleShowBackgroundImage}
          toggleShowClock={this.toggleShowClock}
          toggleShowStats={this.toggleShowStats}
          toggleShowTopSites={this.toggleShowTopSites}
          showBackgroundImage={newTabData.showBackgroundImage}
          showClock={newTabData.showClock}
          showStats={newTabData.showStats}
          showTopSites={newTabData.showTopSites}
        />
      </Page.App>
    )
  }
}

export default NewTabPage
