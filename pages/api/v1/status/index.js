function status(request, response) {
  response.status(200).json("alunos de curso.dev são pessoas acima da média");
}

export default status;