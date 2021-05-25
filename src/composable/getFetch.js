const { ref } = require("vue")

const getFetch = () => {

    const error = ref(null)
    const loading = ref(true)
    const info = ref([])

    const abortCont = new AbortController()

    const load = (url) => {
        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                loading.value = false
                throw Error('Could not fetch')
            }
            return res.json()
        })
        .then(data => {
            loading.value = false
            error.value = null
            info.value = data
        })
        .catch(err => {
            if(err.name == 'AbortError'){
                console.log('Fetch Aboerted')
            } else {
                error.value = err.message
                console.log(`Error : ${err.message}`)
            }
        })

        return () => abortCont.abort()
    }

    return {info, loading, error, load}
}

export default getFetch