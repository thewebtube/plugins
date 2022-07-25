const btn_dl = `
<c3-material-button class="button-renderer compact  slim_video_action_bar_renderer_button" data-style="STYLE_OPACITY" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false" data-button-id="" id="dl_btn">

<button class="c3-material-button-button" aria-label="">

<div class="cbox">

<c3-icon class="button-renderer-icon">



<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.625 19q-.7 0-1.162-.462Q5 18.075 5 17.375V15h1v2.375q0 .25.188.437.187.188.437.188h10.75q.25 0 .437-.188.188-.187.188-.437V15h1v2.375q0 .7-.462 1.163-.463.462-1.163.462ZM12 15.225 8.45 11.7l.725-.725L11.5 13.3V4.65h1v8.65l2.325-2.325.725.725Z"/></svg>
</c3-icon>

<div class="button-renderer-text">Download</div>

</div>

</button>

</c3-material-button>
`


function insert_dl_btn(){

    let btns = document.querySelector("#app > div.page-container > ytm-watch > ytm-single-column-watch-next-results-renderer > div > ytm-slim-video-metadata-section-renderer > ytm-slim-video-action-bar-renderer > div > c3-material-button:nth-child(3)")
    btns.insertAdjacentHTML("beforebegin", btn_dl)

}
insert_dl_btn()