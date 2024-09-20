function wordCount(text: string): Record<string, number> {
    if (!text.trim()) return {}

    const cleanText: string = text.toLowerCase().replace(/[^\w\s]/g, "")

    const words: string[] = cleanText.split(/\s+/)

    const countObj: Record<string, number> = {}
    for (const word of words) {
        if (word) {
            countObj[word] = (countObj[word] || 0) + 1
        }
    }

    return countObj
}

console.log(
    wordCount(
        `Hoje é , um NoVo ! dia . de : Um ; novo                             tempo que ? comecou"`
    )
)

console.log(wordCount(""))


console.log(
    wordCount(
        `20 02 20 00 77`
    )
)