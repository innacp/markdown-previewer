
export function TextInput({markdown, handleInputChange}) {    //passing props from App.js
    return (
    <div className="container">
      <textarea className="input" 
      value={markdown}                    //using props
      onchange={handleInputChange}
      placeholder="Enter Markdown here">

      </textarea>
    </div>
    )
}