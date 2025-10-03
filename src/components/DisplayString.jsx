function DisplayString({randomString,setRandomstring}){

    return (
        <div className="flex flex-col items-center">
        
            <textarea
              rows={4} 
              className="border rounded w-[400px] p-2"
              value={randomString}
              onChange={(e) => setRandomstring(e.target.value)}
            >

            </textarea>
        </div>
    )
}

export default DisplayString;