import generateString from "../utilityfunction/generatestring";

function GenerateButton({onClick}){

    return (
        <div className="mb-4 flex flex-col items-center">
           <button 
                className="py-2 px-5 m-2 border-black rounded bg-blue-700 text-gray-200  text-xl"
                onClick={onClick}
            >
             Generate
           </button>
        </div>
    )
}

export default GenerateButton;