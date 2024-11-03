// Copyright (c) 2024 hazzuk
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

document.addEventListener("DOMContentLoaded", function () {
    // Select the Ghost page meta element
    const metaElement = document.querySelector('meta[property="article:modified_time"]');
    // Try and select the components text element
    const textElement = document.querySelector('.last-updated h4');
    if (!textElement) {
        return;
    }

    if (metaElement) {
        // Get the pages last updated date
        const contentDate = new Date(metaElement.getAttribute('content'));
        // Get the current date
        const currentDate = new Date();

        // Calculate the difference in time
        const timeDifference = currentDate - contentDate;

        // Convert the time differences
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const weeksDifference = Math.floor(daysDifference / 7);
        const monthsDifference = Math.floor(daysDifference / 30);

        let message = '';

        // Determine the message based on the days difference
        if (daysDifference < 1) {
            message = `(Last updated 1 day ago)`;
        } else if (daysDifference < 7) {
            message = `(Last updated ${daysDifference} days ago)`;
        } else if (weeksDifference < 4) {
            message = `(Last updated ${weeksDifference} weeks ago)`;
        } else {
            message = `(Last updated ${monthsDifference} months ago)`;
        }

        // Set the message text
        textElement.textContent = message;
    }
});
