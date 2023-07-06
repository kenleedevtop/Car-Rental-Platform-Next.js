export const formatLongString = (longText: string, length: number): string => {
  if (longText.length >= length) {
    return `${longText.slice(0, length)}...`;
  }
  return longText;
};
