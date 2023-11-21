function injectRefresh() {
    document.head.insertAdjacentHTML("beforeend", `<meta http-equiv = "refresh" content = "1; url = https://prodmyinfo.montana.edu/ssomanager/c/SSB?pkg=https://prodmyinfo.montana.edu/pls/bzagent/pk_wg_myinfo_alert.p_alert_launch" />`);
    document.body.insertAdjacentHTML("beforeend", `
        <center>
            <h1>Redirecting to <a href="https://prodmyinfo.montana.edu/ssomanager/c/SSB?pkg=https://prodmyinfo.montana.edu/pls/bzagent/pk_wg_myinfo_alert.p_alert_launch">MyInfo</a></h1>
        </center>
`);
    document.documentElement.style.visibility = '';
}
document.documentElement.style.visibility = 'hidden';
window.addEventListener ("load", injectRefresh, false);
