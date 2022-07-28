// author @arunsingh28

window.addEventListener('DOMContentLoaded', () => {
    //    init main code after properly load the content
    initApp()
})


const initApp = () => {
    // render Image to DOM
    renderImage()
    // render controller to DOM     
    editController()
    // call editmode     
    editMode()
}

// upload iamge
const uploadImage = () => {
    const url = prompt('Enter image URL:')
    return url
}

const renderImage = () => {
    const imgDiv = document.createElement('img')
    // grab img url
    imgDiv.src = uploadImage()
    // set height & width
    imgDiv.style.height = 400 + 'px'
    imgDiv.style.width = 400 + 'px'
    // append to DOM
    document.body.append(imgDiv)
}

// edit contollers
const editController = () => {
    // ragne for hue
    const rangeHue = document.createElement('input')
    const rangeBrightness = document.createElement('input')
    const hueLabel = document.createElement('label')
    const brightnessLabel = document.createElement('label')
    const btn = document.createElement('button')
    const rangeContrast = document.createElement('input')
    const labelContrast = document.createElement('label')

    btn.innerHTML = 'B/W'
    hueLabel.innerHTML = 'Hue'
    brightnessLabel.innerHTML = 'Brightness'
    labelContrast.innerHTML = 'Contrast'

    btn.style.padding = 10 + 'px'
    btn.style.marginTop = 20 + 'px'
    btn.style.marginBottom = 20 + 'px'
    rangeHue.style.marginBottom = 20 + 'px'
    rangeBrightness.style.marginBottom = 20 + 'px'

    rangeHue.setAttribute('type', 'range')
    rangeHue.setAttribute('max', 100)
    rangeHue.setAttribute('value', 0)


    rangeBrightness.setAttribute('type', 'range')
    rangeBrightness.setAttribute('max', 5)
    rangeBrightness.setAttribute('step', .1)
    rangeBrightness.setAttribute('value', 0.5)

    rangeContrast.setAttribute('type', 'range')
    rangeContrast.setAttribute('max', 5)
    rangeContrast.setAttribute('step', .1)
    rangeContrast.setAttribute('value', 0.5)


    document.body.append(btn)

    // Hue
    document.body.append(hueLabel)
    document.body.append(rangeHue)

    // brightness
    document.body.append(brightnessLabel)
    document.body.append(rangeBrightness)

    document.body.append(labelContrast)
    document.body.append(rangeContrast)
}

// edit
const editMode = () => {

    const img = document.getElementsByTagName('img')[0]
    // hue
    const hue = document.getElementsByTagName('input')[0]
    // brightness
    const brightness = document.getElementsByTagName('input')[1]
    // contrast
    const contrast = document.getElementsByTagName('input')[2]
    // B/W
    const btn = document.getElementsByTagName('button')[0]

    brightness.addEventListener('input', () => {
        console.log(brightness.value)
        var filter = 'brightness(x)'.replace('x', brightness.value)
        img.style.filter = filter
    })

    hue.addEventListener('input', () => {
        const filter = 'hue-rotate(xdeg)'.replace('x', hue.value)
        img.style.filter = filter
    })

    contrast.addEventListener('input', () => {
        const filter = 'contrast(x)'.replace('x', contrast.value)
        img.style.filter = filter
    })

    btn.addEventListener('click', () => {
        let filter = 'grayscale(x)'.replace('x', 1)
        // button toggler         
        if (img.style.filter !== filter) {
            img.style.filter = filter
            btn.innerHTML = 'Make Colorefull'
        } else {
            filter = 'grayscale(x)'.replace('x', 0)
            img.style.filter = filter
            btn.innerHTML = 'Make Blackwhite'
        }
    })
}
