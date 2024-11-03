// Copyright (c) 2024 hazzuk
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

document.addEventListener('DOMContentLoaded', () => {
    const tocList = document.getElementById('tocList');

    // Check for toc
    if (!tocList) return;

    const headers = document.querySelectorAll('h2');
    const tocItems = [];

    // Create toc item elements for each h2 header
    headers.forEach(header => {
        const id = header.id;
        const text = header.textContent;

        if (id) {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `#${id}`;
            anchor.className = 'toc-item';
            anchor.textContent = text;

            listItem.appendChild(anchor);
            tocItems.push(listItem);
        }
    });

    // Replace placeholder items with actual toc items
    if (tocItems.length > 0) {
        tocList.innerHTML = '';
        tocItems.forEach(item => tocList.appendChild(item));
    }
});
