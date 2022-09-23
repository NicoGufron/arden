import React, { useState } from 'react';

function Navbar() {

    const [darkMode, setDarkMode] = useState(true);

    function changeMode () {
        setDarkMode(!darkMode);
    }

    return (
        <>
        </>
    );
}

export default Navbar;