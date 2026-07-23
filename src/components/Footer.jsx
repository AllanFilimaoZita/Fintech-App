

function Footer({ text, link }) {
    
    return (

        <footer className="w-full flex items-center justify-center">
            <p>
                { text } { link }
            </p>
        </footer>

    )

}

export default Footer