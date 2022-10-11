function currentThemePref()
{
    let prefs = window.sessionStorage.getItem('theme-pref');
    if (prefs === null)
    {
        return "system";
    }
    return prefs;
}

function nextThemePref(currentThemePref)
{
    switch (currentThemePref)
    {
        case 'system':
            return 'dark';
        case 'dark':
            return 'light';
        case 'light':
        default:
            return 'dark';
    }
}

function activateTheme(themePref)
{
    const svg = document.getElementById('themeSwitcherIcon');
    const useIcon = svg.getElementsByTagName('use').item(0);
    switch (themePref)
    {
        case 'system':
            this.document.body.classList.remove('theme-dark');
            this.document.body.classList.remove('theme-light');
            this.document.body.classList.add('theme-dark-auto');
            useIcon.setAttribute('xlink:href', '/static/tabler/tabler-sprite.svg#tabler-moon');
            break;
        case 'light':
            this.document.body.classList.remove('theme-dark');
            this.document.body.classList.remove('theme-dark-auto');
            this.document.body.classList.add('theme-light');
            useIcon.setAttribute('xlink:href', '/static/tabler/tabler-sprite.svg#tabler-moon');
            break;
        case 'dark':
            this.document.body.classList.remove('theme-dark-auto');
            this.document.body.classList.remove('theme-light');
            this.document.body.classList.add('theme-dark');
            useIcon.setAttribute('xlink:href', '/static/tabler/tabler-sprite.svg#tabler-sun');
            break;
        default:
            break;
    }
}

window.addEventListener('DOMContentLoaded', function(ev) {
    const switcher = document.getElementById('themeSwitcher');
    switcher.addEventListener('click', function(ev) {
        const themePref = currentThemePref();
        const newPref = nextThemePref(themePref);
        window.sessionStorage.setItem('theme-pref', newPref);
        activateTheme(newPref);
    })
});

const themePref = currentThemePref();
activateTheme(themePref);
