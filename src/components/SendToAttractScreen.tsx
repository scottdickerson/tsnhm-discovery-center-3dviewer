import { useEffect } from 'react'

export interface SendToAttractScreenProps {
    timeoutInMs?: number
}

export const SendToAttractScreen = ({
    timeoutInMs = 30000,
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
        return () => {
            window.removeEventListener('mousedown', clickListener)
            clearTimeout(redirectTimer)
        }
    })

    return null
}
