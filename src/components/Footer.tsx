export default function Footer() {
    const dateObj = new Date()
    const year = dateObj.getFullYear()

    return <div className="bg-footer_bg text-footer_text flex justify-center items-center p-6 text-lg">
        Ⓒ {year} #VANLIFE
    </div>
}