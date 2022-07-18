css = `
#app > ytm-pivot-bar-renderer > ytm-pivot-bar-item-renderer:nth-child(2) {
    display:none;
}
`
var styleSheet = document.createElement("style")
styleSheet.innerText = css
document.head.appendChild(styleSheet)