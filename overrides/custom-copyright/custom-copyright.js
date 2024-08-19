// Copyright (c) 2024 hazzuk. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

document.addEventListener('DOMContentLoaded', function () {
    const ghostCopyright = document.querySelector('.gh-footer-copyright');
    const currentYear = new Date().getFullYear();

    function getMainDomain() {
        // Get and split the hostname
        const hostname = window.location.hostname;
        const parts = hostname.split('.');

        // If there are more than two parts, return the last two parts
        // Change this if you use a second level domain (e.g. .co.uk)
        if (parts.length > 2) {
            return parts.slice(-2).join('.');
        }
        // If there are only two parts or less, return the hostname as is
        return hostname;
    }

    const mainDomain = getMainDomain();

    // Set the copyright text
    ghostCopyright.textContent = `© ${currentYear} ${mainDomain}`;

    // Display final content
    ghostCopyright.style.display = "unset";
});
