const generatePlayerModel = name => {
  return {
    name,
    color: "red",
    score: 0,
    state: "waiting",
  }
}

export { generatePlayerModel }
