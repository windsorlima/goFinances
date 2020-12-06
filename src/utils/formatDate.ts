const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-br').format(date); // TODO

export default formatDate;
