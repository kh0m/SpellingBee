export class DictionaryService {
  public static async checkWord(word: string): Promise<boolean> {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    const response = await fetch(url)
    const json = await response.json()
    return json.title != 'No Definitions Found'
  }
}