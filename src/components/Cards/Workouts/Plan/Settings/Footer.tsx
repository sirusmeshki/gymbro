'use client'

import { useReadLocalStorage } from 'usehooks-ts'

const Footer = () => {
    let description = useReadLocalStorage('desc')

    return (
        <footer>
            <p className="text-sm">
                <span className="font-bold">توضیحات: </span>
                <span className="font-light">
                    <>{description ? description : ''}</>
                </span>
            </p>
        </footer>
    )
}

export default Footer
