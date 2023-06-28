import React, { memo, forwardRef } from 'react'
import { Link } from 'gatsby'
import type { GatsbyLinkProps } from 'gatsby'

import { composeButtonClassnames } from '../button'
import type { ComposeButtonClassnames } from '../button'

export type CustomLinkProps = {
  text?: string
  external?: boolean
} & GatsbyLinkProps<{}> &
  ComposeButtonClassnames

const CustomLink = forwardRef(
  (
    {
      text,
      children = text,
      external,
      primary,
      secondary,
      ghost,
      className,
      baseCn,
      to,
      ...props
    }: CustomLinkProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    const p = {
      className: composeButtonClassnames({
        primary,
        secondary,
        ghost,
        className,
        baseCn,
      }),
      ref,
      ...props,
    }

    return external ? (
      <a href={to} {...p}>
        {children}
      </a>
    ) : (
      <Link to={to} {...p}>
        {children}
      </Link>
    )
  }
)

export default memo(CustomLink)
