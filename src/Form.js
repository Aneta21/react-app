import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <div className="row">
        <div className="FormBody">
          <form>
            <div className="input-group mb-3 mt-2">
              <input
                type="search"
                placeholder="Search a city"
                className="form-control "
                id="input"
                autoComplete="off"
              />
              <button
                type="submit"
                className="btn btn-outline-secondary"
                id="search_btn"
              >
                <span className="fas fa-search"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
