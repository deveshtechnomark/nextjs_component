import React, { FC, useCallback, useEffect } from 'react'
import { Toast } from './components'
import { useToast } from './hooks'
import { emitter, toastDispatcher } from './utils'
import { Events, Position } from './types'
// import './ToastContainer.css'
import classes from './styles.module.css'

interface IToastContainer {
  position?: Position
  delay?: number
}

const ToastContainer: FC<IToastContainer> = ({
  position = 'bottom-left',
  delay
}) => {
  const { toasts, dispatch } = useToast()

  useEffect(() => {
    toastDispatcher({ dispatch, delay })

    return () => {
      emitter.off()
    }
  }, [dispatch, delay])

  const onClose = useCallback((id: string) => {
    emitter.emit(Events.HIDE, id)
  }, [])

  return (
    <div
      className={`${classes.toastContainer} ${
        position === 'top-right'
          ? classes.top_right
          : position === 'top-left'
          ? classes.top_left
          : position === 'top-center'
          ? classes.top_center
          : position === 'bottom-left'
          ? classes.bottom_left
          : position === 'bottom-center'
          ? classes.bottom_center
          : position === 'bottom-right'
          ? classes.bottom_right
          : 'bottom-left'
      }`}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  )
}

export default ToastContainer
