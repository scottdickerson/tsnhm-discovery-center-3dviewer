import { useEffect } from 'react'

export interface SendToAttractScreenProps {
    timeoutInMs?: number
}

export const SendToAttractScreen = ({
    timeoutInMs = 120000,
}: SendToAttractScreenProps) => {
    const createTimer = () =>
        setTimeout(() => {
            if (typeof window !== 'undefined') window.location.href = '/'
        }, timeoutInMs ?? 65000)

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
