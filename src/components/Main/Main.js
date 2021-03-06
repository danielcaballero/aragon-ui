import React from 'react'
import PropTypes from 'prop-types'
import { ensureTrailingSlash } from '../../utils/url'
import { PublicUrl } from '../../providers/PublicUrl'
import { Root } from '../../providers/Root'
import { Viewport } from '../../providers/Viewport'
import BaseStyles from '../BaseStyles/BaseStyles'
import { ToastHub } from '../ToastHub/ToastHub'

const Main = ({ children, assetsUrl, legacyFonts }) => (
  <Root.Provider>
    <Viewport.Provider>
      <PublicUrl.Provider url={ensureTrailingSlash(assetsUrl)}>
        <BaseStyles enableLegacyFonts={legacyFonts} />
        <ToastHub>{children}</ToastHub>
      </PublicUrl.Provider>
    </Viewport.Provider>
  </Root.Provider>
)

Main.propTypes = {
  children: PropTypes.node,
  legacyFonts: PropTypes.bool,
  assetsUrl: PropTypes.string,
}
Main.defaultProps = {
  legacyFonts: false,
  assetsUrl: '/aragon-ui/',
}

export default Main
