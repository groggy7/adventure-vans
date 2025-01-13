export default function Footer() {
    const dateObj = new Date()
    const year = dateObj.getFullYear()

    return <div className="footer">
        Ⓒ {year} #VANLIFE
    </div>
}