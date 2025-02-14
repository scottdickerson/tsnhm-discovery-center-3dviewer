import { useEffect } from 'react'

export interface SendToAttractScreenProps {
    timeoutInMs?: number
}

export const SendToAttractScreen = ({
    timeoutInMs = 60000,
}: SendToAttractScreenProps) => {
    const createTimer = () =>
        setTimeout(() => {
            if (typeof window !== 'undefined') window.location.href = '/'
        }, timeoutInMs)

    let redirectTimer = createTimer()

    const clickListener = () => {
        clearTimeout(redirectTimer)
        redirectTimer = createTimer()
    }

    useEffect(() => {
        window.addEventListener('mousedown', clickListener)
        window.addEventListener('mousemove', clickListener)
        window.addEventListener('touchstart', clickListener)
        window.addEventListener('touchmove', clickListener)
        return () => {
            window.removeEventListener('mousedown', clickListener)
            window.removeEventListener('mousemove', clickListener)
            window.removeEventListener('touchstart', clickListener)
            window.removeEventListener('touchmove', clickListener)
            clearTimeout(redirectTimer)
        }
    })

    return null
}
