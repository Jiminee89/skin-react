/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import Icon from './components/icon';
import IconSymbolsComponent from '-!svg-react-loader!@ebay/skin/dist/svg/ds6/icons.svg';

export const IconSymbols = (props) => (
  <span style={{display: 'none'}} hidden {...props}>
    <IconSymbolsComponent />
  </span>
);
export {Icon} from './components/icon';
export {IconType} from './components/iconType';
export default Icon;
