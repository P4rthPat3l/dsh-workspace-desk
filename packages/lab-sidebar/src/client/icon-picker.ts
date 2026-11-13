/** Browser file picker for a workspace icon upload. */
import { MAX_ICON_BYTES } from './icons.ts';

const ACCEPT = 'image/png,image/svg+xml,image/x-icon,image/vnd.microsoft.icon,image/jpeg,image/webp,image/gif,.ico';

/**
 * Ask the user for an image and read it as a data URL.
 * @returns the data URL, or undefined when the user cancels.
 * @throws when the file is over the icon limit or cannot be read.
 */
export async function pickIconDataUrl(): Promise<string | undefined> {
  const file = await new Promise<File | undefined>((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = ACCEPT;
    input.addEventListener('change', () => { resolve(input.files?.[0]); }, { once: true });
    input.addEventListener('cancel', () => { resolve(undefined); }, { once: true });
    input.click();
  });
  if (file === undefined) return undefined;
  if (file.size > MAX_ICON_BYTES) throw new Error(`icon is ${file.size} bytes, over the ${MAX_ICON_BYTES} byte limit`);
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') resolve(reader.result);
      else reject(new Error('icon could not be read as a data URL'));
    });
    reader.addEventListener('error', () => { reject(reader.error ?? new Error('icon could not be read')); });
    reader.readAsDataURL(file);
  });
}
