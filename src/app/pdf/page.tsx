'use client'

import {
    Document,
    Page,
    Font,
    PDFViewer,
    StyleSheet,
} from '@react-pdf/renderer'

import Header from '@/components/PDF/Header'
import PersonalInfo from '@/components/PDF/PersonalInfo'
import Workouts from '@/components/PDF/Workouts'
import Footer from '@/components/PDF/Footer'

//Font setup
Font.register({
    family: 'DanaFaNum',
    fonts: [
        { fontWeight: 300, src: '/font/DanaFaNum-Light.woff' },
        { fontWeight: 600, src: '/font/DanaFaNum-DemiBold.woff' },
        { fontWeight: 700, src: '/font/DanaFaNum-Bold.woff' },
        { fontWeight: 900, src: '/font/DanaFaNum-Black.woff' },
        { fontWeight: 300, src: '/font/DanaFaNum-Light.woff2' },
        { fontWeight: 600, src: '/font/DanaFaNum-DemiBold.woff2' },
        { fontWeight: 700, src: '/font/DanaFaNum-Bold.woff2' },
        { fontWeight: 900, src: '/font/DanaFaNum-Black.woff2' },
    ],
})

const styles = StyleSheet.create({
    page: {
        fontFamily: 'DanaFaNum',
        display: 'flex',
        gap: '16pt',
        padding: '10pt',
    },
})

const MyDoc = () => {
    return (
        // <PDFViewer>
        <Document>
            <Page size="A4" style={styles.page}>
                <Header />
                <PersonalInfo />
                <Workouts />
                <Footer />
            </Page>
        </Document>
        // </PDFViewer>
    )
}

export default MyDoc
