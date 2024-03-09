export const checkImageURL = (url)=> {
    if(!url) return false
    else{
        const pattern = new RegExp('^http?:\\/\\/.+\\.(png|jpg|bmp|gif|webp)$', 'i')

        return pattern.test(url)
    }
}