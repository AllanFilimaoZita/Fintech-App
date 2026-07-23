

function Input( {text, inputType, textPlaceholder }) {

    return (
        <label className="flex flex-col">
            { text }
            <input type={ inputType } placeholder={ textPlaceholder } className="border border-gray-300 rounded px-3 py-3 placeholder:text-gray " />
        </label>
    )
    
}

export default Input