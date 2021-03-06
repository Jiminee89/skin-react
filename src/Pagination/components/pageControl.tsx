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
import classNames from 'classnames';
import {Icon} from '../../Icon';
import {getFakeTag} from '../../skin-utils';
import * as Skin from '../../skin';

export interface PageControlProps<T> extends Skin.Disabled, Skin.Next, React.HTMLProps<T> {}
export const PageControl = ({isNext, disabled, ...props}: PageControlProps<HTMLButtonElement | HTMLAnchorElement>) => {
  const className = classNames(`pagination__${isNext ? 'next' : 'previous'}`, props.className);
  const tag = getFakeTag(!!props.href, 'a', 'button');
  const HTMLProps = {
    ['aria-disabled']: disabled,
    children: isNext ? <Icon type="pagination-next" /> : <Icon type="pagination-prev" />,
    ...props,
    className
  };
  return React.createElement(tag, HTMLProps);
};
