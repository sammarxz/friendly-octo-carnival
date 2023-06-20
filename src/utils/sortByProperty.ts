function sortByProperty<T>(data: T[], property: keyof T): T[] {
  return data.sort((a, b) => {
    if (a[property] < b[property]) {
      return 1;
    }
    if (a[property] > b[property]) {
      return -1;
    }
    return 0;
  });
}

export { sortByProperty };
