const SectionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:mr-section flex w-full flex-col bg-red-500">
            {children}
        </div>
    )
}

export default SectionContainer
