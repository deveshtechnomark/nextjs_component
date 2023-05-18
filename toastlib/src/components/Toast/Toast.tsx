import React, { FC } from 'react'
import { Close } from '../Icons'
import { Toast as ToastType } from '../../types'
import { toastIcon as Icon } from './ToastIcon'
import classes from '../../styles.module.css'

export interface IToast extends ToastType {
  onClose: (id: string) => void
}

const Toast: FC<IToast> = ({ id, content, type, onClose }) => {
  return (
    <div
      className={`${classes.toast} ${
        type === 'default'
          ? `${classes.default}`
          : type === 'success'
          ? `${classes.success}`
          : type === 'error'
          ? `${classes.error}`
          : type === 'info'
          ? `${classes.info}`
          : type === 'warning'
          ? `${classes.warning}`
          : ''
      }`}
    >
      <div className={classes.icon}>{Icon({ type })}</div>
      <div className={classes.content}>
        <p>{content}</p>
      </div>
      <div className={classes.close} onClick={() => onClose(id)}>
        <Close />
      </div>
    </div>
  )
}

export default Toast
