const createClassName = (
  baseClass: string,
  conditions: { [key: string]: boolean },
): string => {
  const classNames: string[] = [baseClass];

  for (const condition in conditions) {
    if (conditions[condition]) {
      classNames.push(condition);
    }
  }

  return classNames.join(" ");
};

export { createClassName };
