function Card({ children }) {

    return (

        <div className="border rounded-xl border-white/20 flex flex-col items-start justify-between h-26 w-30 p-4 text-white bg-white/10">

            { children }
            
        </div>

    )

}

export default Card