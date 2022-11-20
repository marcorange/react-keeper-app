import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>by Alisa {year}</p>
        </footer>
    );
}

export default Footer;
