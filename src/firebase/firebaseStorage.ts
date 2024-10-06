import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';

// stotageに画像をアップロードする関数
export function uploadImage(file: File, uid: string | undefined, itemID: string, setLoading: (value: boolean) => void) {
  try {
    if (!file) {
      console.error('ファイルが選択されていません');
    }
    if (!uid) {
      console.error('ユーザーが選択されていません');
    }
    const storageRef = ref(storage, `images/${uid}/${itemID}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      setLoading(false);
      console.log('Uploaded a blob or file!', snapshot);
    });
  } catch (err) {
    console.log(err);
  }
}

// 画像の取得
export async function getImageUrl(uid: string | undefined, itemID: string) {
  const gsReference = ref(storage, `gs://${import.meta.env.VITE_storageBucket}/images/${uid}/${itemID}`);
  const getUrl = getDownloadURL(gsReference).then((url) => {
    console.log('File available at', url);
    return url;
  });
  return await getUrl;
}
// 画像の消去
export function deleteImage(uid: string | undefined, itemID: string) {
  const storageRef = ref(storage, `images/${uid}/${itemID}`);

  deleteObject(storageRef)
    .then(() => {
      // File deleted successfully
      console.log('File deleted successfully');
    })
    .catch((error) => {
      console.error('Error removing file:', error);
    });
}
