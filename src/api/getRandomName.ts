import axios from 'axios';

const getRandomName = async (): Promise<string> => {
    const { data } = await axios<{ FirstName: string }>(
        'http://api.randomdatatools.ru/?unescaped=false&params=FirstName'
    )
    return data.FirstName.toLocaleLowerCase()
}

export default getRandomName