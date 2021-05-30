const { ref } = require("vue")

const getFetch = () => {

    const error = ref(null)
    const loading = ref(true)
    const info = ref([])

    const abortCont = new AbortController()

    const load =async (url) => {
        try {
            const res = await fetch(url, {signal: abortCont.signal})
            if(!res.ok){
                loading.value = false
                throw Error('Could not fetch')
            }
            const data = await res.json()

            loading.value = false
            error.value = null
            info.value = data

        }catch(err){
            loading.value = false

            if(err.name == 'AbortError'){
                console.log('Fetch Aboerted')
            } else {
                error.value = err.message
                console.log(`Error : ${err.message}`)
            }
        }
        return () => abortCont.abort()
    }

    return {info, loading, error, load}
}

export default getFetch