(() => {
    const wide = [];
    document.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > window.innerWidth + 2 || r.left < -2 || el.scrollWidth > window.innerWidth + 2) {
            wide.push({
                tag: el.tagName,
                id: el.id,
                class: el.className,
                rect: { left: r.left, right: r.right, width: r.width },
                scrollWidth: el.scrollWidth,
                text: el.innerText ? el.innerText.substring(0, 30) : ''
            });
        }
    });
    return JSON.stringify(wide, null, 2);
})()
