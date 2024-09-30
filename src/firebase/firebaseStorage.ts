import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase"


// stotageに画像をアップロードする関数
export function uploadImage(file: File){
    try{
        if(!file){
            console.error("ファイルが選択されていません")
        }
        const storageRef = ref(storage, `images/${file.name}`)
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
        })
    }catch (err) {
        console.log(err);
      }
};

// // 画像のURLを取得する関数
// export function getImageUrl(file: File){
//     try{
//         if(!file){
//             console.error("ファイルが選択されていません")
//         }
//         const storageRef = ref(storage, `images/${file.name}`)
//         return storageRef.getDownloadURL().then((url) => {
//             console.log('File available at', url);
//             return url
//         })
//     }catch (err) {
//         console.log(err);
//       }
// };