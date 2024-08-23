// Copyright (c) 2024 hazzuk. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

document.addEventListener('DOMContentLoaded', function() {
    // Try and select the components email link element
    const emailLinkElement = document.querySelector('.email-link');
    if (!emailLinkElement) {
        return;
    }

    // Create the email link from the data attributes
    const user = emailLinkElement.getAttribute('data-user');
    const domain = emailLinkElement.getAttribute('data-domain');
    const email = user + '@' + domain;

    // Create the correct email link programmatically
    emailLinkElement.innerHTML = email;
    emailLinkElement.setAttribute('href', 'mailto:' + email);
});
