// Copyright (c) 2024 hazzuk
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

document.addEventListener('DOMContentLoaded', function () {
    // Get existing footer elements
    const footerSpan = document.querySelector('.gh-footer-logo');
    const footerLogo = footerSpan.querySelector('img');

    function createArrow() {
        // Create span with arrow class
        const arrowSpan = document.createElement('span');
        arrowSpan.className = 'back-to-top-arrow';

        // Append the arrow span to the footer span
        footerSpan.appendChild(arrowSpan);

        // Set the position of the arrow to match the position of the image
        const logoRect = footerLogo.getBoundingClientRect();
        const spanRect = footerSpan.getBoundingClientRect();
        const topOffset = logoRect.top - spanRect.top;
        const leftOffset = logoRect.left - spanRect.left;

        arrowSpan.style.top = `${topOffset}px`;
        arrowSpan.style.left = `${leftOffset}px`;
    }

    // Create the arrow element
    createArrow();

    // Add click event listener to scroll to top
    footerLogo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
