import { findFile } from '../service/file.service';

export async function generateRandomName() {
  let exists: boolean = true;
  let file_name: string = ' ';
  //generate random name for the file
  while (exists) {
    file_name = (Math.random() + 1).toString(36).substring(7);
    let file = await findFile({ name: file_name });
    file ? (exists = true) : (exists = false);
  }
  return file_name;
}
