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
        { fontWeight: 300, src: '/fonts/DanaFaNum-Light.ttf' },
        { fontWeight: 600, src: '/fonts/DanaFaNum-DemiBold.ttf' },
        { fontWeight: 700, src: '/fonts/DanaFaNum-Bold.ttf' },
        { fontWeight: 900, src: '/fonts/DanaFaNum-Black.ttf' },
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
        //  </PDFViewer>
    )
}

export default MyDoc
