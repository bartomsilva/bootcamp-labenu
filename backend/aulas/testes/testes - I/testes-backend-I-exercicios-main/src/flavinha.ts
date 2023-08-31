export const exercise2 = (date: string):
string | null => {

  const dateRegex = /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/

  if (typeof date !== "string") return null

  if (dateRegex.exec(date) !== null){
    const newDate = new Date(date)
    return newDate.toLocaleDateString("pt-BR")
  }
  return null
}


console.log(exercise2("2022/02/30"))

