export function handleFormatFileSize(bytes: number) {
  if (bytes === 0) return '0 Bytes';

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const unitIndex = Math.floor(Math.log10(bytes) / 3);

  const size = (bytes / Math.pow(1000, unitIndex)).toFixed(2);
  return `${size} ${units[unitIndex]}`;
}
