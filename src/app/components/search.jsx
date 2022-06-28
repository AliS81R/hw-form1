import React from "react";
import PropTypes from "prop-types";
const Search = ({ onChange, value }) => {
    return (
        <form className="w-100 me-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                onChange={onChange}
                value={value}
            />
        </form>
    );
};
Search.propTypes = {
    setValue: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
export default Search;
