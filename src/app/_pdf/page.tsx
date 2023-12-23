'use client'

import { Document, Page, Font } from '@react-pdf/renderer'

import { tw } from '@/components/PDF/utils'

import Header from '@/components/PDF/Header'
import PersonalInfo from '@/components/PDF/PersonalInfo'
import Workouts from '@/components/PDF/Workouts'
import Footer from '@/components/PDF/Footer'

//Font setup
Font.register({
    family: 'DanaFaNum',
    fonts: [
        { fontWeight: 300, src: '/fonts/DanaFaNum-Light.ttf' },
        { fontWeight: 600, src: '/fonts/DanaFaNum-DemiBold.ttf' },
        { fontWeight: 700, src: '/fonts/DanaFaNum-Bold.ttf' },
        { fontWeight: 900, src: '/fonts/DanaFaNum-Black.ttf' },
    ],
})

const MyDoc = () => {
    return (
        <Document>
            <Page size="A4" style={tw('flex flex-col gap-6 p-4 font-sans')}>
                <Header />
                <PersonalInfo />
                <Workouts />
                <Footer />
            </Page>
        </Document>
    )
}

export default MyDoc
