import React from "react";

const Replace = () => {
  return <>
    <div className="row ms-3 me-3 my-5 half-width">
        <div className="col-md-3 d-flex justify-content-center">
            Select other element
        </div>
        <div className="col-md-2">
            <select className="form-select" aria-label="Default select example">
                <option selected>--------</option>
                <option value="1">Element_1</option>
                <option value="2">Element_2</option>
                <option value="3">Element_3</option>
                <option value="3">Element_4</option>
                <option value="1">Element_5</option>
                <option value="2">Element_6</option>
                <option value="3">Element_7</option>
            </select>
        </div>
    </div>
  </>
}
export default Replace;