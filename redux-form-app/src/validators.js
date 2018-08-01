export const required = value => (value ? undefined : "Required");

export const nonEmpty = value => (value.trim() !== '' ? undefined : 'Cannot be empty')

export const exactIdLength = value => (value.length === 5 ? undefined : 'Must be 5 digits long')

export const isNumber = value => {
  const checkVal = parseInt(value, 10);
  return !isNaN(checkVal) ? undefined : 'Input must be number';
}