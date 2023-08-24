import getRandomName from '@/api/getRandomName'
import { onMounted, ref } from 'vue'

const useRandomWord = () => {
    const word = ref<string>('')
    const getRandomWord = async () => {
        try {
            word.value = await getRandomName()
        } catch (error) {
            console.error(error)
            word.value = ''
        }
    }

    onMounted(() => {
        getRandomWord()
    })

    return { word, getRandomWord }
}

export default useRandomWord