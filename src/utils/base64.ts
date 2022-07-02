// eslint-disable-next-line import/prefer-default-export
export const encodeFile = (file: string) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });
